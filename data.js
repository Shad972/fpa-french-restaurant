/* ============================================================
   FPA French Restaurant – Content Data (All Year Groups)
   British Curriculum KS3/KS4 French – Restaurant & Eating Out
   ============================================================ */

const YEAR_DATA = {

  /* ──────────────────────────────────────────────────────────
     YEAR 7 – Basic café ordering, simple opinions
     ────────────────────────────────────────────────────────── */
  7: {
    title: "Au Café",
    subtitle: "At the Café",
    description: "Learn how to order food and drinks at a French café.",
    maxStudents: 25,

    vocabulary: [
      { french: "un croissant", english: "a croissant", phonetic: "uh kwah-SOHN", category: "food", img: "croissant" },
      { french: "un sandwich", english: "a sandwich", phonetic: "uh SAHND-weesh", category: "food", img: "sandwich" },
      { french: "une crêpe", english: "a pancake", phonetic: "ewn KREP", category: "food", img: "crepe" },
      { french: "une salade", english: "a salad", phonetic: "ewn sah-LAHD", category: "food", img: "salad" },
      { french: "un gâteau", english: "a cake", phonetic: "uh gah-TOH", category: "food", img: "cake" },
      { french: "une glace", english: "an ice cream", phonetic: "ewn GLAHS", category: "food", img: "icecream" },
      { french: "un coca", english: "a cola", phonetic: "uh KOH-kah", category: "drink", img: "cola" },
      { french: "une limonade", english: "a lemonade", phonetic: "ewn lee-moh-NAHD", category: "drink", img: "lemonade" },
      { french: "un jus d'orange", english: "an orange juice", phonetic: "uh ZHEW doh-RAHNZH", category: "drink", img: "orangejuice" },
      { french: "un thé", english: "a tea", phonetic: "uh TAY", category: "drink", img: "tea" },
      { french: "un café", english: "a coffee", phonetic: "uh kah-FAY", category: "drink", img: "coffee" },
      { french: "une eau minérale", english: "a mineral water", phonetic: "ewn OH mee-nay-RAHL", category: "drink", img: "water" },
      { french: "s'il vous plaît", english: "please", phonetic: "seel voo PLEH", category: "phrase" },
      { french: "merci", english: "thank you", phonetic: "mehr-SEE", category: "phrase" },
      { french: "l'addition", english: "the bill", phonetic: "lah-dee-SYOHN", category: "phrase" },
      { french: "je voudrais", english: "I would like", phonetic: "zhuh voo-DREH", category: "phrase" }
    ],

    menu: {
      name: "Café de la Place",
      sections: [
        {
          title: "Boissons chaudes / Hot Drinks",
          items: [
            { french: "Un café", price: "2,50 €", english: "A coffee" },
            { french: "Un thé", price: "2,00 €", english: "A tea" },
            { french: "Un chocolat chaud", price: "3,00 €", english: "A hot chocolate" }
          ]
        },
        {
          title: "Boissons froides / Cold Drinks",
          items: [
            { french: "Un coca", price: "2,50 €", english: "A cola" },
            { french: "Une limonade", price: "2,50 €", english: "A lemonade" },
            { french: "Un jus d'orange", price: "3,00 €", english: "An orange juice" },
            { french: "Une eau minérale", price: "1,50 €", english: "A mineral water" }
          ]
        },
        {
          title: "À manger / Food",
          items: [
            { french: "Un croissant", price: "1,80 €", english: "A croissant" },
            { french: "Un sandwich jambon-fromage", price: "4,50 €", english: "A ham and cheese sandwich" },
            { french: "Une crêpe au sucre", price: "3,00 €", english: "A sugar pancake" },
            { french: "Une salade verte", price: "4,00 €", english: "A green salad" },
            { french: "Un gâteau au chocolat", price: "3,50 €", english: "A chocolate cake" },
            { french: "Une glace à la vanille", price: "2,50 €", english: "A vanilla ice cream" }
          ]
        }
      ]
    },

    roleplay: {
      scenarios: [
        {
          title: "The Polite Customer",
          type: "happy",
          context: "You are at a French café. You want to order a drink and something to eat. Be polite!",
          lines: [
            { role: "waiter", french: "Bonjour ! Bienvenue au Café de la Place.", phonetic: "bohn-ZHOOR! byaN-vuh-NEW oh kah-FAY duh lah PLAHS", english: "Hello! Welcome to Café de la Place." },
            { role: "customer", french: "Bonjour ! Je voudrais un croissant, s'il vous plaît.", phonetic: "bohn-ZHOOR! zhuh voo-DREH uh kwah-SOHN, seel voo PLEH", english: "Hello! I would like a croissant, please." },
            { role: "waiter", french: "Bien sûr. Et comme boisson ?", phonetic: "byaN SEWR. ay kohm bwah-SOHN?", english: "Of course. And to drink?" },
            { role: "customer", french: "Un jus d'orange, s'il vous plaît.", phonetic: "uh ZHEW doh-RAHNZH, seel voo PLEH", english: "An orange juice, please." },
            { role: "waiter", french: "Très bien. C'est tout ?", phonetic: "treh BYAN. seh TOO?", english: "Very good. Is that everything?" },
            { role: "customer", french: "Oui, merci.", phonetic: "WEE, mehr-SEE", english: "Yes, thank you." },
            { role: "waiter", french: "Voilà ! Bon appétit !", phonetic: "vwah-LAH! bohn ah-pay-TEE!", english: "Here you are! Enjoy your meal!" },
            { role: "customer", french: "Merci beaucoup !", phonetic: "mehr-SEE boh-KOO!", english: "Thank you very much!" }
          ]
        },
        {
          title: "The Unhappy Customer",
          type: "angry",
          context: "You ordered a chocolate cake but received a salad instead. You are not happy!",
          lines: [
            { role: "waiter", french: "Voilà votre salade.", phonetic: "vwah-LAH VOH-truh sah-LAHD", english: "Here is your salad." },
            { role: "customer", french: "Excusez-moi, ce n'est pas ma commande.", phonetic: "ex-kew-ZAY mwah, suh neh PAH mah koh-MAHND", english: "Excuse me, this is not my order." },
            { role: "waiter", french: "Oh pardon ! Qu'est-ce que vous avez commandé ?", phonetic: "oh pahr-DOHN! kess-kuh voo zah-VAY koh-mahn-DAY?", english: "Oh sorry! What did you order?" },
            { role: "customer", french: "J'ai commandé un gâteau au chocolat.", phonetic: "zhay koh-mahn-DAY uh gah-TOH oh shoh-koh-LAH", english: "I ordered a chocolate cake." },
            { role: "waiter", french: "Je suis désolé. Je reviens tout de suite.", phonetic: "zhuh swee day-zoh-LAY. zhuh ruh-VYAN too duh SWEET", english: "I am sorry. I will be right back." },
            { role: "customer", french: "Merci.", phonetic: "mehr-SEE", english: "Thank you." }
          ]
        }
      ]
    },

    trueFalse: [
      { statement: "\"Je voudrais\" means \"I would like\".", answer: true, explanation: "Correct! \"Je voudrais\" is a polite way to say \"I would like\"." },
      { statement: "\"Une limonade\" means \"a lime\".", answer: false, explanation: "\"Une limonade\" means \"a lemonade\", not \"a lime\"." },
      { statement: "\"L'addition\" means \"the bill\".", answer: true, explanation: "Correct! You ask for \"l'addition\" when you want to pay." },
      { statement: "\"Un thé\" means \"a coffee\".", answer: false, explanation: "\"Un thé\" means \"a tea\". \"A coffee\" is \"un café\"." },
      { statement: "\"Merci beaucoup\" means \"thank you very much\".", answer: true, explanation: "Correct! \"Beaucoup\" means \"very much\" or \"a lot\"." },
      { statement: "\"S'il vous plaît\" means \"goodbye\".", answer: false, explanation: "\"S'il vous plaît\" means \"please\". \"Goodbye\" is \"au revoir\"." },
      { statement: "\"Un croissant\" is a type of pastry.", answer: true, explanation: "Correct! A croissant is a crescent-shaped French pastry." },
      { statement: "\"Une glace\" means \"a glass\".", answer: false, explanation: "\"Une glace\" means \"an ice cream\". \"A glass\" is \"un verre\"." },
      { statement: "\"Bonjour\" is used to say hello.", answer: true, explanation: "Correct! \"Bonjour\" means \"hello\" or \"good morning\"." },
      { statement: "\"Bon appétit\" means \"goodbye\".", answer: false, explanation: "\"Bon appétit\" means \"enjoy your meal\". \"Goodbye\" is \"au revoir\"." }
    ],

    multipleChoice: [
      { question: "How do you say \"I would like a coffee\" in French?", options: ["Je voudrais un café", "Je mange un café", "Je suis un café", "J'aime un café"], correct: 0, explanation: "\"Je voudrais\" means \"I would like\". \"Un café\" means \"a coffee\"." },
      { question: "What does \"une crêpe au sucre\" mean?", options: ["A cheese pancake", "A sugar pancake", "A chocolate pancake", "A plain pancake"], correct: 1, explanation: "\"Crêpe\" means \"pancake\" and \"sucre\" means \"sugar\"." },
      { question: "How would you ask for the bill?", options: ["La carte, s'il vous plaît", "L'addition, s'il vous plaît", "Le menu, s'il vous plaît", "La table, s'il vous plaît"], correct: 1, explanation: "\"L'addition\" means \"the bill\". You add \"s'il vous plaît\" to be polite." },
      { question: "What does the waiter mean by \"Et comme boisson ?\"", options: ["And to eat?", "And for dessert?", "And to drink?", "And anything else?"], correct: 2, explanation: "\"Boisson\" means \"drink\". The waiter is asking what you want to drink." },
      { question: "How do you say \"thank you very much\"?", options: ["Merci bien", "Merci beaucoup", "Merci plus", "Merci grand"], correct: 1, explanation: "\"Merci beaucoup\" is the standard way to say \"thank you very much\"." },
      { question: "What is \"un sandwich jambon-fromage\"?", options: ["A chicken and cheese sandwich", "A ham and lettuce sandwich", "A ham and cheese sandwich", "A cheese and tomato sandwich"], correct: 2, explanation: "\"Jambon\" means \"ham\" and \"fromage\" means \"cheese\"." },
      { question: "What does \"Bienvenue\" mean?", options: ["Goodbye", "Thank you", "Welcome", "Please"], correct: 2, explanation: "\"Bienvenue\" means \"welcome\"." },
      { question: "How do you say \"of course\" in French?", options: ["Peut-être", "Bien sûr", "Bientôt", "Beaucoup"], correct: 1, explanation: "\"Bien sûr\" means \"of course\" or \"certainly\"." },
      { question: "What does \"C'est tout ?\" mean?", options: ["That is good?", "That is all?", "That is right?", "That is mine?"], correct: 1, explanation: "\"C'est tout\" literally means \"that is all\" — the waiter checks if you want anything else." },
      { question: "\"Je suis désolé\" means:", options: ["I am happy", "I am hungry", "I am sorry", "I am tired"], correct: 2, explanation: "\"Désolé\" means \"sorry\". \"Je suis désolé\" = \"I am sorry\"." }
    ],

    dragDrop: [
      { french: "Je voudrais", english: "I would like" },
      { french: "un croissant", english: "a croissant" },
      { french: "s'il vous plaît", english: "please" },
      { french: "l'addition", english: "the bill" },
      { french: "une limonade", english: "a lemonade" },
      { french: "merci beaucoup", english: "thank you very much" },
      { french: "bon appétit", english: "enjoy your meal" },
      { french: "un jus d'orange", english: "an orange juice" },
      { french: "un gâteau au chocolat", english: "a chocolate cake" },
      { french: "une eau minérale", english: "a mineral water" }
    ],

    scenarioBuilder: {
      instruction: "Build your own café conversation! Choose one option from each step to create a complete ordering scene.",
      steps: [
        { label: "Greeting", options: ["Bonjour !", "Salut !", "Bonsoir !"] },
        { label: "Order a drink", options: ["Je voudrais un coca", "Je voudrais un jus d'orange", "Je voudrais une limonade", "Je voudrais un chocolat chaud"] },
        { label: "Order food", options: ["et un croissant, s'il vous plaît.", "et une crêpe au sucre, s'il vous plaît.", "et un sandwich, s'il vous plaît.", "et un gâteau au chocolat, s'il vous plaît."] },
        { label: "Give an opinion", options: ["C'est délicieux !", "C'est très bon !", "J'aime beaucoup !"] },
        { label: "Ask for the bill", options: ["L'addition, s'il vous plaît.", "Je peux payer, s'il vous plaît ?"] },
        { label: "Say goodbye", options: ["Au revoir !", "Merci, au revoir !", "Bonne journée !"] }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     YEAR 8 – Fuller restaurant experience, preferences
     ────────────────────────────────────────────────────────── */
  8: {
    title: "Au Restaurant",
    subtitle: "At the Restaurant",
    description: "Order a full meal, express your preferences and opinions.",
    maxStudents: 25,

    vocabulary: [
      { french: "une entrée", english: "a starter", phonetic: "ewn ahn-TRAY", category: "food", img: "starter" },
      { french: "un plat principal", english: "a main course", phonetic: "uh PLAH praN-see-PAHL", category: "food", img: "maincourse" },
      { french: "un dessert", english: "a dessert", phonetic: "uh day-SEHR", category: "food", img: "dessert" },
      { french: "un steak-frites", english: "steak and chips", phonetic: "uh STEK FREET", category: "food", img: "steakfrites" },
      { french: "un poulet rôti", english: "a roast chicken", phonetic: "uh poo-LEH ROH-tee", category: "food", img: "chicken" },
      { french: "une soupe à l'oignon", english: "an onion soup", phonetic: "ewn SOOP ah loh-NYOHN", category: "food", img: "soup" },
      { french: "une tarte aux pommes", english: "an apple tart", phonetic: "ewn TAHRT oh POHM", category: "food", img: "appletart" },
      { french: "une mousse au chocolat", english: "a chocolate mousse", phonetic: "ewn MOOS oh shoh-koh-LAH", category: "food", img: "mousse" },
      { french: "une carafe d'eau", english: "a jug of water", phonetic: "ewn kah-RAHF DOH", category: "drink", img: "carafewater" },
      { french: "un verre de jus de pomme", english: "a glass of apple juice", phonetic: "uh VEHR duh ZHEW duh POHM", category: "drink", img: "applejuice" },
      { french: "j'aime", english: "I like", phonetic: "ZHEM", category: "phrase" },
      { french: "je n'aime pas", english: "I do not like", phonetic: "zhuh NEM PAH", category: "phrase" },
      { french: "je préfère", english: "I prefer", phonetic: "zhuh pray-FEHR", category: "phrase" },
      { french: "c'est délicieux", english: "it is delicious", phonetic: "seh day-lee-SYUH", category: "phrase" },
      { french: "je suis végétarien(ne)", english: "I am vegetarian", phonetic: "zhuh swee vay-zhay-tah-RYAN (RYEN)", category: "phrase" },
      { french: "une table pour deux", english: "a table for two", phonetic: "ewn TAHBL poor DUH", category: "phrase" }
    ],

    menu: {
      name: "Le Petit Bistrot",
      sections: [
        {
          title: "Entrées / Starters",
          items: [
            { french: "Une soupe à l'oignon", price: "5,50 €", english: "Onion soup" },
            { french: "Une salade niçoise", price: "6,00 €", english: "Niçoise salad" },
            { french: "Un pâté de campagne", price: "5,00 €", english: "Country pâté" }
          ]
        },
        {
          title: "Plats principaux / Main Courses",
          items: [
            { french: "Un steak-frites", price: "12,00 €", english: "Steak and chips" },
            { french: "Un poulet rôti avec des légumes", price: "11,50 €", english: "Roast chicken with vegetables" },
            { french: "Un poisson du jour", price: "13,00 €", english: "Fish of the day" },
            { french: "Une omelette aux champignons", price: "9,00 €", english: "Mushroom omelette" },
            { french: "Des pâtes à la sauce tomate", price: "8,50 €", english: "Pasta in tomato sauce" }
          ]
        },
        {
          title: "Desserts / Desserts",
          items: [
            { french: "Une mousse au chocolat", price: "4,50 €", english: "Chocolate mousse" },
            { french: "Une tarte aux pommes", price: "4,00 €", english: "Apple tart" },
            { french: "Une crème brûlée", price: "5,00 €", english: "Crème brûlée" },
            { french: "Une glace (deux boules)", price: "3,50 €", english: "Ice cream (two scoops)" }
          ]
        },
        {
          title: "Boissons / Drinks",
          items: [
            { french: "Une carafe d'eau", price: "Gratuit", english: "A jug of water (free)" },
            { french: "Un coca", price: "2,50 €", english: "A cola" },
            { french: "Un verre de jus de pomme", price: "3,00 €", english: "A glass of apple juice" },
            { french: "Un café", price: "2,00 €", english: "A coffee" }
          ]
        }
      ]
    },

    roleplay: {
      scenarios: [
        {
          title: "Ordering a Full Meal",
          type: "happy",
          context: "You are at a French restaurant with a friend. You need to ask for a table, order a full meal (starter, main, dessert) and give your opinions.",
          lines: [
            { role: "waiter", french: "Bonsoir ! Combien de personnes ?", phonetic: "bohn-SWAHR! kohm-BYAN duh pehr-SOHN?", english: "Good evening! How many people?" },
            { role: "customer", french: "Bonsoir ! Une table pour deux, s'il vous plaît.", phonetic: "bohn-SWAHR! ewn TAHBL poor DUH, seel voo PLEH", english: "Good evening! A table for two, please." },
            { role: "waiter", french: "Suivez-moi. Voici la carte.", phonetic: "swee-VAY mwah. vwah-SEE lah KAHRT", english: "Follow me. Here is the menu." },
            { role: "customer", french: "Merci. Comme entrée, je voudrais la soupe à l'oignon.", phonetic: "mehr-SEE. kohm ahn-TRAY, zhuh voo-DREH lah SOOP ah loh-NYOHN", english: "Thank you. As a starter, I would like the onion soup." },
            { role: "waiter", french: "Et comme plat principal ?", phonetic: "ay kohm PLAH praN-see-PAHL?", english: "And for the main course?" },
            { role: "customer", french: "Je voudrais le steak-frites. J'aime beaucoup la viande.", phonetic: "zhuh voo-DREH luh STEK FREET. ZHEM boh-KOO lah VYAHND", english: "I would like the steak and chips. I really like meat." },
            { role: "waiter", french: "Excellent choix ! Et comme dessert ?", phonetic: "ex-seh-LAHN SHWAH! ay kohm day-SEHR?", english: "Excellent choice! And for dessert?" },
            { role: "customer", french: "La mousse au chocolat, s'il vous plaît. C'est mon dessert préféré !", phonetic: "lah MOOS oh shoh-koh-LAH, seel voo PLEH. seh mohn day-SEHR pray-fay-RAY!", english: "The chocolate mousse, please. It is my favourite dessert!" },
            { role: "waiter", french: "Très bien. Et comme boisson ?", phonetic: "treh BYAN. ay kohm bwah-SOHN?", english: "Very good. And to drink?" },
            { role: "customer", french: "Une carafe d'eau, s'il vous plaît.", phonetic: "ewn kah-RAHF DOH, seel voo PLEH", english: "A jug of water, please." }
          ]
        },
        {
          title: "The Fussy Customer",
          type: "angry",
          context: "You are at the restaurant but the food is cold and not what you expected. You need to complain politely but firmly.",
          lines: [
            { role: "waiter", french: "Voilà votre steak-frites. Bon appétit !", phonetic: "vwah-LAH VOH-truh STEK FREET. bohn ah-pay-TEE!", english: "Here is your steak and chips. Enjoy!" },
            { role: "customer", french: "Excusez-moi, le steak est froid.", phonetic: "ex-kew-ZAY mwah, luh STEK eh FRWAH", english: "Excuse me, the steak is cold." },
            { role: "waiter", french: "Oh, je suis vraiment désolé.", phonetic: "oh, zhuh swee vreh-MAHN day-zoh-LAY", english: "Oh, I am really sorry." },
            { role: "customer", french: "Et les frites aussi. Je n'aime pas ça.", phonetic: "ay lay FREET oh-SEE. zhuh NEM PAH SAH", english: "And the chips too. I do not like this." },
            { role: "waiter", french: "Je vais changer votre plat immédiatement.", phonetic: "zhuh VAY shahn-ZHAY VOH-truh PLAH ee-may-dee-AHT-mahn", english: "I will change your dish immediately." },
            { role: "customer", french: "Merci. Je préfère le poulet rôti à la place.", phonetic: "mehr-SEE. zhuh pray-FEHR luh poo-LEH ROH-tee ah lah PLAHS", english: "Thank you. I prefer the roast chicken instead." },
            { role: "waiter", french: "Bien sûr. Avec mes excuses.", phonetic: "byaN SEWR. ah-VEK may zex-KEWZ", english: "Of course. With my apologies." }
          ]
        }
      ]
    },

    trueFalse: [
      { statement: "\"Une entrée\" means \"a main course\".", answer: false, explanation: "\"Une entrée\" means \"a starter\". The main course is \"un plat principal\"." },
      { statement: "\"Je préfère\" means \"I prefer\".", answer: true, explanation: "Correct! \"Je préfère\" is used to express a preference." },
      { statement: "\"C'est délicieux\" means \"it is disgusting\".", answer: false, explanation: "\"C'est délicieux\" means \"it is delicious\". \"Disgusting\" would be \"dégoûtant\"." },
      { statement: "In France, \"une carafe d'eau\" (tap water) is usually free in restaurants.", answer: true, explanation: "Correct! French restaurants must provide free tap water by law." },
      { statement: "\"Un steak-frites\" is steak with rice.", answer: false, explanation: "\"Frites\" means \"chips\" (French fries), not rice. Rice is \"du riz\"." },
      { statement: "\"Combien de personnes ?\" means \"How many people?\".", answer: true, explanation: "Correct! The waiter asks this to know how many seats you need." },
      { statement: "\"Je n'aime pas\" means \"I really like\".", answer: false, explanation: "\"Je n'aime pas\" means \"I do not like\". The \"n'...pas\" makes it negative." },
      { statement: "\"Le plat du jour\" means \"the dish of the day\".", answer: true, explanation: "Correct! Many French restaurants offer a daily special called \"le plat du jour\"." },
      { statement: "\"La carte\" and \"le menu\" mean exactly the same thing.", answer: false, explanation: "\"La carte\" is the full menu. \"Le menu\" often refers to a set meal deal at a fixed price." },
      { statement: "\"Suivez-moi\" means \"follow me\".", answer: true, explanation: "Correct! The waiter says this when leading you to your table." }
    ],

    multipleChoice: [
      { question: "How do you say \"a table for two\" in French?", options: ["Une table pour un", "Une table pour deux", "Deux tables, s'il vous plaît", "Une chaise pour deux"], correct: 1, explanation: "\"Une table pour deux\" = a table for two. \"Deux\" means two." },
      { question: "What is \"un plat principal\"?", options: ["A starter", "A side dish", "A main course", "A dessert"], correct: 2, explanation: "\"Plat principal\" literally means \"main dish\" — it is the main course." },
      { question: "How would you say \"I do not like fish\"?", options: ["J'aime le poisson", "Je n'aime pas le poisson", "Je déteste le poisson", "Je préfère le poisson"], correct: 1, explanation: "\"Je n'aime pas\" + noun = \"I do not like\" + noun." },
      { question: "What does \"Voici la carte\" mean?", options: ["Here is the card", "Here is the menu", "Here is the bill", "Here is the table"], correct: 1, explanation: "\"La carte\" means \"the menu\" in a restaurant context." },
      { question: "How do you say \"my favourite dessert\" in French?", options: ["Mon dessert détesté", "Mon dessert principal", "Mon dessert préféré", "Mon dessert premier"], correct: 2, explanation: "\"Préféré\" means \"favourite\". \"Mon dessert préféré\" = my favourite dessert." },
      { question: "What does \"le steak est froid\" mean?", options: ["The steak is fresh", "The steak is frozen", "The steak is cold", "The steak is fried"], correct: 2, explanation: "\"Froid\" means \"cold\". The customer is complaining the steak is cold." },
      { question: "\"Avec mes excuses\" means:", options: ["With my compliments", "With my apologies", "With my thanks", "With my regards"], correct: 1, explanation: "\"Excuses\" means \"apologies\". The waiter is apologising for the mistake." },
      { question: "What does a vegetarian say in French?", options: ["Je suis végétarien(ne)", "Je mange de la viande", "Je préfère le poisson", "J'adore le steak"], correct: 0, explanation: "\"Je suis végétarien\" (male) or \"végétarienne\" (female) means \"I am vegetarian\"." },
      { question: "What is \"une soupe à l'oignon\"?", options: ["Tomato soup", "Mushroom soup", "Onion soup", "Chicken soup"], correct: 2, explanation: "\"Oignon\" means \"onion\". It is a classic French dish." },
      { question: "How do you say \"excellent choice\"?", options: ["Excellent prix", "Excellent choix", "Excellent repas", "Excellent goût"], correct: 1, explanation: "\"Choix\" means \"choice\". \"Excellent choix\" = excellent choice." }
    ],

    dragDrop: [
      { french: "une entrée", english: "a starter" },
      { french: "un plat principal", english: "a main course" },
      { french: "un dessert", english: "a dessert" },
      { french: "c'est délicieux", english: "it is delicious" },
      { french: "je n'aime pas", english: "I do not like" },
      { french: "un steak-frites", english: "steak and chips" },
      { french: "une carafe d'eau", english: "a jug of water" },
      { french: "suivez-moi", english: "follow me" },
      { french: "le plat du jour", english: "the dish of the day" },
      { french: "je suis végétarien", english: "I am vegetarian" }
    ],

    scenarioBuilder: {
      instruction: "Build your own restaurant conversation! Choose one option from each step to create a full dining experience.",
      steps: [
        { label: "Arrive and greet", options: ["Bonsoir ! Une table pour deux, s'il vous plaît.", "Bonjour ! Une table pour quatre, s'il vous plaît.", "Bonsoir ! J'ai une réservation."] },
        { label: "Order a starter", options: ["Comme entrée, je voudrais la soupe à l'oignon.", "Comme entrée, je voudrais la salade niçoise.", "Pas d'entrée pour moi, merci."] },
        { label: "Order a main course", options: ["Comme plat principal, je voudrais le steak-frites.", "Comme plat principal, je voudrais le poulet rôti.", "Comme plat principal, je voudrais le poisson du jour."] },
        { label: "Give your opinion", options: ["C'est délicieux ! J'aime beaucoup !", "C'est bon, mais je préfère le poulet.", "Ce n'est pas mal, merci."] },
        { label: "Order dessert", options: ["Comme dessert, je voudrais la mousse au chocolat.", "Comme dessert, je voudrais la tarte aux pommes.", "Pas de dessert, merci. L'addition, s'il vous plaît."] },
        { label: "Pay and leave", options: ["L'addition, s'il vous plaît. Merci, c'était très bon !", "L'addition, s'il vous plaît. Bonne soirée !", "Merci beaucoup ! Au revoir !"] }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     YEAR 9 – Transactional French, problem-solving
     ────────────────────────────────────────────────────────── */
  9: {
    title: "Au Restaurant – Situations difficiles",
    subtitle: "At the Restaurant – Tricky Situations",
    description: "Handle real restaurant situations: dietary needs, wrong orders, and complaints.",
    maxStudents: 25,

    vocabulary: [
      { french: "je suis allergique à", english: "I am allergic to", phonetic: "zhuh swee zah-lehr-ZHEEK ah", category: "phrase", img: "allergic" },
      { french: "les fruits de mer", english: "seafood", phonetic: "lay FRWEE duh MEHR", category: "food", img: "seafood" },
      { french: "les noix", english: "nuts", phonetic: "lay NWAH", category: "food", img: "nuts" },
      { french: "le plat du jour", english: "the dish of the day", phonetic: "luh PLAH dew ZHOOR", category: "food", img: "platdujour" },
      { french: "l'agneau", english: "lamb", phonetic: "lah-NYOH", category: "food", img: "lamb" },
      { french: "le saumon", english: "salmon", phonetic: "luh soh-MOHN", category: "food", img: "salmon" },
      { french: "les légumes grillés", english: "grilled vegetables", phonetic: "lay lay-GEWM gree-YAY", category: "food", img: "grilledveg" },
      { french: "est-ce que je pourrais", english: "could I", phonetic: "ess-kuh zhuh poo-REH", category: "phrase" },
      { french: "il y a une erreur", english: "there is a mistake", phonetic: "eel ee ah ewn eh-RUHR", category: "phrase" },
      { french: "ce n'est pas ce que j'ai commandé", english: "this is not what I ordered", phonetic: "suh neh PAH suh kuh zhay koh-mahn-DAY", category: "phrase" },
      { french: "je voudrais me plaindre", english: "I would like to complain", phonetic: "zhuh voo-DREH muh PLAHN-druh", category: "phrase" },
      { french: "est-ce que ce plat contient", english: "does this dish contain", phonetic: "ess-kuh suh PLAH kohn-TYAN", category: "phrase" },
      { french: "sans gluten", english: "gluten-free", phonetic: "sahn glew-TEN", category: "phrase" },
      { french: "un pourboire", english: "a tip", phonetic: "uh poor-BWAHR", category: "phrase" },
      { french: "le service est compris", english: "service is included", phonetic: "luh sehr-VEES eh kohm-PREE", category: "phrase" },
      { french: "je voudrais voir le gérant", english: "I would like to see the manager", phonetic: "zhuh voo-DREH VWAHR luh zhay-RAHN", category: "phrase" }
    ],

    menu: {
      name: "La Belle Époque",
      sections: [
        {
          title: "Entrées / Starters",
          items: [
            { french: "Soupe de poisson", price: "7,00 €", english: "Fish soup" },
            { french: "Salade de chèvre chaud", price: "8,50 €", english: "Warm goat's cheese salad" },
            { french: "Terrine de campagne", price: "6,50 €", english: "Country terrine" },
            { french: "Assiette de crudités", price: "6,00 €", english: "Raw vegetable platter" }
          ]
        },
        {
          title: "Plats principaux / Main Courses",
          items: [
            { french: "Côtelettes d'agneau avec des haricots verts", price: "16,00 €", english: "Lamb chops with green beans" },
            { french: "Saumon grillé avec du riz", price: "15,00 €", english: "Grilled salmon with rice" },
            { french: "Bœuf bourguignon", price: "14,50 €", english: "Beef bourguignon" },
            { french: "Risotto aux champignons (végétarien)", price: "12,00 €", english: "Mushroom risotto (vegetarian)" },
            { french: "Plat du jour", price: "11,00 €", english: "Dish of the day" }
          ]
        },
        {
          title: "Desserts / Desserts",
          items: [
            { french: "Fondant au chocolat", price: "6,50 €", english: "Chocolate fondant" },
            { french: "Crème brûlée à la vanille", price: "5,50 €", english: "Vanilla crème brûlée" },
            { french: "Tarte tatin", price: "6,00 €", english: "Upside-down apple tart" },
            { french: "Plateau de fromages", price: "7,00 €", english: "Cheese board" }
          ]
        },
        {
          title: "Boissons / Drinks",
          items: [
            { french: "Une carafe d'eau", price: "Gratuit", english: "Jug of water (free)" },
            { french: "Un Orangina", price: "3,00 €", english: "An Orangina" },
            { french: "Un thé à la menthe", price: "3,50 €", english: "A mint tea" },
            { french: "Un café crème", price: "3,00 €", english: "A white coffee" }
          ]
        }
      ]
    },

    roleplay: {
      scenarios: [
        {
          title: "The Allergy Dilemma",
          type: "happy",
          context: "You are at a French restaurant and have a nut allergy. You need to ask about ingredients and find something safe to eat.",
          lines: [
            { role: "waiter", french: "Bonsoir. Vous avez choisi ?", phonetic: "bohn-SWAHR. voo zah-VAY shwah-ZEE?", english: "Good evening. Have you chosen?" },
            { role: "customer", french: "Pas encore. Je suis allergique aux noix. Est-ce que le risotto contient des noix ?", phonetic: "pah zahn-KOHR. zhuh swee zah-lehr-ZHEEK oh NWAH. ess-kuh luh ree-ZOH-toh kohn-TYAHN day NWAH?", english: "Not yet. I am allergic to nuts. Does the risotto contain nuts?" },
            { role: "waiter", french: "Non, il n'y a pas de noix dans le risotto.", phonetic: "nohn, eel nee ah PAH duh NWAH dahn luh ree-ZOH-toh", english: "No, there are no nuts in the risotto." },
            { role: "customer", french: "Parfait. Et le fondant au chocolat, est-ce qu'il contient des noix ?", phonetic: "pahr-FEH. ay luh fohn-DAHN oh shoh-koh-LAH, ess-keel kohn-TYAHN day NWAH?", english: "Perfect. And the chocolate fondant, does it contain nuts?" },
            { role: "waiter", french: "Oui, il contient des noisettes. Je recommande la crème brûlée.", phonetic: "WEE, eel kohn-TYAHN day nwah-ZET. zhuh ruh-koh-MAHND lah KREM brew-LAY", english: "Yes, it contains hazelnuts. I recommend the crème brûlée." },
            { role: "customer", french: "D'accord. Alors je voudrais le risotto et la crème brûlée, s'il vous plaît.", phonetic: "dah-KOHR. ah-LOHR zhuh voo-DREH luh ree-ZOH-toh ay lah KREM brew-LAY, seel voo PLEH", english: "OK. So I would like the risotto and the crème brûlée, please." },
            { role: "waiter", french: "Très bien. Et comme boisson ?", phonetic: "treh BYAHN. ay kohm bwah-SOHN?", english: "Very good. And to drink?" },
            { role: "customer", french: "Un thé à la menthe, s'il vous plaît.", phonetic: "uh TAY ah lah MAHNT, seel voo PLEH", english: "A mint tea, please." }
          ]
        },
        {
          title: "The Angry Customer",
          type: "angry",
          context: "You have been waiting 45 minutes for your food. When it finally arrives, it is the wrong order and it is cold. You want to speak to the manager.",
          lines: [
            { role: "customer", french: "Excusez-moi ! Nous attendons depuis quarante-cinq minutes !", phonetic: "ex-kew-ZAY mwah! noo zah-tahn-DOHN duh-PWEE kah-RAHNT sank mee-NEWT!", english: "Excuse me! We have been waiting for forty-five minutes!" },
            { role: "waiter", french: "Je suis désolé, nous sommes très occupés ce soir.", phonetic: "zhuh swee day-zoh-LAY, noo SOHM treh zoh-kew-PAY suh SWAHR", english: "I am sorry, we are very busy this evening." },
            { role: "customer", french: "Et ce n'est pas ce que j'ai commandé ! J'ai commandé le saumon, pas l'agneau.", phonetic: "ay suh neh PAH suh kuh zhay koh-mahn-DAY! zhay koh-mahn-DAY luh soh-MOHN, pah lah-NYOH", english: "And this is not what I ordered! I ordered the salmon, not the lamb." },
            { role: "waiter", french: "Oh, il y a une erreur. Je suis vraiment désolé.", phonetic: "oh, eel ee ah ewn eh-RUHR. zhuh swee vreh-MAHN day-zoh-LAY", english: "Oh, there is a mistake. I am truly sorry." },
            { role: "customer", french: "En plus, c'est froid ! Je voudrais voir le gérant, s'il vous plaît.", phonetic: "ahn PLEW, seh FRWAH! zhuh voo-DREH VWAHR luh zhay-RAHN, seel voo PLEH", english: "On top of that, it is cold! I would like to see the manager, please." },
            { role: "waiter", french: "Bien sûr. Je vais le chercher tout de suite.", phonetic: "byaN SEWR. zhuh VAY luh shehr-SHAY too duh SWEET", english: "Of course. I will fetch him straight away." },
            { role: "customer", french: "Je voudrais me plaindre. Le service est vraiment mauvais.", phonetic: "zhuh voo-DREH muh PLAHN-druh. luh sehr-VEES eh vreh-MAHN moh-VEH", english: "I would like to complain. The service is really bad." }
          ]
        }
      ]
    },

    trueFalse: [
      { statement: "\"Je suis allergique aux noix\" means \"I am allergic to nuts\".", answer: true, explanation: "Correct! \"Noix\" means \"nuts\" and \"allergique\" means \"allergic\"." },
      { statement: "\"Le plat du jour\" means \"yesterday's dish\".", answer: false, explanation: "\"Le plat du jour\" means \"the dish of the day\". \"Jour\" means \"day\", not \"yesterday\"." },
      { statement: "\"Est-ce que je pourrais\" is a polite way to ask \"could I\".", answer: true, explanation: "Correct! This is a polite conditional form, more formal than \"je peux\"." },
      { statement: "\"Un pourboire\" means \"a problem\".", answer: false, explanation: "\"Un pourboire\" means \"a tip\" (money left for good service)." },
      { statement: "In French restaurants, \"le service est compris\" means service charge is already included.", answer: true, explanation: "Correct! In most French restaurants, a service charge of 15% is included in the price." },
      { statement: "\"Sans gluten\" means \"with extra gluten\".", answer: false, explanation: "\"Sans\" means \"without\". \"Sans gluten\" means \"gluten-free\"." },
      { statement: "\"Je voudrais voir le gérant\" means you want to see the manager.", answer: true, explanation: "Correct! \"Le gérant\" means \"the manager\". This is used when you have a serious complaint." },
      { statement: "\"Ce n'est pas ce que j'ai commandé\" means \"this is what I ordered\".", answer: false, explanation: "The \"ne...pas\" makes it negative. It means \"this is NOT what I ordered\"." },
      { statement: "\"Les fruits de mer\" means \"fruit from the sea\" — i.e., seafood.", answer: true, explanation: "Correct! Literally \"fruits of the sea\", it refers to all types of seafood." },
      { statement: "\"Bœuf bourguignon\" is a fish dish.", answer: false, explanation: "\"Bœuf\" means \"beef\". Bœuf bourguignon is a beef stew from Burgundy." }
    ],

    multipleChoice: [
      { question: "How do you ask \"Does this dish contain nuts?\" in French?", options: ["Est-ce que ce plat a des noix ?", "Est-ce que ce plat contient des noix ?", "Est-ce que ce plat mange des noix ?", "Est-ce que ce plat veut des noix ?"], correct: 1, explanation: "\"Contenir\" means \"to contain\". \"Ce plat contient\" = this dish contains." },
      { question: "What does \"Nous attendons depuis quarante-cinq minutes\" mean?", options: ["We have been waiting for 45 minutes", "We arrived 45 minutes ago", "We ordered 45 minutes ago", "We have 45 minutes left"], correct: 0, explanation: "\"Attendre\" = to wait. \"Depuis\" = for/since. Quarante-cinq = 45." },
      { question: "How do you say \"the service is really bad\"?", options: ["Le service est vraiment bon", "Le service est vraiment mauvais", "Le service est très cher", "Le service est compris"], correct: 1, explanation: "\"Mauvais\" means \"bad\". \"Vraiment\" means \"really\"." },
      { question: "What is a \"salade de chèvre chaud\"?", options: ["A hot chicken salad", "A warm goat's cheese salad", "A cold sheep's cheese salad", "A grilled meat salad"], correct: 1, explanation: "\"Chèvre\" means \"goat\" (or goat's cheese). \"Chaud\" means \"warm/hot\"." },
      { question: "How would you say \"I would like to complain\"?", options: ["Je voudrais commander", "Je voudrais manger", "Je voudrais me plaindre", "Je voudrais partir"], correct: 2, explanation: "\"Se plaindre\" means \"to complain\". \"Je voudrais me plaindre\" = I would like to complain." },
      { question: "What is \"un plateau de fromages\"?", options: ["A plate of fruit", "A cheese board", "A bread basket", "A dessert platter"], correct: 1, explanation: "\"Fromages\" means \"cheeses\". \"Un plateau\" means \"a board/platter\"." },
      { question: "\"Vous avez choisi ?\" means:", options: ["Are you ready to pay?", "Have you chosen?", "Do you have a reservation?", "Are you enjoying your meal?"], correct: 1, explanation: "\"Choisir\" means \"to choose\". \"Vous avez choisi\" = have you chosen?" },
      { question: "What does \"en plus\" mean?", options: ["In addition / on top of that", "In the past", "In private", "In the end"], correct: 0, explanation: "\"En plus\" means \"on top of that\" or \"furthermore\". Used when adding another complaint." },
      { question: "How do you say \"I recommend\" in French?", options: ["Je commande", "Je demande", "Je recommande", "Je comprends"], correct: 2, explanation: "\"Recommander\" means \"to recommend\"." },
      { question: "What is \"une tarte tatin\"?", options: ["A custard tart", "A fruit tart", "An upside-down apple tart", "A chocolate tart"], correct: 2, explanation: "Tarte tatin is a famous French upside-down apple tart, named after the Tatin sisters." }
    ],

    dragDrop: [
      { french: "je suis allergique aux noix", english: "I am allergic to nuts" },
      { french: "le plat du jour", english: "the dish of the day" },
      { french: "ce n'est pas ce que j'ai commandé", english: "this is not what I ordered" },
      { french: "je voudrais me plaindre", english: "I would like to complain" },
      { french: "le service est compris", english: "service is included" },
      { french: "un pourboire", english: "a tip" },
      { french: "sans gluten", english: "gluten-free" },
      { french: "les fruits de mer", english: "seafood" },
      { french: "est-ce que je pourrais", english: "could I" },
      { french: "il y a une erreur", english: "there is a mistake" }
    ],

    scenarioBuilder: {
      instruction: "Build your own restaurant complaint scenario! Select options to create a realistic situation where something goes wrong.",
      steps: [
        { label: "Identify the problem", options: ["Excusez-moi, ce n'est pas ce que j'ai commandé.", "Excusez-moi, le plat est froid.", "Excusez-moi, il y a un insecte dans ma soupe !", "Excusez-moi, nous attendons depuis longtemps."] },
        { label: "Explain what you ordered", options: ["J'ai commandé le saumon, pas l'agneau.", "J'ai commandé un plat végétarien.", "J'ai demandé un plat sans noix.", "J'ai commandé le plat du jour."] },
        { label: "Express your feelings", options: ["Je suis très déçu(e).", "Je ne suis pas content(e).", "Ce n'est pas acceptable.", "Je voudrais me plaindre."] },
        { label: "Ask for a solution", options: ["Est-ce que je pourrais avoir un autre plat ?", "Je voudrais voir le gérant, s'il vous plaît.", "Est-ce que vous pouvez changer mon plat ?", "Je ne veux pas payer pour ça."] },
        { label: "Respond to the apology", options: ["Merci, j'apprécie.", "D'accord, mais ne laissez pas cela se reproduire.", "Merci, c'est gentil de votre part."] }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     YEAR 10 – Complex roleplay, justified opinions, IGCSE-level
     ────────────────────────────────────────────────────────── */
  10: {
    title: "Au Grand Restaurant – L'expérience complète",
    subtitle: "At the Fine Restaurant – The Full Experience",
    description: "Master complex restaurant interactions: reservations, special requests, complaints with justified opinions.",
    maxStudents: 3,

    vocabulary: [
      { french: "je voudrais réserver une table", english: "I would like to book a table", phonetic: "zhuh voo-DREH ray-zehr-VAY ewn TAHBL", category: "phrase", img: "reservation" },
      { french: "une table en terrasse", english: "an outdoor table", phonetic: "ewn TAHBL ahn teh-RAHS", category: "phrase" },
      { french: "le menu à prix fixe", english: "the set menu", phonetic: "luh muh-NEW ah PREE FEEKS", category: "phrase" },
      { french: "je voudrais quelque chose de léger", english: "I would like something light", phonetic: "zhuh voo-DREH kel-kuh SHOHZ duh lay-ZHAY", category: "phrase" },
      { french: "qu'est-ce que vous recommandez ?", english: "what do you recommend?", phonetic: "kess-kuh voo ruh-koh-mahn-DAY?", category: "phrase" },
      { french: "c'était parfait", english: "it was perfect", phonetic: "say-TEH pahr-FEH", category: "phrase" },
      { french: "le rapport qualité-prix", english: "value for money", phonetic: "luh rah-POHR kah-lee-TAY PREE", category: "phrase" },
      { french: "je suis déçu(e) parce que", english: "I am disappointed because", phonetic: "zhuh swee day-SEW pahrs-KUH", category: "phrase" },
      { french: "à mon avis", english: "in my opinion", phonetic: "ah mohn ah-VEE", category: "phrase" },
      { french: "une spécialité de la région", english: "a regional speciality", phonetic: "ewn spay-syah-lee-TAY duh lah ray-ZHYOHN", category: "phrase" },
      { french: "le chef cuisinier", english: "the head chef", phonetic: "luh SHEF kwee-zee-NYAY", category: "phrase" },
      { french: "payer par carte", english: "to pay by card", phonetic: "pay-YAY pahr KAHRT", category: "phrase" },
      { french: "à point", english: "medium (steak)", phonetic: "ah PWAHN", category: "food" },
      { french: "bien cuit", english: "well done (steak)", phonetic: "byaN KWEE", category: "food" },
      { french: "saignant", english: "rare (steak)", phonetic: "say-NYAHN", category: "food" },
      { french: "le digestif", english: "after-dinner drink", phonetic: "luh dee-zhes-TEEF", category: "drink" }
    ],

    menu: {
      name: "Le Grand Véfour",
      sections: [
        {
          title: "Entrées / Starters",
          items: [
            { french: "Velouté de champignons sauvages", price: "9,50 €", english: "Wild mushroom velouté" },
            { french: "Foie gras maison avec toast", price: "14,00 €", english: "Homemade foie gras with toast" },
            { french: "Carpaccio de bœuf à l'huile de truffe", price: "12,00 €", english: "Beef carpaccio with truffle oil" },
            { french: "Salade de homard", price: "15,00 €", english: "Lobster salad" }
          ]
        },
        {
          title: "Plats principaux / Main Courses",
          items: [
            { french: "Filet de bœuf, sauce au poivre", price: "24,00 €", english: "Beef fillet, pepper sauce" },
            { french: "Magret de canard aux cerises", price: "22,00 €", english: "Duck breast with cherries" },
            { french: "Loup de mer grillé, beurre blanc", price: "21,00 €", english: "Grilled sea bass, white butter sauce" },
            { french: "Risotto aux truffes (végétarien)", price: "18,00 €", english: "Truffle risotto (vegetarian)" },
            { french: "Côte d'agneau rôtie, jus au romarin", price: "23,00 €", english: "Roast rack of lamb, rosemary jus" }
          ]
        },
        {
          title: "Desserts / Desserts",
          items: [
            { french: "Soufflé au Grand Marnier", price: "10,00 €", english: "Grand Marnier soufflé" },
            { french: "Assiette de fromages affinés", price: "9,00 €", english: "Selection of mature cheeses" },
            { french: "Panna cotta aux fruits rouges", price: "8,00 €", english: "Panna cotta with red berries" },
            { french: "Fondant au chocolat noir", price: "9,50 €", english: "Dark chocolate fondant" }
          ]
        },
        {
          title: "Boissons / Drinks",
          items: [
            { french: "Eau plate / Eau gazeuse", price: "3,00 €", english: "Still water / Sparkling water" },
            { french: "Jus de fruits frais", price: "4,50 €", english: "Fresh fruit juice" },
            { french: "Café expresso", price: "2,50 €", english: "Espresso" },
            { french: "Thé aux herbes", price: "3,50 €", english: "Herbal tea" }
          ]
        }
      ]
    },

    roleplay: {
      scenarios: [
        {
          title: "The Fine Dining Experience",
          type: "happy",
          context: "You are celebrating a special occasion at a fine restaurant. Make a reservation, ask for recommendations, order confidently and give justified opinions about the food.",
          lines: [
            { role: "customer", french: "Bonsoir. J'ai réservé une table pour deux au nom de Martin.", phonetic: "bohn-SWAHR. zhay ray-zehr-VAY ewn TAHBL poor DUH oh NOHM duh mahr-TAN", english: "Good evening. I have booked a table for two under the name Martin." },
            { role: "waiter", french: "Bonsoir, Monsieur Martin. Préférez-vous une table en terrasse ou à l'intérieur ?", phonetic: "bohn-SWAHR, muh-SYUH mahr-TAN. pray-fay-RAY voo ewn TAHBL ahn teh-RAHS oo ah lan-tay-RYUHR?", english: "Good evening, Mr Martin. Would you prefer an outdoor table or inside?" },
            { role: "customer", french: "En terrasse, s'il vous plaît. Qu'est-ce que vous recommandez ce soir ?", phonetic: "ahn teh-RAHS, seel voo PLEH. kess-kuh voo ruh-koh-mahn-DAY suh SWAHR?", english: "Outside, please. What do you recommend this evening?" },
            { role: "waiter", french: "Je recommande le magret de canard. C'est une spécialité de la région.", phonetic: "zhuh ruh-koh-MAHND luh mah-GREH duh kah-NAHR. set ewn spay-syah-lee-TAY duh lah ray-ZHYOHN", english: "I recommend the duck breast. It is a regional speciality." },
            { role: "customer", french: "Ça a l'air délicieux. Et comme entrée, je voudrais le velouté de champignons.", phonetic: "sah ah LEHR day-lee-SYUH. ay kohm ahn-TRAY, zhuh voo-DREH luh vuh-loo-TAY duh shahm-pee-NYOHN", english: "That sounds delicious. And as a starter, I would like the mushroom velouté." },
            { role: "waiter", french: "Excellent choix. Comment voulez-vous votre viande ?", phonetic: "ex-seh-LAHN SHWAH. koh-MAHN voo-LAY voo VOH-truh VYAHND?", english: "Excellent choice. How would you like your meat?" },
            { role: "customer", french: "À point, s'il vous plaît.", phonetic: "ah PWAHN, seel voo PLEH", english: "Medium, please." },
            { role: "waiter", french: "Très bien. Bon appétit !", phonetic: "treh BYAHN. bohn ah-pay-TEE!", english: "Very good. Enjoy your meal!" },
            { role: "customer", french: "C'était absolument parfait. À mon avis, c'est le meilleur restaurant de la ville.", phonetic: "say-TEH ab-soh-lew-MAHN pahr-FEH. ah mohn ah-VEE, seh luh meh-YUHR res-toh-RAHN duh lah VEEL", english: "It was absolutely perfect. In my opinion, it is the best restaurant in town." }
          ]
        },
        {
          title: "The Furious Customer",
          type: "angry",
          context: "You booked a table for a special occasion but the restaurant has lost your reservation. The food is overpriced and the service is poor. Express your justified opinions and demand a solution.",
          lines: [
            { role: "customer", french: "Bonsoir. J'ai réservé une table pour quatre au nom de Dupont.", phonetic: "bohn-SWAHR. zhay ray-zehr-VAY ewn TAHBL poor KAHT-ruh oh NOHM duh dew-POHN", english: "Good evening. I booked a table for four under the name Dupont." },
            { role: "waiter", french: "Désolé, je ne trouve pas votre réservation.", phonetic: "day-zoh-LAY, zhuh nuh TROOV pah VOH-truh ray-zehr-vah-SYOHN", english: "Sorry, I cannot find your reservation." },
            { role: "customer", french: "Comment ? C'est inacceptable ! J'ai réservé il y a deux semaines pour un anniversaire.", phonetic: "koh-MAHN? set ee-nahk-sep-TAHBL! zhay ray-zehr-VAY eel ee ah DUH suh-MEN poor uh nah-nee-vehr-SEHR", english: "What? This is unacceptable! I booked two weeks ago for a birthday." },
            { role: "waiter", french: "Je suis vraiment désolé. Je vais trouver une solution.", phonetic: "zhuh swee vreh-MAHN day-zoh-LAY. zhuh VAY troo-VAY ewn soh-lew-SYOHN", english: "I am truly sorry. I will find a solution." },
            { role: "customer", french: "En plus, les prix sont très élevés. Le rapport qualité-prix n'est pas bon, à mon avis.", phonetic: "ahn PLEW, lay PREE sohn treh zay-luh-VAY. luh rah-POHR kah-lee-TAY PREE neh PAH BOHN, ah mohn ah-VEE", english: "Furthermore, the prices are very high. The value for money is not good, in my opinion." },
            { role: "customer", french: "Je suis très déçu parce que j'attendais une soirée spéciale.", phonetic: "zhuh swee treh day-SEW pahrs-kuh zhah-tahn-DEH ewn swah-RAY spay-SYAHL", english: "I am very disappointed because I was expecting a special evening." },
            { role: "waiter", french: "Je comprends. Je vais appeler le gérant immédiatement.", phonetic: "zhuh kohm-PRAHN. zhuh VAY ahp-LAY luh zhay-RAHN ee-may-dee-AHT-mahn", english: "I understand. I will call the manager immediately." },
            { role: "customer", french: "Merci. J'espère qu'on pourra trouver une solution satisfaisante.", phonetic: "mehr-SEE. zhes-PEHR kohn poo-RAH troo-VAY ewn soh-lew-SYOHN sah-tees-fuh-ZAHNT", english: "Thank you. I hope we can find a satisfactory solution." }
          ]
        }
      ]
    },

    trueFalse: [
      { statement: "\"À point\" means a steak cooked medium.", answer: true, explanation: "Correct! \"À point\" = medium. \"Saignant\" = rare. \"Bien cuit\" = well done." },
      { statement: "\"Le menu à prix fixe\" means you can choose any price.", answer: false, explanation: "\"Le menu à prix fixe\" means a set menu at a fixed price — usually includes 2 or 3 courses." },
      { statement: "\"Le rapport qualité-prix\" refers to value for money.", answer: true, explanation: "Correct! It literally means \"the quality-price ratio\" — i.e., value for money." },
      { statement: "\"Je suis déçu\" means \"I am delighted\".", answer: false, explanation: "\"Déçu\" means \"disappointed\", not \"delighted\". \"Delighted\" would be \"ravi\"." },
      { statement: "\"À mon avis\" means \"in my opinion\".", answer: true, explanation: "Correct! This is an important opinion phrase for IGCSE French." },
      { statement: "\"Payer par carte\" means \"to pay in cash\".", answer: false, explanation: "\"Par carte\" means \"by card\". \"In cash\" would be \"en espèces\"." },
      { statement: "\"Saignant\" describes a well-done steak.", answer: false, explanation: "\"Saignant\" means \"rare\" (literally \"bleeding\"). \"Well done\" is \"bien cuit\"." },
      { statement: "\"Eau gazeuse\" means sparkling water.", answer: true, explanation: "Correct! \"Gazeuse\" means \"sparkling/fizzy\". \"Eau plate\" means \"still water\"." },
      { statement: "\"Une spécialité de la région\" means a regional speciality.", answer: true, explanation: "Correct! French restaurants often highlight local dishes from their region." },
      { statement: "\"Le digestif\" is a drink served before the meal.", answer: false, explanation: "\"Le digestif\" is an after-dinner drink, served after dessert. A before-meal drink is \"un apéritif\"." }
    ],

    multipleChoice: [
      { question: "How do you say \"I booked a table\" in French?", options: ["J'ai commandé une table", "J'ai réservé une table", "J'ai trouvé une table", "J'ai acheté une table"], correct: 1, explanation: "\"Réserver\" means \"to book/reserve\". \"J'ai réservé\" = I booked." },
      { question: "What does \"Comment voulez-vous votre viande ?\" mean?", options: ["What meat do you want?", "How would you like your meat?", "Do you want meat?", "Which meat is best?"], correct: 1, explanation: "The waiter is asking how you want your meat cooked (rare, medium, well done)." },
      { question: "How would you say \"in my opinion, it is the best restaurant\"?", options: ["Je pense que c'est un bon restaurant", "À mon avis, c'est le meilleur restaurant", "Selon moi, c'est le pire restaurant", "D'après moi, c'est un restaurant normal"], correct: 1, explanation: "\"À mon avis\" = in my opinion. \"Le meilleur\" = the best." },
      { question: "What is \"un velouté de champignons sauvages\"?", options: ["A wild mushroom omelette", "A wild mushroom velouté (creamy soup)", "A mushroom salad", "Mushrooms on toast"], correct: 1, explanation: "\"Velouté\" is a creamy soup. \"Champignons sauvages\" = wild mushrooms." },
      { question: "\"C'est inacceptable\" means:", options: ["It is incredible", "It is unacceptable", "It is impossible", "It is unnecessary"], correct: 1, explanation: "\"Inacceptable\" means \"unacceptable\". A strong complaint word." },
      { question: "How do you say \"I was expecting a special evening\"?", options: ["J'attendais une soirée spéciale", "Je veux une soirée spéciale", "J'ai eu une soirée spéciale", "Je cherche une soirée spéciale"], correct: 0, explanation: "\"J'attendais\" (imperfect tense) = I was expecting/waiting for." },
      { question: "What is \"un magret de canard\"?", options: ["Duck liver", "Duck leg", "Duck breast", "Duck soup"], correct: 2, explanation: "\"Magret\" specifically refers to the breast of a fattened duck." },
      { question: "\"Ça a l'air délicieux\" means:", options: ["It is delicious", "It looks delicious", "It smells delicious", "It sounds delicious"], correct: 1, explanation: "\"Avoir l'air\" = to look/seem. \"Ça a l'air délicieux\" = that looks delicious." },
      { question: "How would you say \"I hope we can find a solution\"?", options: ["J'espère qu'on trouvera une solution", "Je veux une solution", "J'ai trouvé une solution", "Je cherche une solution"], correct: 0, explanation: "\"J'espère que\" = I hope that. \"Trouver\" = to find. \"Une solution\" = a solution." },
      { question: "What is the difference between \"l'apéritif\" and \"le digestif\"?", options: ["Both are starters", "Apéritif is before the meal, digestif is after", "They are the same thing", "Apéritif is a dessert, digestif is a drink"], correct: 1, explanation: "\"L'apéritif\" = before-dinner drink. \"Le digestif\" = after-dinner drink." }
    ],

    dragDrop: [
      { french: "je voudrais réserver une table", english: "I would like to book a table" },
      { french: "qu'est-ce que vous recommandez", english: "what do you recommend" },
      { french: "à mon avis", english: "in my opinion" },
      { french: "le rapport qualité-prix", english: "value for money" },
      { french: "c'est inacceptable", english: "this is unacceptable" },
      { french: "je suis déçu(e) parce que", english: "I am disappointed because" },
      { french: "payer par carte", english: "to pay by card" },
      { french: "une spécialité de la région", english: "a regional speciality" },
      { french: "c'était absolument parfait", english: "it was absolutely perfect" },
      { french: "le menu à prix fixe", english: "the set menu" }
    ],

    scenarioBuilder: {
      instruction: "Build your own fine dining scenario! Create a complete restaurant visit including a reservation, ordering, opinions, and either a compliment or a complaint.",
      steps: [
        { label: "Make your reservation", options: ["J'ai réservé une table pour deux au nom de Martin.", "Je voudrais réserver une table en terrasse pour ce soir.", "J'ai une réservation pour quatre personnes à vingt heures."] },
        { label: "Ask for advice", options: ["Qu'est-ce que vous recommandez comme entrée ?", "Quelle est la spécialité de la région ?", "Est-ce que vous avez un menu à prix fixe ?"] },
        { label: "Order with detail", options: ["Je voudrais le filet de bœuf à point avec des légumes grillés.", "Je voudrais le loup de mer grillé. Je suis allergique aux noix.", "Je voudrais le magret de canard, s'il vous plaît. C'est pour un anniversaire."] },
        { label: "Give a justified opinion", options: ["C'était absolument parfait. À mon avis, c'est le meilleur restaurant de la ville.", "Je suis déçu(e) parce que le plat était froid et le service était trop lent.", "Le repas était bon, mais le rapport qualité-prix n'est pas excellent."] },
        { label: "Handle the bill", options: ["L'addition, s'il vous plaît. Est-ce que je peux payer par carte ?", "L'addition, s'il vous plaît. Le service est compris ?", "Merci pour ce repas extraordinaire. Voilà un pourboire pour le service."] }
      ]
    }
  }
};
