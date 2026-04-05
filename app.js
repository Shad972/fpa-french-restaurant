/* ============================================================
   FPA French Restaurant – Main Application Logic
   ============================================================ */

const APP = (function () {
  'use strict';

  /* --- State --- */
  let yearGroup = null;
  let data = null;
  let db = null;
  let studentId = null;
  let studentName = '';
  let selectedAvatar = null;
  let classRef = null;

  const AVATARS = [
    '\u{1F468}\u200D\u{1F373}', // chef
    '\u{1F9D1}\u200D\u{1F373}', // cook
    '\u{1F469}\u200D\u{1F373}', // woman cook
    '\u{1F37D}\uFE0F',          // fork and knife with plate
    '\u{1F950}',                // croissant
    '\u{1F354}',                // hamburger
    '\u{1F370}',                // shortcake
    '\u{1F355}',                // pizza
    '\u{1F96A}',                // sandwich
    '\u{1F9C1}',                // cupcake
    '\u{1F382}',                // birthday cake
    '\u{1F363}',                // sushi
    '\u{1F95E}',                // pancakes
    '\u{1F32E}',                // taco
    '\u{1F366}',                // soft ice cream
  ];

  const STAGES = ['lobby','vocab','menu','roleplay','tf','mc','dd','scenario','review','hall'];

  /* --- Quiz state --- */
  let tfIndex = 0, tfScore = 0, tfAnswers = [], tfTimer = null, tfSeconds = 0;
  let mcIndex = 0, mcScore = 0, mcAnswers = [], mcTimer = null, mcSeconds = 0;
  let ddTimer = null, ddSeconds = 0, ddMatched = 0, ddPairs = [], ddAnswers = {};
  let ddDragItem = null;
  let scenarioSelections = [];

  /* ─────────────────────────────────────────────
     INIT
     ───────────────────────────────────────────── */
  function init() {
    const params = new URLSearchParams(window.location.search);
    const y = parseInt(params.get('y'));
    if (!y || !YEAR_DATA[y]) {
      document.body.innerHTML = '<div style="text-align:center;padding:4rem;font-family:Inter,sans-serif"><h2>Invalid year group</h2><p>Please use a link provided by your teacher.<br>Example: ?y=7, ?y=8, ?y=9, or ?y=10</p></div>';
      return;
    }
    yearGroup = y;
    data = YEAR_DATA[y];

    // Firebase
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    classRef = db.ref('classes/y' + yearGroup);

    // Check for returning student
    const saved = localStorage.getItem('fpa_student_y' + yearGroup);
    if (saved) {
      try {
        const s = JSON.parse(saved);
        studentId = s.id;
        studentName = s.name;
        selectedAvatar = s.avatar;
        // Verify still in DB
        classRef.child('students/' + studentId).once('value').then(snap => {
          if (snap.exists()) {
            enterLobby();
          } else {
            localStorage.removeItem('fpa_student_y' + yearGroup);
            showWelcome();
          }
        });
        return;
      } catch (e) { /* fall through */ }
    }

    showWelcome();
  }

  /* ─────────────────────────────────────────────
     WELCOME / PROFILE
     ───────────────────────────────────────────── */
  function showWelcome() {
    document.getElementById('welcome-title').textContent = data.title;
    document.getElementById('welcome-subtitle').textContent = 'Year ' + yearGroup + ' — ' + data.subtitle;
    document.title = 'Year ' + yearGroup + ' — ' + data.title;

    const grid = document.getElementById('avatar-grid');
    grid.innerHTML = '';
    AVATARS.forEach((emoji, i) => {
      const div = document.createElement('div');
      div.className = 'avatar-option';
      div.textContent = emoji;
      div.dataset.index = i;
      div.addEventListener('click', () => selectAvatar(i, div));
      grid.appendChild(div);
    });

    // Watch taken avatars
    classRef.child('students').on('value', snap => {
      const students = snap.val() || {};
      const taken = new Set();
      Object.values(students).forEach(s => { if (s.avatar !== undefined) taken.add(s.avatar); });
      document.querySelectorAll('.avatar-option').forEach(el => {
        const idx = parseInt(el.dataset.index);
        if (taken.has(idx) && idx !== selectedAvatar) {
          el.classList.add('taken');
        } else {
          el.classList.remove('taken');
        }
      });
    });

    const input = document.getElementById('input-name');
    input.addEventListener('input', checkJoinReady);
    document.getElementById('btn-join').addEventListener('click', joinClass);
  }

  function selectAvatar(index, el) {
    if (el.classList.contains('taken')) return;
    document.querySelectorAll('.avatar-option').forEach(a => a.classList.remove('selected'));
    el.classList.add('selected');
    selectedAvatar = index;
    checkJoinReady();
  }

  function checkJoinReady() {
    const name = document.getElementById('input-name').value.trim();
    document.getElementById('btn-join').disabled = !(name.length >= 1 && selectedAvatar !== null);
  }

  function joinClass() {
    studentName = document.getElementById('input-name').value.trim();
    if (!studentName || selectedAvatar === null) return;

    // Check class capacity
    classRef.child('students').once('value').then(snap => {
      const students = snap.val() || {};
      const count = Object.keys(students).length;
      if (count >= data.maxStudents) {
        document.getElementById('join-error').textContent = 'Sorry, this class is full (' + data.maxStudents + ' students maximum).';
        return;
      }
      // Check name not taken
      const nameTaken = Object.values(students).some(s => s.name && s.name.toLowerCase() === studentName.toLowerCase());
      if (nameTaken) {
        document.getElementById('join-error').textContent = 'That name is already taken. Please use a different name.';
        return;
      }

      // Create student
      const ref = classRef.child('students').push();
      studentId = ref.key;
      ref.set({
        name: studentName,
        avatar: selectedAvatar,
        online: true,
        currentStage: 'lobby',
        joinedAt: firebase.database.ServerValue.TIMESTAMP,
        scores: {},
        confidence: 0
      });

      // Set disconnect handler
      ref.child('online').onDisconnect().set(false);

      // Save locally
      localStorage.setItem('fpa_student_y' + yearGroup, JSON.stringify({
        id: studentId, name: studentName, avatar: selectedAvatar
      }));

      enterLobby();
    });
  }

  /* ─────────────────────────────────────────────
     LOBBY
     ───────────────────────────────────────────── */
  function enterLobby() {
    showScreen('lobby');
    document.getElementById('lobby-name').textContent = studentName;
    document.getElementById('lobby-avatar').textContent = AVATARS[selectedAvatar] || '';
    document.getElementById('lobby-restaurant-name').textContent = data.menu.name;
    document.title = studentName + ' — Year ' + yearGroup + ' ' + data.title;

    // Mark online
    classRef.child('students/' + studentId + '/online').set(true);
    classRef.child('students/' + studentId + '/online').onDisconnect().set(false);

    // Watch classmates
    classRef.child('students').on('value', snap => {
      const students = snap.val() || {};
      const list = document.getElementById('classmates-list');
      list.innerHTML = '';
      Object.entries(students).forEach(([id, s]) => {
        if (!s.online) return;
        const row = document.createElement('div');
        row.className = 'classmate-row';
        row.innerHTML = '<div class="avatar-small">' + (AVATARS[s.avatar] || '') + '</div><span class="name">' + escHtml(s.name) + (id === studentId ? ' (you)' : '') + '</span>';
        list.appendChild(row);
      });
    });

    // Watch stage unlocks
    classRef.child('settings/stages').on('value', snap => {
      const stages = snap.val() || {};
      checkStageAccess(stages);
    });

    // Watch broadcast messages
    classRef.child('settings/broadcast').on('value', snap => {
      const msg = snap.val();
      const bar = document.getElementById('broadcast-bar');
      const msgEl = document.getElementById('broadcast-msg');
      if (msg && msg.text) {
        msgEl.textContent = msg.text;
        bar.classList.remove('hidden');
        setTimeout(() => bar.classList.add('hidden'), 8000);
      }
    });
  }

  /* ─────────────────────────────────────────────
     STAGE ACCESS CONTROL
     ───────────────────────────────────────────── */
  let currentStage = 'lobby';

  function checkStageAccess(stages) {
    // Find the highest unlocked stage the student should be on
    const stageOrder = ['vocab','menu','roleplay','tf','mc','dd','scenario','review'];

    // Get student's current completed stages from Firebase
    classRef.child('students/' + studentId).once('value').then(snap => {
      const student = snap.val();
      if (!student) return;

      const scores = student.scores || {};

      for (const stage of stageOrder) {
        if (stages[stage] && stages[stage].unlocked) {
          // This stage is unlocked — has student completed prior stages?
          if (shouldShowStage(stage, scores, stages)) {
            if (currentStage === 'lobby' || currentStage === 'locked') {
              goToStage(stage);
            }
            return;
          }
        }
      }
    });
  }

  function shouldShowStage(stage, scores, stages) {
    // Check if all prior stages are either completed or this is the first unlocked one
    const order = ['vocab','menu','roleplay','tf','mc','dd','scenario','review'];
    const idx = order.indexOf(stage);
    for (let i = 0; i < idx; i++) {
      if (!stages[order[i]] || !stages[order[i]].unlocked) return false;
      // For scored stages, check completion
      if (['tf','mc','dd'].includes(order[i]) && !scores[order[i]]) return false;
    }
    return true;
  }

  function goToStage(stage) {
    currentStage = stage;
    updateStudentStage(stage);

    switch (stage) {
      case 'vocab': initVocab(); break;
      case 'menu': initMenu(); break;
      case 'roleplay': initRoleplay(); break;
      case 'tf': initTrueFalse(); break;
      case 'mc': initMultipleChoice(); break;
      case 'dd': initDragDrop(); break;
      case 'scenario': initScenario(); break;
      case 'review': initReview(); break;
      default: showScreen('locked');
    }
  }

  function proceedToNext(currentStageName) {
    const order = ['vocab','menu','roleplay','tf','mc','dd','scenario','review','hall'];
    const idx = order.indexOf(currentStageName);
    if (idx < 0 || idx >= order.length - 1) return;

    const next = order[idx + 1];

    // Check if next stage is unlocked
    classRef.child('settings/stages/' + next).once('value').then(snap => {
      const val = snap.val();
      if (val && val.unlocked) {
        goToStage(next);
      } else {
        currentStage = 'locked';
        showScreen('locked');
        // Watch for unlock
        classRef.child('settings/stages/' + next).on('value', snap2 => {
          const v = snap2.val();
          if (v && v.unlocked && currentStage === 'locked') {
            classRef.child('settings/stages/' + next).off();
            goToStage(next);
          }
        });
      }
    });
  }

  function updateStudentStage(stage) {
    if (studentId) {
      classRef.child('students/' + studentId + '/currentStage').set(stage);
    }
  }

  /* ─────────────────────────────────────────────
     VOCABULARY WARM-UP
     ───────────────────────────────────────────── */
  function initVocab() {
    showScreen('vocab');
    const grid = document.getElementById('vocab-grid');
    grid.innerHTML = '';
    let revealed = 0;
    const total = data.vocabulary.length;
    document.getElementById('vocab-total').textContent = total;
    document.getElementById('vocab-count').textContent = '0';
    document.getElementById('vocab-bar').style.width = '0%';
    document.getElementById('btn-vocab-done').disabled = true;

    // Category filter buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        document.querySelectorAll('.vocab-card').forEach(card => {
          card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
        });
      });
    });

    data.vocabulary.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'vocab-card';
      card.dataset.cat = item.category;
      card.innerHTML =
        '<div class="french">' + escHtml(item.french) + '</div>' +
        '<div class="phonetic">' + escHtml(item.phonetic) + '</div>' +
        '<div class="english">' + escHtml(item.english) + '</div>';
      card.addEventListener('click', () => {
        if (!card.classList.contains('revealed')) {
          card.classList.add('revealed');
          revealed++;
          document.getElementById('vocab-count').textContent = revealed;
          document.getElementById('vocab-bar').style.width = (revealed / total * 100) + '%';
          if (revealed >= total) {
            document.getElementById('btn-vocab-done').disabled = false;
          }
        }
      });
      grid.appendChild(card);
    });

    document.getElementById('btn-vocab-done').onclick = () => {
      updateStudentStage('menu');
      proceedToNext('vocab');
    };
  }

  /* ─────────────────────────────────────────────
     MENU EXPLORATION
     ───────────────────────────────────────────── */
  function initMenu() {
    showScreen('menu');
    document.getElementById('menu-name').textContent = data.menu.name;
    const sections = document.getElementById('menu-sections');
    sections.innerHTML = '';

    data.menu.sections.forEach(sec => {
      const div = document.createElement('div');
      div.className = 'menu-section';
      div.innerHTML = '<div class="menu-section-title">' + escHtml(sec.title) + '</div>';
      sec.items.forEach(item => {
        const row = document.createElement('div');
        row.className = 'menu-item';
        row.innerHTML =
          '<div><span class="item-name">' + escHtml(item.french) + '</span><span class="item-english">' + escHtml(item.english) + '</span></div>' +
          '<span class="item-price">' + escHtml(item.price) + '</span>';
        row.addEventListener('click', () => row.classList.toggle('show-english'));
        div.appendChild(row);
      });
      sections.appendChild(div);
    });

    document.getElementById('btn-menu-done').onclick = () => proceedToNext('menu');
  }

  /* ─────────────────────────────────────────────
     ROLEPLAY
     ───────────────────────────────────────────── */
  function initRoleplay() {
    showScreen('roleplay');
    const tabs = document.getElementById('roleplay-tabs');
    const content = document.getElementById('roleplay-content');
    tabs.innerHTML = '';

    data.roleplay.scenarios.forEach((sc, i) => {
      const tab = document.createElement('button');
      tab.className = 'rp-tab ' + sc.type + (i === 0 ? ' active' : '');
      tab.textContent = sc.title;
      tab.addEventListener('click', () => {
        tabs.querySelectorAll('.rp-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderScenario(sc);
      });
      tabs.appendChild(tab);
    });

    renderScenario(data.roleplay.scenarios[0]);

    // Confidence buttons
    document.querySelectorAll('.conf-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.conf-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const val = parseInt(btn.dataset.val);
        classRef.child('students/' + studentId + '/confidence').set(val);
        document.getElementById('btn-roleplay-done').disabled = false;
      });
    });

    document.getElementById('btn-roleplay-done').onclick = () => proceedToNext('roleplay');
  }

  function renderScenario(sc) {
    const content = document.getElementById('roleplay-content');
    content.innerHTML = '<div class="rp-context">' + escHtml(sc.context) + '</div>';
    sc.lines.forEach(line => {
      const div = document.createElement('div');
      div.className = 'rp-line ' + line.role;
      div.innerHTML =
        '<div class="rp-role">' + (line.role === 'waiter' ? 'Waiter' : 'Customer') + '</div>' +
        '<div class="rp-text">' +
          '<div class="rp-french">' + escHtml(line.french) + '</div>' +
          '<div class="rp-phonetic">' + escHtml(line.phonetic) + '</div>' +
          '<div class="rp-english">' + escHtml(line.english) + '</div>' +
        '</div>';
      div.addEventListener('click', () => div.classList.toggle('show-phonetic'));
      content.appendChild(div);
    });
  }

  /* ─────────────────────────────────────────────
     TRUE / FALSE
     ───────────────────────────────────────────── */
  function initTrueFalse() {
    showScreen('tf');
    tfIndex = 0; tfScore = 0; tfAnswers = []; tfSeconds = 0;
    document.getElementById('tf-total').textContent = data.trueFalse.length;
    startTimer('tf');
    showTFQuestion();
  }

  function showTFQuestion() {
    const q = data.trueFalse[tfIndex];
    document.getElementById('tf-current').textContent = tfIndex + 1;
    document.getElementById('tf-statement').textContent = q.statement;
    document.getElementById('tf-feedback').classList.add('hidden');
    document.getElementById('tf-next').classList.add('hidden');
    document.querySelectorAll('.btn-tf').forEach(b => b.disabled = false);
  }

  function answerTF(answer) {
    const q = data.trueFalse[tfIndex];
    const correct = answer === q.answer;
    if (correct) tfScore++;
    tfAnswers.push({ question: q.statement, yourAnswer: answer, correctAnswer: q.answer, correct, explanation: q.explanation });

    document.querySelectorAll('.btn-tf').forEach(b => b.disabled = true);
    const fb = document.getElementById('tf-feedback');
    fb.classList.remove('hidden', 'correct', 'incorrect');
    fb.classList.add(correct ? 'correct' : 'incorrect');
    fb.textContent = (correct ? 'Correct! ' : 'Incorrect. ') + q.explanation;
    document.getElementById('tf-next').classList.remove('hidden');
  }

  function nextTF() {
    tfIndex++;
    if (tfIndex >= data.trueFalse.length) {
      stopTimer('tf');
      saveScore('tf', tfScore, data.trueFalse.length, tfSeconds, tfAnswers);
      proceedToNext('tf');
    } else {
      showTFQuestion();
    }
  }

  /* ─────────────────────────────────────────────
     MULTIPLE CHOICE
     ───────────────────────────────────────────── */
  function initMultipleChoice() {
    showScreen('mc');
    mcIndex = 0; mcScore = 0; mcAnswers = []; mcSeconds = 0;
    document.getElementById('mc-total').textContent = data.multipleChoice.length;
    startTimer('mc');
    showMCQuestion();
  }

  function showMCQuestion() {
    const q = data.multipleChoice[mcIndex];
    document.getElementById('mc-current').textContent = mcIndex + 1;
    document.getElementById('mc-question').textContent = q.question;
    document.getElementById('mc-feedback').classList.add('hidden');
    document.getElementById('mc-next').classList.add('hidden');

    const opts = document.getElementById('mc-options');
    opts.innerHTML = '';
    q.options.forEach((opt, i) => {
      const div = document.createElement('div');
      div.className = 'mc-opt';
      div.textContent = opt;
      div.addEventListener('click', () => answerMC(i, q, opts));
      opts.appendChild(div);
    });
  }

  function answerMC(selected, q, container) {
    const correct = selected === q.correct;
    if (correct) mcScore++;
    mcAnswers.push({ question: q.question, yourAnswer: q.options[selected], correctAnswer: q.options[q.correct], correct, explanation: q.explanation });

    const options = container.querySelectorAll('.mc-opt');
    options.forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === q.correct) opt.classList.add('correct-answer');
      if (i === selected && !correct) opt.classList.add('wrong-answer');
    });

    const fb = document.getElementById('mc-feedback');
    fb.classList.remove('hidden', 'correct', 'incorrect');
    fb.classList.add(correct ? 'correct' : 'incorrect');
    fb.textContent = (correct ? 'Correct! ' : 'Incorrect. ') + q.explanation;
    document.getElementById('mc-next').classList.remove('hidden');
  }

  function nextMC() {
    mcIndex++;
    if (mcIndex >= data.multipleChoice.length) {
      stopTimer('mc');
      saveScore('mc', mcScore, data.multipleChoice.length, mcSeconds, mcAnswers);
      proceedToNext('mc');
    } else {
      showMCQuestion();
    }
  }

  /* ─────────────────────────────────────────────
     DRAG & DROP
     ───────────────────────────────────────────── */
  function initDragDrop() {
    showScreen('dd');
    ddSeconds = 0; ddMatched = 0; ddAnswers = {};
    ddPairs = shuffle([...data.dragDrop]);
    const total = ddPairs.length;
    document.getElementById('dd-total').textContent = total;
    document.getElementById('dd-matched').textContent = '0';
    document.getElementById('btn-dd-submit').disabled = false;

    const frenchCol = document.getElementById('dd-french');
    const englishCol = document.getElementById('dd-english');
    frenchCol.innerHTML = '';
    englishCol.innerHTML = '';

    // Shuffle French items
    const shuffledFrench = shuffle(ddPairs.map((p, i) => ({ text: p.french, idx: i })));
    // Shuffle English targets
    const shuffledEnglish = shuffle(ddPairs.map((p, i) => ({ text: p.english, idx: i })));

    shuffledFrench.forEach(item => {
      const div = document.createElement('div');
      div.className = 'dd-item';
      div.textContent = item.text;
      div.draggable = true;
      div.dataset.idx = item.idx;

      div.addEventListener('dragstart', e => {
        ddDragItem = div;
        div.classList.add('dragging');
        e.dataTransfer.setData('text/plain', item.idx);
      });
      div.addEventListener('dragend', () => {
        div.classList.remove('dragging');
        ddDragItem = null;
      });
      // Touch support
      div.addEventListener('touchstart', e => {
        ddDragItem = div;
        div.classList.add('dragging');
      }, { passive: true });

      frenchCol.appendChild(div);
    });

    shuffledEnglish.forEach(item => {
      const div = document.createElement('div');
      div.className = 'dd-target';
      div.dataset.idx = item.idx;
      div.textContent = item.text;

      div.addEventListener('dragover', e => { e.preventDefault(); div.classList.add('drag-over'); });
      div.addEventListener('dragleave', () => div.classList.remove('drag-over'));
      div.addEventListener('drop', e => {
        e.preventDefault();
        div.classList.remove('drag-over');
        handleDrop(div, e.dataTransfer.getData('text/plain'));
      });
      // Touch support
      div.addEventListener('touchend', e => {
        if (ddDragItem) {
          handleDrop(div, ddDragItem.dataset.idx);
          ddDragItem.classList.remove('dragging');
          ddDragItem = null;
        }
      });

      englishCol.appendChild(div);
    });

    startTimer('dd');

    document.getElementById('btn-dd-submit').onclick = () => submitDragDrop();
  }

  function handleDrop(target, frenchIdx) {
    const fi = parseInt(frenchIdx);
    const ti = parseInt(target.dataset.idx);

    // Remove from previous target if already placed
    document.querySelectorAll('.dd-target').forEach(t => {
      if (t.dataset.placedIdx === String(fi)) {
        t.innerHTML = ddPairs[parseInt(t.dataset.idx)].english;
        t.classList.remove('has-item');
        delete t.dataset.placedIdx;
      }
    });

    // Remove existing item from this target
    if (target.dataset.placedIdx !== undefined) {
      const prevFrench = document.querySelector('.dd-item[data-idx="' + target.dataset.placedIdx + '"]');
      if (prevFrench) { prevFrench.classList.remove('matched'); prevFrench.style.display = ''; }
    }

    // Place item
    target.innerHTML = '<span class="placed-item">' + escHtml(ddPairs[fi].french) + '</span><br><small style="color:#8b6f5e">' + escHtml(ddPairs[ti].english) + '</small>';
    target.classList.add('has-item');
    target.dataset.placedIdx = fi;
    ddAnswers[ti] = fi;

    // Hide the French item
    const frenchEl = document.querySelector('.dd-item[data-idx="' + fi + '"]');
    if (frenchEl) { frenchEl.classList.add('matched'); frenchEl.style.display = 'none'; }

    // Update count
    ddMatched = Object.keys(ddAnswers).length;
    document.getElementById('dd-matched').textContent = ddMatched;
  }

  function submitDragDrop() {
    stopTimer('dd');
    let ddScore = 0;
    const ddResults = [];

    ddPairs.forEach((pair, i) => {
      const target = document.querySelector('.dd-target[data-idx="' + i + '"]');
      const placedIdx = target ? parseInt(target.dataset.placedIdx) : -1;
      const correct = placedIdx === i;
      if (correct) ddScore++;

      ddResults.push({
        french: pair.french,
        english: pair.english,
        yourAnswer: placedIdx >= 0 ? ddPairs[placedIdx].french : '(not matched)',
        correct
      });

      if (target) {
        target.classList.add(correct ? 'correct' : 'wrong');
        if (!correct) {
          target.innerHTML += '<div style="color:#2e7d32;font-size:.8rem;margin-top:.25rem">Correct: ' + escHtml(pair.french) + '</div>';
        }
      }
    });

    document.getElementById('btn-dd-submit').disabled = true;
    saveScore('dd', ddScore, ddPairs.length, ddSeconds, ddResults);

    setTimeout(() => proceedToNext('dd'), 3000);
  }

  /* ─────────────────────────────────────────────
     SCENARIO BUILDER
     ───────────────────────────────────────────── */
  function initScenario() {
    showScreen('scenario');
    scenarioSelections = new Array(data.scenarioBuilder.steps.length).fill(null);
    document.getElementById('scenario-instruction').textContent = data.scenarioBuilder.instruction;
    document.getElementById('btn-scenario-done').disabled = true;

    const container = document.getElementById('scenario-steps');
    container.innerHTML = '';

    data.scenarioBuilder.steps.forEach((step, si) => {
      const div = document.createElement('div');
      div.className = 'scenario-step';
      div.innerHTML = '<h4>Step ' + (si + 1) + ': ' + escHtml(step.label) + '</h4>';

      step.options.forEach((opt, oi) => {
        const btn = document.createElement('button');
        btn.className = 'scenario-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
          div.querySelectorAll('.scenario-option').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          scenarioSelections[si] = opt;
          updateScenarioPreview();
        });
        div.appendChild(btn);
      });

      container.appendChild(div);
    });

    document.getElementById('btn-scenario-done').onclick = () => {
      classRef.child('students/' + studentId + '/scenario').set(scenarioSelections);
      proceedToNext('scenario');
    };
  }

  function updateScenarioPreview() {
    const lines = document.getElementById('scenario-lines');
    const selected = scenarioSelections.filter(s => s !== null);
    lines.innerHTML = selected.map(s => '<p>' + escHtml(s) + '</p>').join('');
    document.getElementById('btn-scenario-done').disabled = scenarioSelections.some(s => s === null);
  }

  /* ─────────────────────────────────────────────
     REVIEW & RESULTS
     ───────────────────────────────────────────── */
  function initReview() {
    showScreen('review');
    classRef.child('students/' + studentId + '/scores').once('value').then(snap => {
      const scores = snap.val() || {};
      renderReview(scores);
    });

    document.getElementById('btn-hall').onclick = () => {
      showScreen('hall');
      initHallOfFame();
    };
  }

  function renderReview(scores) {
    const summary = document.getElementById('review-summary');
    const details = document.getElementById('review-details');
    summary.innerHTML = '';
    details.innerHTML = '';

    let totalScore = 0, totalPossible = 0;

    const sections = [
      { key: 'tf', name: 'True or False' },
      { key: 'mc', name: 'Multiple Choice' },
      { key: 'dd', name: 'Match the Pairs' }
    ];

    sections.forEach(sec => {
      const s = scores[sec.key];
      if (!s) return;

      totalScore += s.score;
      totalPossible += s.total;

      // Summary card
      const card = document.createElement('div');
      card.className = 'summary-card';
      const pct = Math.round(s.score / s.total * 100);
      card.innerHTML =
        '<div class="label">' + sec.name + '</div>' +
        '<div class="value">' + s.score + '/' + s.total + '</div>' +
        '<div class="time">' + formatTime(s.time) + ' \u00b7 ' + pct + '%</div>';
      summary.appendChild(card);

      // Detailed review
      if (s.answers && s.answers.length) {
        const secDiv = document.createElement('div');
        secDiv.className = 'review-section';
        secDiv.innerHTML = '<h3>' + sec.name + '</h3>';

        s.answers.forEach((a, i) => {
          const item = document.createElement('div');
          item.className = 'review-item ' + (a.correct ? 'correct' : 'incorrect');

          if (sec.key === 'dd') {
            item.innerHTML =
              '<strong>' + escHtml(a.english) + '</strong> — ' +
              'Your answer: <span class="your-answer">' + escHtml(a.yourAnswer) + '</span>' +
              (a.correct ? '' : ' — Correct: <span class="correct-answer">' + escHtml(a.french) + '</span>');
          } else {
            item.innerHTML =
              '<strong>Q' + (i + 1) + ':</strong> ' + escHtml(a.question || a.statement || '') + '<br>' +
              'Your answer: <span class="your-answer">' + escHtml(String(a.yourAnswer)) + '</span>' +
              (a.correct ? '' : ' — Correct: <span class="correct-answer">' + escHtml(String(a.correctAnswer)) + '</span>') +
              (a.explanation ? '<br><small>' + escHtml(a.explanation) + '</small>' : '');
          }
          secDiv.appendChild(item);
        });
        details.appendChild(secDiv);
      }
    });

    // Overall card
    if (totalPossible > 0) {
      const overall = document.createElement('div');
      overall.className = 'summary-card';
      overall.innerHTML =
        '<div class="label">Overall</div>' +
        '<div class="value">' + totalScore + '/' + totalPossible + '</div>' +
        '<div class="time">' + Math.round(totalScore / totalPossible * 100) + '%</div>';
      summary.insertBefore(overall, summary.firstChild);
    }
  }

  /* ─────────────────────────────────────────────
     HALL OF FAME
     ───────────────────────────────────────────── */
  function initHallOfFame() {
    classRef.child('students').once('value').then(snap => {
      const students = snap.val() || {};
      const ranked = [];

      Object.entries(students).forEach(([id, s]) => {
        const scores = s.scores || {};
        let total = 0, possible = 0, time = 0;
        ['tf','mc','dd'].forEach(k => {
          if (scores[k]) {
            total += scores[k].score;
            possible += scores[k].total;
            time += scores[k].time || 0;
          }
        });
        if (possible > 0) {
          ranked.push({ id, name: s.name, avatar: s.avatar, score: total, possible, time, pct: Math.round(total / possible * 100) });
        }
      });

      // Sort by score desc, then time asc
      ranked.sort((a, b) => b.pct - a.pct || a.time - b.time);

      const podium = document.getElementById('hall-podium');
      const table = document.getElementById('hall-table');
      podium.innerHTML = '';
      table.innerHTML = '';

      // Podium (top 3)
      const positions = [1, 0, 2]; // display order: 2nd, 1st, 3rd
      positions.forEach(pos => {
        if (!ranked[pos]) return;
        const s = ranked[pos];
        const spot = document.createElement('div');
        spot.className = 'podium-spot podium-' + ['1st','2nd','3rd'][pos];
        spot.innerHTML =
          '<div class="avatar-small podium-avatar">' + (AVATARS[s.avatar] || '') + '</div>' +
          '<div class="podium-name">' + escHtml(s.name) + '</div>' +
          '<div class="podium-score">' + s.score + '/' + s.possible + ' (' + s.pct + '%)</div>' +
          '<div class="podium-base">' + (pos + 1) + '</div>';
        podium.appendChild(spot);
      });

      // Full table
      ranked.forEach((s, i) => {
        const row = document.createElement('div');
        row.className = 'hall-row';
        row.innerHTML =
          '<span class="hall-rank">' + (i + 1) + '</span>' +
          '<div class="avatar-small">' + (AVATARS[s.avatar] || '') + '</div>' +
          '<span class="name">' + escHtml(s.name) + (s.id === studentId ? ' (you)' : '') + '</span>' +
          '<span class="score">' + s.pct + '%</span>' +
          '<span class="time-val">' + formatTime(s.time) + '</span>';
        table.appendChild(row);
      });

      if (ranked.length === 0) {
        table.innerHTML = '<p style="text-align:center;color:#8b6f5e;padding:2rem">No results yet. Complete the quizzes to appear here!</p>';
      }
    });
  }

  /* ─────────────────────────────────────────────
     HELPERS
     ───────────────────────────────────────────── */
  function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('screen-' + name);
    if (el) el.classList.add('active');
  }

  function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // Timers
  const timers = {};
  function startTimer(id) {
    const el = document.getElementById(id + '-timer');
    let sec = 0;
    if (id === 'tf') tfSeconds = 0;
    if (id === 'mc') mcSeconds = 0;
    if (id === 'dd') ddSeconds = 0;

    timers[id] = setInterval(() => {
      sec++;
      if (id === 'tf') tfSeconds = sec;
      if (id === 'mc') mcSeconds = sec;
      if (id === 'dd') ddSeconds = sec;
      if (el) el.textContent = formatTime(sec);
    }, 1000);
  }

  function stopTimer(id) {
    if (timers[id]) { clearInterval(timers[id]); delete timers[id]; }
  }

  function saveScore(stage, score, total, time, answers) {
    if (!studentId) return;
    classRef.child('students/' + studentId + '/scores/' + stage).set({
      score, total, time, answers,
      completedAt: firebase.database.ServerValue.TIMESTAMP
    });
  }

  /* --- Public API --- */
  return { init, answerTF, nextTF, nextMC };
})();

// Boot
document.addEventListener('DOMContentLoaded', APP.init);
