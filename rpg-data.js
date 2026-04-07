/* ============================================================
   FPA French Restaurant – Roleplay Game & Review Match Data
   G10 IGCSE — Restaurant Scenarios
   ============================================================ */

const RPG_SCENARIOS = [
  {
    id: 1, title: "The Birthday Disaster", titleFr: "L'anniversaire catastrophe",
    icon: "\u{1F382}", colour: "#c62828",
    context: "It's your best friend's birthday dinner. You arrive at the restaurant but they've given your reserved table to someone else. Stay calm but firm.",
    exchanges: [
      { speaker: "waiter", french: "Bonsoir et bienvenue au Grand V\u00e9four. Vous avez une r\u00e9servation ?", phonetic: "bohn-SWAHR ay byaN-vuh-NEW oh GRAHN vay-FOOR. voo zah-VAY ewn ray-zehr-vah-SYOHN?", english: "Good evening and welcome to the Grand V\u00e9four. Do you have a reservation?" },
      { speaker: "customer", prompt: "Tell the waiter you booked a table for six for a birthday.", correct: 0, options: [
        { french: "Oui, j'ai r\u00e9serv\u00e9 une table pour six personnes. C'est pour un anniversaire.", phonetic: "wee, zhay ray-zehr-VAY ewn TAHBL poor SEE pehr-SOHN. seh poor uh nah-nee-vehr-SEHR", english: "Yes, I booked a table for six people. It's for a birthday." },
        { french: "Je voudrais un g\u00e2teau au chocolat, s'il vous pla\u00eet.", phonetic: "zhuh voo-DREH uh gah-TOH oh shoh-koh-LAH, seel voo PLEH", english: "I would like a chocolate cake, please." },
        { french: "Mon ami a vingt ans aujourd'hui. Il aime le poisson.", phonetic: "mohn ah-MEE ah VAN ahn oh-zhoor-DWEE. eel EM luh pwah-SOHN", english: "My friend is twenty today. He likes fish." },
        { french: "Est-ce que vous avez du wifi ici ?", phonetic: "ess-kuh voo zah-VAY dew wee-fee ee-SEE?", english: "Do you have wifi here?" }
      ]},
      { speaker: "waiter", french: "Ah, je suis vraiment d\u00e9sol\u00e9, mais votre table a \u00e9t\u00e9 donn\u00e9e \u00e0 quelqu'un d'autre. Il y a eu une erreur.", phonetic: "ah, zhuh swee vreh-MAHN day-zoh-LAY, meh VOH-truh TAHBL ah ay-TAY doh-NAY ah kel-KUH DOHTR. eel ee ah ew ewn eh-RUHR", english: "Ah, I am truly sorry, but your table has been given to someone else. There has been an error." },
      { speaker: "customer", prompt: "Express your frustration politely. Explain you booked two weeks ago.", correct: 1, options: [
        { french: "D'accord, pas de probl\u00e8me. On va aller ailleurs.", phonetic: "dah-KOHR, pah duh proh-BLEM. ohn vah ah-LAY ah-YUHR", english: "OK, no problem. We'll go somewhere else." },
        { french: "Comment ? C'est inadmissible ! J'ai r\u00e9serv\u00e9 il y a deux semaines !", phonetic: "koh-MAHN? seh tee-nahd-mee-SEEBL! zhay ray-zehr-VAY eel ee ah DUH suh-MEN!", english: "What? This is unacceptable! I booked two weeks ago!" },
        { french: "Je voudrais commander un ap\u00e9ritif en attendant.", phonetic: "zhuh voo-DREH koh-mahn-DAY uh nah-pay-ree-TEEF ahn ah-tahn-DAHN", english: "I would like to order an aperitif while waiting." },
        { french: "Est-ce que le restaurant est ouvert demain aussi ?", phonetic: "ess-kuh luh res-toh-RAHN eh too-VEHR duh-MAN oh-SEE?", english: "Is the restaurant open tomorrow too?" }
      ]},
      { speaker: "waiter", french: "Je comprends votre frustration. Laissez-moi parler au g\u00e9rant pour trouver une solution.", phonetic: "zhuh kohm-PRAHN VOH-truh frews-trah-SYOHN. leh-SAY mwah pahr-LAY oh zhay-RAHN poor troo-VAY ewn soh-lew-SYOHN", english: "I understand your frustration. Let me speak to the manager to find a solution." },
      { speaker: "customer", prompt: "Insist that this evening is very important and you demand a table.", correct: 2, options: [
        { french: "Je vais \u00e9crire un avis n\u00e9gatif sur Internet.", phonetic: "zhuh vay ay-KREER uh nah-VEE nay-gah-TEEF sewr an-tehr-NEH", english: "I'm going to write a negative review online." },
        { french: "D'accord, merci. On va attendre au bar.", phonetic: "dah-KOHR, mehr-SEE. ohn vah ah-TAHNDHR oh BAHR", english: "OK, thank you. We'll wait at the bar." },
        { french: "C'est tr\u00e8s important. C'est l'anniversaire de mon meilleur ami et j'exige une table imm\u00e9diatement.", phonetic: "seh treh aN-pohr-TAHN. seh lah-nee-vehr-SEHR duh mohn meh-YUHR ah-MEE ay zhek-ZEEZH ewn TAHBL ee-may-dee-AHT-mahn", english: "This is very important. It's my best friend's birthday and I demand a table immediately." },
        { french: "Quel est le plat du jour aujourd'hui ?", phonetic: "kel eh luh PLAH dew ZHOOR oh-zhoor-DWEE?", english: "What is today's special?" }
      ]},
      { speaker: "waiter", french: "Le g\u00e9rant va vous offrir la meilleure table avec une bouteille de champagne en guise d'excuse.", phonetic: "luh zhay-RAHN vah voo zoh-FREER lah meh-YUHR TAHBL ah-VEK ewn boo-TEY duh shahm-PAH-nyuh ahn GEEZ dex-KEWZ", english: "The manager will offer you the best table with a bottle of champagne as an apology." },
      { speaker: "customer", prompt: "Accept the offer graciously and say you appreciate their effort.", correct: 0, options: [
        { french: "Merci beaucoup, c'est tr\u00e8s gentil. J'appr\u00e9cie vos efforts pour r\u00e9soudre le probl\u00e8me.", phonetic: "mehr-SEE boh-KOO, seh treh zhahn-TEE. zhah-pray-SEE voh zeh-FOHR poor ray-ZOODR luh proh-BLEM", english: "Thank you very much, that is very kind. I appreciate your efforts to resolve the problem." },
        { french: "Non, ce n'est pas suffisant. Je veux aussi un dessert gratuit.", phonetic: "nohn, suh neh PAH sew-fee-ZAHN. zhuh VUH oh-SEE uh deh-SEHR grah-TWEE", english: "No, that's not enough. I also want a free dessert." },
        { french: "Je pr\u00e9f\u00e8re manger \u00e0 la maison finalement.", phonetic: "zhuh pray-FEHR mahn-ZHAY ah lah meh-ZOHN fee-nahl-MAHN", english: "I prefer to eat at home after all." },
        { french: "Est-ce que le champagne est fran\u00e7ais ou espagnol ?", phonetic: "ess-kuh luh shahm-PAH-nyuh eh frahn-SEH oo ess-pah-NYOHL?", english: "Is the champagne French or Spanish?" }
      ]}
    ]
  },
  {
    id: 2, title: "The Allergic Reaction", titleFr: "La r\u00e9action allergique",
    icon: "\u{1F95C}", colour: "#e65100",
    context: "You have a severe nut allergy. You need to communicate this clearly to the waiter and make sure your food is safe.",
    exchanges: [
      { speaker: "waiter", french: "Bonsoir ! Voici le menu. Avez-vous des questions ?", phonetic: "bohn-SWAHR! vwah-SEE luh muh-NEW. ah-VAY voo day kes-TYOHN?", english: "Good evening! Here is the menu. Do you have any questions?" },
      { speaker: "customer", prompt: "Tell the waiter you have a severe nut allergy.", correct: 2, options: [
        { french: "Je n'aime pas les noix, donc pas de salade.", phonetic: "zhuh NEM pah lay NWAH, dohnk pah duh sah-LAHD", english: "I don't like nuts, so no salad." },
        { french: "Est-ce que le filet de b\u0153uf est bon ?", phonetic: "ess-kuh luh fee-LEH duh BUHF eh BOHN?", english: "Is the beef fillet good?" },
        { french: "C'est tr\u00e8s important : j'ai une allergie s\u00e9v\u00e8re aux noix. Est-ce qu'il y a des noix dans vos plats ?", phonetic: "seh treh aN-pohr-TAHN: zhay ewn ah-lehr-ZHEE say-VEHR oh NWAH. ess-keel ee ah day NWAH dahn voh PLAH?", english: "It's very important: I have a severe nut allergy. Are there nuts in your dishes?" },
        { french: "Mon plat pr\u00e9f\u00e9r\u00e9 est le g\u00e2teau aux noix.", phonetic: "mohn PLAH pray-fay-RAY eh luh gah-TOH oh NWAH", english: "My favourite dish is walnut cake." }
      ]},
      { speaker: "waiter", french: "Bien s\u00fbr, je comprends. Le magret de canard et le loup de mer sont sans noix.", phonetic: "byaN SEWR, zhuh kohm-PRAHN. luh mah-GREH duh kah-NAHR ay luh LOO duh MEHR sohn sahn NWAH", english: "Of course, I understand. The duck breast and the sea bass are nut-free." },
      { speaker: "customer", prompt: "Ask if the mushroom soup contains any traces of nuts.", correct: 1, options: [
        { french: "Je d\u00e9teste les champignons, c'est d\u00e9go\u00fbtant.", phonetic: "zhuh day-TEST lay shahm-pee-NYOHN, seh day-goo-TAHN", english: "I hate mushrooms, it's disgusting." },
        { french: "Et le velout\u00e9 de champignons, est-ce qu'il contient des noix ou des traces de noix ?", phonetic: "ay luh vuh-loo-TAY duh shahm-pee-NYOHN, ess-keel kohn-TYAHN day NWAH oo day TRAHS duh NWAH?", english: "And the mushroom velout\u00e9, does it contain nuts or traces of nuts?" },
        { french: "Je voudrais six entr\u00e9es diff\u00e9rentes pour go\u00fbter.", phonetic: "zhuh voo-DREH SEE ahn-TRAY dee-fay-RAHNT poor goo-TAY", english: "I would like six different starters to taste." },
        { french: "Les champignons poussent dans la for\u00eat, n'est-ce pas ?", phonetic: "lay shahm-pee-NYOHN POOSS dahn lah foh-REH, ness PAH?", english: "Mushrooms grow in the forest, don't they?" }
      ]},
      { speaker: "waiter", french: "Le velout\u00e9 est pr\u00e9par\u00e9 avec de la cr\u00e8me et du beurre uniquement. Aucune trace de noix.", phonetic: "luh vuh-loo-TAY eh pray-pah-RAY ah-VEK duh lah KREM ay dew BUHR ew-neek-MAHN. oh-KEWN TRAHS duh NWAH", english: "The velout\u00e9 is prepared with cream and butter only. No traces of nuts." },
      { speaker: "customer", prompt: "Order the soup to start and the sea bass for main.", correct: 0, options: [
        { french: "Parfait ! Alors comme entr\u00e9e, le velout\u00e9 de champignons, et comme plat principal, le loup de mer grill\u00e9, s'il vous pla\u00eet.", phonetic: "pahr-FEH! ah-LOHR kohm ahn-TRAY, luh vuh-loo-TAY duh shahm-pee-NYOHN, ay kohm PLAH praN-see-PAHL, luh LOO duh MEHR gree-YAY, seel voo PLEH", english: "Perfect! So as a starter, the mushroom velout\u00e9, and as a main, the grilled sea bass, please." },
        { french: "Donnez-moi n'importe quoi. Je n'ai pas tr\u00e8s faim.", phonetic: "doh-NAY mwah naN-POHRT kwah. zhuh nay pah treh FAHN", english: "Give me whatever. I'm not very hungry." },
        { french: "Je voudrais le steak avec une sauce aux cacahu\u00e8tes.", phonetic: "zhuh voo-DREH luh STAYK ah-VEK ewn SOHS oh kah-kah-WET", english: "I would like the steak with peanut sauce." },
        { french: "Est-ce que je peux avoir la recette du velout\u00e9 ?", phonetic: "ess-kuh zhuh PUH ah-VWAHR lah ruh-SET dew vuh-loo-TAY?", english: "Can I have the recipe for the velout\u00e9?" }
      ]},
      { speaker: "waiter", french: "Excellent choix ! Pour le dessert, la panna cotta aux fruits rouges est sans noix.", phonetic: "ex-seh-LAHN SHWAH! poor luh deh-SEHR, lah pah-nah KOH-tah oh FRWEE ROOZH eh sahn NWAH", english: "Excellent choice! For dessert, the panna cotta with red berries is nut-free." },
      { speaker: "customer", prompt: "Thank the waiter for being so careful. You feel reassured.", correct: 3, options: [
        { french: "Je vais prendre le fondant au chocolat \u00e0 la place.", phonetic: "zhuh vay PRAHNDR luh fohn-DAHN oh shoh-koh-LAH ah lah PLAHS", english: "I'll have the chocolate fondant instead." },
        { french: "C'est trop cher pour un dessert.", phonetic: "seh troh SHEHR poor uh deh-SEHR", english: "That's too expensive for a dessert." },
        { french: "Mon allergie n'est pas si grave en fait.", phonetic: "mohn ah-lehr-ZHEE neh pah see GRAHV ahn FEH", english: "My allergy is not that serious actually." },
        { french: "Merci infiniment pour votre attention. Je me sens tout \u00e0 fait rassur\u00e9. La panna cotta, volontiers !", phonetic: "mehr-SEE an-fee-nee-MAHN poor VOH-truh ah-tahn-SYOHN. zhuh muh SAHN too tah FEH rah-sew-RAY. lah pah-nah KOH-tah, voh-lohn-TYAY!", english: "Thank you so much for your care. I feel completely reassured. The panna cotta, gladly!" }
      ]}
    ]
  },
  {
    id: 3, title: "The Secret Proposal", titleFr: "La demande en mariage secr\u00e8te",
    icon: "\u{1F48D}", colour: "#6a1b9a",
    context: "You're planning to propose to your partner during dessert. You need the waiter to hide the ring in a special dish \u2014 without your partner noticing!",
    exchanges: [
      { speaker: "waiter", french: "Bonsoir, bienvenue. Votre table est pr\u00eate. C'est une occasion sp\u00e9ciale ce soir ?", phonetic: "bohn-SWAHR, byaN-vuh-NEW. VOH-truh TAHBL eh PRET. seh tewn oh-kah-ZYOHN spay-SYAHL suh SWAHR?", english: "Good evening, welcome. Your table is ready. Is it a special occasion tonight?" },
      { speaker: "customer", prompt: "Discreetly tell the waiter about your proposal plan.", correct: 1, options: [
        { french: "Non, c'est un d\u00eener normal. Rien de sp\u00e9cial.", phonetic: "nohn, seh tuh dee-NAY nohr-MAHL. ryaN duh spay-SYAHL", english: "No, it's a normal dinner. Nothing special." },
        { french: "Oui, j'ai besoin de votre aide. Je vais demander ma copine en mariage ce soir. Pourriez-vous cacher la bague dans le dessert ?", phonetic: "wee, zhay buh-ZWAHN duh VOH-truh ED. zhuh vay duh-mahn-DAY mah koh-PEEN ahn mah-RYAHZH suh SWAHR. poo-ryay VOO kah-SHAY lah BAHG dahn luh deh-SEHR?", english: "Yes, I need your help. I'm going to propose to my girlfriend tonight. Could you hide the ring in the dessert?" },
        { french: "Je cherche les toilettes, s'il vous pla\u00eet.", phonetic: "zhuh SHEHRSH lay twah-LET, seel voo PLEH", english: "I'm looking for the toilets, please." },
        { french: "C'est l'anniversaire de mon chien aujourd'hui.", phonetic: "seh lah-nee-vehr-SEHR duh mohn SHYAHN oh-zhoor-DWEE", english: "It's my dog's birthday today." }
      ]},
      { speaker: "waiter", french: "Quelle merveilleuse nouvelle ! Je serai tr\u00e8s discret. Dans quel dessert voulez-vous cacher la bague ?", phonetic: "kel mehr-veh-YUHZ noo-VEL! zhuh suh-RAY treh dees-KREH. dahn kel deh-SEHR voo-LAY voo kah-SHAY lah BAHG?", english: "What wonderful news! I will be very discreet. In which dessert would you like to hide the ring?" },
      { speaker: "customer", prompt: "Choose the chocolate fondant and ask for a special message.", correct: 2, options: [
        { french: "N'importe lequel, \u00e7a m'est \u00e9gal.", phonetic: "naN-POHRT luh-KEL, sah meh tay-GAHL", english: "Whichever, I don't mind." },
        { french: "Annulez tout. J'ai chang\u00e9 d'avis.", phonetic: "ah-new-LAY TOO. zhay shahn-ZHAY dah-VEE", english: "Cancel everything. I've changed my mind." },
        { french: "Dans le fondant au chocolat noir, s'il vous pla\u00eet. Pourriez-vous \u00e9crire \u00ab Veux-tu m'\u00e9pouser ? \u00bb en chocolat sur l'assiette ?", phonetic: "dahn luh fohn-DAHN oh shoh-koh-LAH NWAHR, seel voo PLEH. poo-ryay VOO ay-KREER vuh tew may-poo-ZAY ahn shoh-koh-LAH sewr lah-SYET?", english: "In the dark chocolate fondant, please. Could you write 'Will you marry me?' in chocolate on the plate?" },
        { french: "J'ai chang\u00e9 d'avis. Je voudrais le fromage.", phonetic: "zhay shahn-ZHAY dah-VEE. zhuh voo-DREH luh froh-MAHZH", english: "I've changed my mind. I'd like the cheese." }
      ]},
      { speaker: "waiter", french: "Ce sera magnifique ! En attendant, puis-je vous recommander le magret de canard pour deux ?", phonetic: "suh suh-RAH mah-nyee-FEEK! ahn ah-tahn-DAHN, pwee zhuh voo ruh-koh-mahn-DAY luh mah-GREH duh kah-NAHR poor DUH?", english: "That will be magnificent! In the meantime, may I recommend the duck breast for two?" },
      { speaker: "customer", prompt: "Order for both of you \u2014 the duck sounds perfect.", correct: 0, options: [
        { french: "Bonne id\u00e9e ! Deux magrets de canard et une bouteille d'eau gazeuse, s'il vous pla\u00eet.", phonetic: "bohn ee-DAY! duh mah-GREH duh kah-NAHR ay ewn boo-TEY DOH gah-ZUHZ, seel voo PLEH", english: "Good idea! Two duck breasts and a bottle of sparkling water, please." },
        { french: "Non merci, nous n'avons pas faim.", phonetic: "nohn mehr-SEE, noo nah-VOHN pah FAHN", english: "No thanks, we're not hungry." },
        { french: "Ma copine est v\u00e9g\u00e9tarienne, elle ne mange pas de canard.", phonetic: "mah koh-PEEN eh vay-zhay-tah-RYAN, el nuh MAHNZH pah duh kah-NAHR", english: "My girlfriend is vegetarian, she doesn't eat duck." },
        { french: "Je voudrais seulement des frites et du ketchup.", phonetic: "zhuh voo-DREH suhl-MAHN day FREET ay dew ket-SHUHP", english: "I would just like chips and ketchup." }
      ]}
    ]
  },
  {
    id: 4, title: "The Food Critic in Disguise", titleFr: "Le critique gastronomique d\u00e9guis\u00e9",
    icon: "\u{1F575}\uFE0F", colour: "#1565c0",
    context: "You are a famous food critic visiting the restaurant undercover. Test the food and service without revealing your identity. Be observant!",
    exchanges: [
      { speaker: "waiter", french: "Bonsoir. Une table pour une personne ?", phonetic: "bohn-SWAHR. ewn TAHBL poor ewn pehr-SOHN?", english: "Good evening. A table for one?" },
      { speaker: "customer", prompt: "Request a quiet table where you can observe the restaurant.", correct: 3, options: [
        { french: "Oui, la table \u00e0 c\u00f4t\u00e9 des toilettes, \u00e7a ira.", phonetic: "wee, lah TAHBL ah koh-TAY day twah-LET, sah ee-RAH", english: "Yes, the table next to the toilets will do." },
        { french: "Non, je pr\u00e9f\u00e8re manger debout au bar.", phonetic: "nohn, zhuh pray-FEHR mahn-ZHAY duh-BOO oh BAHR", english: "No, I prefer to eat standing at the bar." },
        { french: "Je suis un critique gastronomique c\u00e9l\u00e8bre !", phonetic: "zhuh swee zuh kree-TEEK gas-troh-noh-MEEK say-LEBR!", english: "I'm a famous food critic!" },
        { french: "Oui, s'il vous pla\u00eet. Je voudrais une table tranquille dans un coin, si possible.", phonetic: "wee, seel voo PLEH. zhuh voo-DREH ewn TAHBL trahn-KEEL dahn zuh KWAHN, see poh-SEEBL", english: "Yes, please. I would like a quiet table in a corner, if possible." }
      ]},
      { speaker: "waiter", french: "Voici le menu. Nos sp\u00e9cialit\u00e9s sont le filet de b\u0153uf et le loup de mer.", phonetic: "vwah-SEE luh muh-NEW. noh spay-syah-lee-TAY sohn luh fee-LEH duh BUHF ay luh LOO duh MEHR", english: "Here is the menu. Our specialities are the beef fillet and the sea bass." },
      { speaker: "customer", prompt: "Ask about the ingredients and where the products come from.", correct: 1, options: [
        { french: "\u00c7a a l'air bien. Je prends les deux.", phonetic: "sah ah LEHR byaN. zhuh PRAHN lay DUH", english: "That looks good. I'll have both." },
        { french: "Int\u00e9ressant. D'o\u00f9 viennent vos produits ? Le b\u0153uf est-il local ? Et le poisson, est-il frais du jour ?", phonetic: "an-tay-reh-SAHN. DOO vyEN voh proh-DWEE? luh BUHF eh TEEL loh-KAHL? ay luh pwah-SOHN, eh TEEL FREH dew ZHOOR?", english: "Interesting. Where do your products come from? Is the beef local? And is the fish fresh today?" },
        { french: "Je mange seulement des p\u00e2tes et du riz.", phonetic: "zhuh MAHNZH suhl-MAHN day PAHT ay dew REE", english: "I only eat pasta and rice." },
        { french: "Le menu est trop long. Choisissez pour moi.", phonetic: "luh muh-NEW eh troh LOHN. shwah-zee-SAY poor MWAH", english: "The menu is too long. Choose for me." }
      ]},
      { speaker: "waiter", french: "Le b\u0153uf vient de Normandie et le poisson arrive chaque matin du march\u00e9 de Rungis.", phonetic: "luh BUHF vyaN duh nohr-mahn-DEE ay luh pwah-SOHN ah-REEV shahk mah-TAN dew mahr-SHAY duh ruhn-ZHEES", english: "The beef comes from Normandy and the fish arrives every morning from Rungis market." },
      { speaker: "customer", prompt: "Order the beef and ask about preparation.", correct: 0, options: [
        { french: "Excellent. Je voudrais le filet de b\u0153uf. Comment est-il pr\u00e9par\u00e9 exactement ?", phonetic: "ex-seh-LAHN. zhuh voo-DREH luh fee-LEH duh BUHF. koh-MAHN eh TEEL pray-pah-RAY ex-ahk-tuh-MAHN?", english: "Excellent. I would like the beef fillet. How is it prepared exactly?" },
        { french: "Je voudrais un hamburger avec des frites.", phonetic: "zhuh voo-DREH uh ahm-beur-GUHR ah-VEK day FREET", english: "I would like a burger with chips." },
        { french: "Mon restaurant pr\u00e9f\u00e9r\u00e9 est McDonald's.", phonetic: "mohn res-toh-RAHN pray-fay-RAY eh mek-DOH-nahldz", english: "My favourite restaurant is McDonald's." },
        { french: "Combien co\u00fbte le b\u0153uf d'Argentine ?", phonetic: "kohm-BYAHN KOOT luh BUHF dahr-zhahn-TEEN?", english: "How much does the Argentine beef cost?" }
      ]},
      { speaker: "waiter", french: "Le chef le pr\u00e9pare avec une sauce au poivre maison. C'est notre plat signature.", phonetic: "luh SHEF luh pray-PAHR ah-VEK ewn SOHS oh PWAHVR meh-ZOHN. seh NOH-truh PLAH see-nyah-TEWR", english: "The chef prepares it with a homemade pepper sauce. It's our signature dish." },
      { speaker: "customer", prompt: "Give your honest verdict \u2014 you're impressed!", correct: 2, options: [
        { french: "C'\u00e9tait correct, sans plus.", phonetic: "say-TEH koh-REKT, sahn PLEW", english: "It was OK, nothing more." },
        { french: "Je n'ai pas aim\u00e9 du tout. C'\u00e9tait terrible.", phonetic: "zhuh nay pah zeh-MAY dew TOO. say-TEH teh-REEBL", english: "I didn't like it at all. It was terrible." },
        { french: "Franchement, c'\u00e9tait exceptionnel. La cuisson \u00e9tait parfaite et la pr\u00e9sentation impeccable. Mes compliments au chef.", phonetic: "frahnsh-MAHN, say-TEH ex-sep-syoh-NEL. lah kwee-SOHN ay-TEH pahr-FET ay lah pray-zahn-tah-SYOHN an-peh-KAHBL. may kohm-plee-MAHN oh SHEF", english: "Honestly, it was exceptional. The cooking was perfect and the presentation impeccable. My compliments to the chef." },
        { french: "J'ai trouv\u00e9 un cheveu dans mon assiette.", phonetic: "zhay troo-VAY uh shuh-VUH dahn mohn ah-SYET", english: "I found a hair on my plate." }
      ]}
    ]
  },
  {
    id: 5, title: "The Wrong Order", titleFr: "La mauvaise commande",
    icon: "\u{1F624}", colour: "#2e7d32",
    context: "You ordered the grilled sea bass, but the waiter brings you a completely different dish. Sort this out politely but firmly \u2014 you're starving!",
    exchanges: [
      { speaker: "waiter", french: "Et voil\u00e0 ! Le risotto aux truffes. Bon app\u00e9tit !", phonetic: "ay vwah-LAH! luh ree-ZOH-toh oh TREWF. bohn ah-pay-TEE!", english: "Here we go! The truffle risotto. Enjoy your meal!" },
      { speaker: "customer", prompt: "Explain this is the wrong dish \u2014 you ordered the sea bass.", correct: 1, options: [
        { french: "Merci, \u00e7a a l'air d\u00e9licieux !", phonetic: "mehr-SEE, sah ah LEHR day-lee-SYUH!", english: "Thanks, that looks delicious!" },
        { french: "Excusez-moi, mais ce n'est pas ma commande. J'ai command\u00e9 le loup de mer grill\u00e9, pas le risotto.", phonetic: "ex-kew-ZAY mwah, meh suh neh PAH mah koh-MAHND. zhay koh-mahn-DAY luh LOO duh MEHR gree-YAY, pah luh ree-ZOH-toh", english: "Excuse me, but this is not my order. I ordered the grilled sea bass, not the risotto." },
        { french: "Je d\u00e9teste le risotto. C'est d\u00e9go\u00fbtant.", phonetic: "zhuh day-TEST luh ree-ZOH-toh. seh day-goo-TAHN", english: "I hate risotto. It's disgusting." },
        { french: "Quel est le num\u00e9ro de t\u00e9l\u00e9phone du restaurant ?", phonetic: "kel eh luh new-may-ROH duh tay-lay-FOHN dew res-toh-RAHN?", english: "What is the restaurant's phone number?" }
      ]},
      { speaker: "waiter", french: "Oh, je suis terriblement d\u00e9sol\u00e9 ! C'est une erreur de la cuisine. Je vais corriger cela tout de suite.", phonetic: "oh, zhuh swee teh-reebl-MAHN day-zoh-LAY! seh tewn eh-RUHR duh lah kwee-ZEEN. zhuh vay koh-ree-ZHAY suh-LAH too duh SWEET", english: "I am terribly sorry! It's a kitchen error. I will correct this right away." },
      { speaker: "customer", prompt: "Ask how long you'll have to wait \u2014 you've been here 40 minutes.", correct: 0, options: [
        { french: "J'esp\u00e8re que ce ne sera pas long. J'attends d\u00e9j\u00e0 depuis quarante minutes et j'ai tr\u00e8s faim.", phonetic: "zhes-PEHR kuh suh nuh suh-RAH pah LOHN. zhah-TAHN day-ZHAH duh-PWEE kah-RAHNT mee-NEWT ay zhay treh FAHN", english: "I hope it won't be long. I've been waiting for forty minutes already and I'm very hungry." },
        { french: "Pas de probl\u00e8me, prenez votre temps.", phonetic: "pah duh proh-BLEM, pruh-NAY VOH-truh TAHN", english: "No problem, take your time." },
        { french: "Je vais partir et aller manger ailleurs.", phonetic: "zhuh vay pahr-TEER ay ah-LAY mahn-ZHAY ah-YUHR", english: "I'm going to leave and eat somewhere else." },
        { french: "Est-ce que le risotto est v\u00e9g\u00e9tarien ?", phonetic: "ess-kuh luh ree-ZOH-toh eh vay-zhay-tah-RYAHN?", english: "Is the risotto vegetarian?" }
      ]},
      { speaker: "waiter", french: "Dix minutes maximum. En guise d'excuse, puis-je vous offrir une entr\u00e9e gratuite ?", phonetic: "dee mee-NEWT mak-see-MUHM. ahn GEEZ dex-KEWZ, pwee zhuh voo zoh-FREER ewn ahn-TRAY grah-TWEET?", english: "Ten minutes maximum. As an apology, may I offer you a complimentary starter?" },
      { speaker: "customer", prompt: "Accept the free starter and say you appreciate the gesture.", correct: 2, options: [
        { french: "Non merci, je ne veux rien d'autre.", phonetic: "nohn mehr-SEE, zhuh nuh VUH ryaN DOHTR", english: "No thanks, I don't want anything else." },
        { french: "Je veux aussi un dessert gratuit et un caf\u00e9.", phonetic: "zhuh VUH oh-SEE uh deh-SEHR grah-TWEE ay uh kah-FAY", english: "I also want a free dessert and a coffee." },
        { french: "C'est gentil, merci. Je vais prendre le carpaccio de b\u0153uf en attendant. J'appr\u00e9cie le geste.", phonetic: "seh zhahn-TEE, mehr-SEE. zhuh vay PRAHNDR luh kahr-pah-CHOH duh BUHF ahn ah-tahn-DAHN. zhah-pray-SEE luh ZHEST", english: "That's kind, thank you. I'll have the beef carpaccio while waiting. I appreciate the gesture." },
        { french: "Quarante minutes d'attente, c'est scandaleux !", phonetic: "kah-RAHNT mee-NEWT dah-TAHNT, seh skahn-dah-LUH!", english: "Forty minutes waiting, it's outrageous!" }
      ]}
    ]
  },
  {
    id: 6, title: "The Impossible Diet", titleFr: "Le r\u00e9gime impossible",
    icon: "\u{1F957}", colour: "#00838f",
    context: "You're on a very specific diet: no gluten, no dairy, no red meat. Can you find something to eat at this fancy restaurant? Good luck!",
    exchanges: [
      { speaker: "waiter", french: "Bonsoir ! Avez-vous choisi ?", phonetic: "bohn-SWAHR! ah-VAY voo shwah-ZEE?", english: "Good evening! Have you chosen?" },
      { speaker: "customer", prompt: "Explain your dietary restrictions clearly.", correct: 0, options: [
        { french: "Oui, mais j'ai des restrictions alimentaires. Je ne mange ni gluten, ni produits laitiers, ni viande rouge. Qu'est-ce que vous me conseillez ?", phonetic: "wee, meh zhay day res-treek-SYOHN ah-lee-mahn-TEHR. zhuh nuh MAHNZH nee glew-TEN, nee proh-DWEE leh-TYAY, nee VYAHND ROOZH. kess-kuh voo muh kohn-say-YAY?", english: "Yes, but I have dietary restrictions. I don't eat gluten, dairy, or red meat. What do you recommend?" },
        { french: "Je voudrais un steak-frites avec du fromage.", phonetic: "zhuh voo-DREH uh STAYK FREET ah-VEK dew froh-MAHZH", english: "I would like steak and chips with cheese." },
        { french: "Je ne mange rien. Je suis juste ici pour l'ambiance.", phonetic: "zhuh nuh MAHNZH ryaN. zhuh swee ZHEWST ee-SEE poor lahm-BYAHNS", english: "I'm not eating. I'm just here for the atmosphere." },
        { french: "Donnez-moi le plat le plus cher de la carte.", phonetic: "doh-NAY mwah luh PLAH luh plew SHEHR duh lah KAHRT", english: "Give me the most expensive dish on the menu." }
      ]},
      { speaker: "waiter", french: "Pas de probl\u00e8me ! Le loup de mer grill\u00e9 sans beurre, avec des l\u00e9gumes de saison, serait parfait.", phonetic: "pah duh proh-BLEM! luh LOO duh MEHR gree-YAY sahn BUHR, ah-VEK day lay-GEWM duh seh-ZOHN, suh-REH pahr-FEH", english: "No problem! The grilled sea bass without butter, with seasonal vegetables, would be perfect." },
      { speaker: "customer", prompt: "Ask about the lobster salad \u2014 is it safe for your diet?", correct: 3, options: [
        { french: "Non merci, pas d'entr\u00e9e. Passons au dessert.", phonetic: "nohn mehr-SEE, pah dahn-TRAY. pah-SOHN oh deh-SEHR", english: "No thanks, no starter. Let's go to dessert." },
        { french: "Je voudrais le foie gras, s'il vous pla\u00eet.", phonetic: "zhuh voo-DREH luh fwah GRAH, seel voo PLEH", english: "I would like the foie gras, please." },
        { french: "Les entr\u00e9es ne m'int\u00e9ressent pas du tout.", phonetic: "lay zahn-TRAY nuh man-tay-RESS pah dew TOO", english: "The starters don't interest me at all." },
        { french: "Tr\u00e8s bien pour le plat. Et comme entr\u00e9e, est-ce que la salade de homard est sans gluten et sans produits laitiers ?", phonetic: "treh BYAHN poor luh PLAH. ay kohm ahn-TRAY, ess-kuh lah sah-LAHD duh oh-MAHR eh sahn glew-TEN ay sahn proh-DWEE leh-TYAY?", english: "Very good for the main. And as a starter, is the lobster salad gluten-free and dairy-free?" }
      ]},
      { speaker: "waiter", french: "Oui, la salade de homard est naturellement sans gluten. Je demanderai au chef d'utiliser de l'huile d'olive \u00e0 la place de la vinaigrette.", phonetic: "wee, lah sah-LAHD duh oh-MAHR eh nah-tew-rel-MAHN sahn glew-TEN. zhuh duh-mahn-duh-RAY oh SHEF dew-tee-lee-ZAY duh LWEEL doh-LEEV ah lah PLAHS duh lah vee-neh-GRET", english: "Yes, the lobster salad is naturally gluten-free. I will ask the chef to use olive oil instead of the vinaigrette." },
      { speaker: "customer", prompt: "Thank the waiter \u2014 this restaurant is very accommodating!", correct: 1, options: [
        { french: "Bon, d'accord. Mais ne mettez pas trop d'huile.", phonetic: "bohn, dah-KOHR. meh nuh meh-TAY pah troh DWEEL", english: "OK, fine. But don't put too much oil." },
        { french: "Vous \u00eates vraiment tr\u00e8s accommodant, merci beaucoup ! C'est rare de trouver un restaurant aussi flexible.", phonetic: "voo ZET vreh-MAHN treh ah-koh-moh-DAHN, mehr-SEE boh-KOO! seh RAHR duh troo-VAY uh res-toh-RAHN oh-SEE flek-SEEBL", english: "You are really very accommodating, thank you! It's rare to find such a flexible restaurant." },
        { french: "Dans les autres restaurants, le service est meilleur.", phonetic: "dahn lay ZOHTR res-toh-RAHN, luh sehr-VEES eh meh-YUHR", english: "In other restaurants, the service is better." },
        { french: "Est-ce que le chef peut m'apprendre \u00e0 cuisiner ?", phonetic: "ess-kuh luh SHEF puh mah-PRAHNDR ah kwee-zee-NAY?", english: "Can the chef teach me to cook?" }
      ]}
    ]
  },
  {
    id: 7, title: "The Celebrity Encounter", titleFr: "La rencontre avec une c\u00e9l\u00e9brit\u00e9",
    icon: "\u2B50", colour: "#ad1457",
    context: "You spot a famous French footballer at the next table! You want to discreetly send a dish to the celebrity's table \u2014 without being too obvious.",
    exchanges: [
      { speaker: "waiter", french: "Voici vos entr\u00e9es. Est-ce que tout va bien ?", phonetic: "vwah-SEE voh zahn-TRAY. ess-kuh TOO vah BYAHN?", english: "Here are your starters. Is everything alright?" },
      { speaker: "customer", prompt: "Discreetly ask if that's Kylian Mbapp\u00e9 at the next table.", correct: 2, options: [
        { french: "Oui, tout est parfait, merci.", phonetic: "wee, too teh pahr-FEH, mehr-SEE", english: "Yes, everything is perfect, thank you." },
        { french: "C'est Mbapp\u00e9 ! Je vais prendre un selfie avec lui !", phonetic: "seh em-bah-PAY! zhuh vay PRAHNDR uh sel-FEE ah-VEK LWEE!", english: "That's Mbapp\u00e9! I'm going to take a selfie with him!" },
        { french: "Excusez-moi, discr\u00e8tement... est-ce que c'est Kylian Mbapp\u00e9 \u00e0 la table d'\u00e0 c\u00f4t\u00e9 ? Je ne veux pas le d\u00e9ranger.", phonetic: "ex-kew-ZAY mwah, dees-kret-MAHN... ess-kuh seh kee-LYAHN em-bah-PAY ah lah TAHBL dah koh-TAY? zhuh nuh VUH pah luh day-rahn-ZHAY", english: "Excuse me, discreetly... is that Kylian Mbapp\u00e9 at the next table? I don't want to disturb him." },
        { french: "Le football, c'est ennuyeux. Je pr\u00e9f\u00e8re le tennis.", phonetic: "luh foot-BOHL, seh tahn-nwee-YUH. zhuh pray-FEHR luh teh-NEES", english: "Football is boring. I prefer tennis." }
      ]},
      { speaker: "waiter", french: "Je ne peux ni confirmer ni infirmer l'identit\u00e9 de nos clients. Mais... disons que vous avez bon go\u00fbt !", phonetic: "zhuh nuh PUH nee kohn-feer-MAY nee an-feer-MAY lee-dahn-tee-TAY duh noh klee-YAHN. meh... dee-ZOHN kuh voo zah-VAY BOHN GOO!", english: "I can neither confirm nor deny the identity of our guests. But... let's say you have good taste!" },
      { speaker: "customer", prompt: "Ask if you could send a dessert to that table anonymously.", correct: 0, options: [
        { french: "Serait-il possible d'envoyer un dessert \u00e0 cette table de ma part ? Le fondant au chocolat, de fa\u00e7on anonyme.", phonetic: "suh-reh TEEL poh-SEEBL dahn-vwah-YAY uh deh-SEHR ah SET TAHBL duh mah PAHR? luh fohn-DAHN oh shoh-koh-LAH, duh fah-SOHN ah-noh-NEEM", english: "Would it be possible to send a dessert to that table from me? The chocolate fondant, anonymously." },
        { french: "Pouvez-vous lui demander un autographe ?", phonetic: "poo-VAY voo lwee duh-mahn-DAY uh noh-toh-GRAF?", english: "Can you ask him for an autograph?" },
        { french: "Je vais aller lui parler maintenant.", phonetic: "zhuh vay ah-LAY lwee pahr-LAY maN-tuh-NAHN", english: "I'm going to go talk to him now." },
        { french: "Combien co\u00fbte un maillot de football ici ?", phonetic: "kohm-BYAHN KOOT uh mah-YOH duh foot-BOHL ee-SEE?", english: "How much does a football jersey cost here?" }
      ]},
      { speaker: "waiter", french: "C'est un geste tr\u00e8s \u00e9l\u00e9gant. Le fondant est \u00e0 9,50 \u20ac. Je l'ajouterai \u00e0 votre addition.", phonetic: "seh tuh ZHEST treh ay-lay-GAHN. luh fohn-DAHN eh tah nuhf uhroh san-KAHNT. zhuh lah-zhoo-tuh-RAY ah VOH-truh ah-dee-SYOHN", english: "That's a very elegant gesture. The fondant is \u20ac9.50. I'll add it to your bill." },
      { speaker: "customer", prompt: "Agree, and also ask for your own bill.", correct: 3, options: [
        { french: "C'est trop cher. Tant pis.", phonetic: "seh troh SHEHR. tahn PEE", english: "That's too expensive. Never mind." },
        { french: "Envoyez-lui toute la carte des desserts !", phonetic: "ahn-vwah-YAY lwee TOOT lah KAHRT day deh-SEHR!", english: "Send him the whole dessert menu!" },
        { french: "J'ai chang\u00e9 d'avis.", phonetic: "zhay shahn-ZHAY dah-VEE", english: "I've changed my mind." },
        { french: "Parfait, avec plaisir. Et l'addition pour mon repas aussi, s'il vous pla\u00eet. Je vais payer par carte.", phonetic: "pahr-FEH, ah-VEK pleh-ZEER. ay lah-dee-SYOHN poor mohn ruh-PAH oh-SEE, seel voo PLEH. zhuh vay pay-YAY pahr KAHRT", english: "Perfect, with pleasure. And the bill for my meal too, please. I will pay by card." }
      ]}
    ]
  },
  {
    id: 8, title: "The Power Cut", titleFr: "La panne de courant",
    icon: "\u{1F56F}\uFE0F", colour: "#37474f",
    context: "Halfway through your main course, the entire restaurant loses power! It's pitch dark. Candles come out and chaos follows. How do you handle it?",
    exchanges: [
      { speaker: "waiter", french: "Mesdames et messieurs, ne paniquez pas ! C'est une simple panne de courant. Voici des bougies.", phonetic: "may-DAHM ay meh-SYUH, nuh pah-nee-KAY PAH! seh tewn SAMPL PAHN duh koo-RAHN. vwah-SEE day BOO-zhee", english: "Ladies and gentlemen, don't panic! It's just a power cut. Here are candles." },
      { speaker: "customer", prompt: "React calmly and ask how long the power cut might last.", correct: 1, options: [
        { french: "Au secours ! Je veux partir imm\u00e9diatement !", phonetic: "oh suh-KOOR! zhuh VUH pahr-TEER ee-may-dee-AHT-mahn!", english: "Help! I want to leave immediately!" },
        { french: "Pas de panique ! C'est m\u00eame plut\u00f4t romantique avec les bougies. Savez-vous combien de temps la panne va durer ?", phonetic: "pah duh pah-NEEK! seh MEM plew-TOH roh-mahn-TEEK ah-VEK lay BOO-zhee. sah-VAY voo kohm-BYAHN duh TAHN lah PAHN vah dew-RAY?", english: "No panic! It's actually quite romantic with the candles. Do you know how long the power cut will last?" },
        { french: "Je ne peux pas manger dans le noir. Je suis tr\u00e8s d\u00e9\u00e7u.", phonetic: "zhuh nuh PUH pah mahn-ZHAY dahn luh NWAHR. zhuh swee treh day-SEW", english: "I can't eat in the dark. I'm very disappointed." },
        { french: "Est-ce que le wifi fonctionne encore ?", phonetic: "ess-kuh luh wee-fee fohnk-SYOHN ahn-KOHR?", english: "Does the wifi still work?" }
      ]},
      { speaker: "waiter", french: "L'\u00e9lectricien est en route. Le chef peut continuer \u00e0 pr\u00e9parer les plats au gaz.", phonetic: "lay-lek-tree-SYAHN eh tahn ROOT. luh SHEF puh kohn-tee-NEW-AY ah pray-pah-RAY lay PLAH oh GAHZ", english: "The electrician is on the way. The chef can continue to prepare dishes on gas." },
      { speaker: "customer", prompt: "Joke about the situation and order dessert.", correct: 0, options: [
        { french: "Un d\u00eener aux chandelles, c'est exactement ce que je voulais ! Le souffl\u00e9 au Grand Marnier est-il toujours disponible ?", phonetic: "uh dee-NAY oh shahn-DEL, seh teg-zahk-tuh-MAHN suh kuh zhuh voo-LEH! luh soo-FLAY oh GRAHN mahr-NYAY eh TEEL too-ZHOOR dees-poh-NEEBL?", english: "A candlelit dinner is exactly what I wanted! Is the Grand Marnier souffl\u00e9 still available?" },
        { french: "Je voudrais me plaindre au directeur.", phonetic: "zhuh voo-DREH muh PLAHNDRE oh dee-rek-TUHR", english: "I would like to complain to the director." },
        { french: "J'ai peur du noir. Pouvez-vous appeler un taxi ?", phonetic: "zhay PUHR dew NWAHR. poo-VAY voo ahp-LAY uh tak-SEE?", english: "I'm afraid of the dark. Can you call a taxi?" },
        { french: "La nourriture est froide. Je refuse de payer.", phonetic: "lah noo-ree-TEWR eh FRWAHD. zhuh ruh-FEWZ duh pay-YAY", english: "The food is cold. I refuse to pay." }
      ]},
      { speaker: "waiter", french: "Absolument ! Le souffl\u00e9 est cuit au four \u00e0 gaz. Et le caf\u00e9 sera offert par la maison ce soir.", phonetic: "ab-soh-lew-MAHN! luh soo-FLAY eh KWEE oh FOOR ah GAHZ. ay luh kah-FAY suh-RAH oh-FEHR pahr lah meh-ZOHN suh SWAHR", english: "Absolutely! The souffl\u00e9 is baked in a gas oven. And coffee will be on the house tonight." },
      { speaker: "customer", prompt: "Accept with humour \u2014 this will be a memorable evening!", correct: 2, options: [
        { french: "Le caf\u00e9 seulement ? Ce n'est pas assez.", phonetic: "luh kah-FAY suhl-MAHN? suh neh pah zah-SAY", english: "Just coffee? That's not enough." },
        { french: "Non merci, je ne bois pas de caf\u00e9 le soir.", phonetic: "nohn mehr-SEE, zhuh nuh BWAH pah duh kah-FAY luh SWAHR", english: "No thanks, I don't drink coffee in the evening." },
        { french: "Merci, c'est tr\u00e8s aimable ! Cette soir\u00e9e aux chandelles sera inoubliable. Le service est excellent malgr\u00e9 les circonstances !", phonetic: "mehr-SEE, seh treh zeh-MAHBL! set swah-RAY oh shahn-DEL suh-RAH ee-noo-blee-AHBL. luh sehr-VEES eh tex-seh-LAHN mahl-GRAY lay seer-kohn-STAHNS!", english: "Thank you, that's very kind! This candlelit evening will be unforgettable. The service is excellent despite the circumstances!" },
        { french: "Est-ce que les lumi\u00e8res vont revenir bient\u00f4t ?", phonetic: "ess-kuh lay lew-MYEHR vohn ruh-vuh-NEER byaN-TOH?", english: "Are the lights going to come back soon?" }
      ]}
    ]
  }
];

/* ── REVIEW MATCHING DATA ── */
const REVIEW_MATCH_DATA = {
  intro: "Four customers visited Le Grand V\u00e9four last week. Each left a review online. Read the clues about each character, then match each review to the correct person.",
  characters: [
    {
      name: "Alex", emoji: "\u{1F621}", colour: "#c62828",
      tagline: "Plus jamais ce restaurant !",
      taglineEn: "Never again at this restaurant!",
      taglinePhonetic: "plew zhah-MEH suh res-toh-RAHN!",
      description: "Alex had booked a table two weeks in advance for his parents' wedding anniversary. He cares about punctuality and value for money.",
      descriptionFr: "Alex avait r\u00e9serv\u00e9 une table deux semaines \u00e0 l'avance pour l'anniversaire de mariage de ses parents. Il tient beaucoup \u00e0 la ponctualit\u00e9 et au rapport qualit\u00e9-prix.",
      descriptionPhonetic: "ah-LEX ah-VEH ray-zehr-VAY ewn TAHBL duh suh-MEN ah lah-VAHNS poor lah-nee-vehr-SEHR duh mah-RYAHZH duh say pah-RAHN"
    },
    {
      name: "Sophie", emoji: "\u{1F929}", colour: "#6a1b9a",
      tagline: "Une soir\u00e9e magique !",
      taglineEn: "A magical evening!",
      taglinePhonetic: "ewn swah-RAY mah-ZHEEK!",
      description: "Sophie is a food blogger who photographs every dish. She loves creative presentations and has a sweet tooth. She came for the new dessert menu.",
      descriptionFr: "Sophie est une blogueuse culinaire qui photographie chaque plat. Elle adore les pr\u00e9sentations cr\u00e9atives et elle est tr\u00e8s gourmande. Elle est venue pour le nouveau menu de desserts.",
      descriptionPhonetic: "soh-FEE eh tewn bloh-GUHZ kew-lee-NEHR kee foh-toh-grah-FEE shahk PLAH"
    },
    {
      name: "Jean", emoji: "\u{1F9D0}", colour: "#1565c0",
      tagline: "Correct, mais peut mieux faire.",
      taglineEn: "Decent, but could do better.",
      taglinePhonetic: "koh-REKT, meh puh MYUH FEHR",
      description: "Jean is a retired chef who judges every restaurant by professional standards. He pays attention to cooking techniques and seasoning. He never gets emotional.",
      descriptionFr: "Jean est un chef cuisinier \u00e0 la retraite qui juge chaque restaurant selon des crit\u00e8res professionnels. Il fait tr\u00e8s attention aux techniques de cuisson et \u00e0 l'assaisonnement.",
      descriptionPhonetic: "ZHAHN eh tuh SHEF kwee-zee-NYAY ah lah ruh-TRET kee ZHEWZH shahk res-toh-RAHN suh-LOHN day kree-TEHR proh-feh-syoh-NEL"
    },
    {
      name: "Pauline", emoji: "\u{1F60A}", colour: "#2e7d32",
      tagline: "Un rapport qualit\u00e9-prix excellent !",
      taglineEn: "Excellent value for money!",
      taglinePhonetic: "uh rah-POHR kah-lee-TAY PREE ex-seh-LAHN!",
      description: "Pauline is a university student on a tight budget. She saved up for weeks to eat here. She's impressed by anything above average and always checks prices first.",
      descriptionFr: "Pauline est une \u00e9tudiante avec un budget limit\u00e9. Elle a \u00e9conomis\u00e9 pendant des semaines pour manger ici. Elle regarde toujours les prix en premier.",
      descriptionPhonetic: "poh-LEEN eh tewn ay-tew-DYAHNT ah-VEK uh bewd-ZHEH lee-mee-TAY"
    }
  ],
  reviews: [
    {
      authorIndex: 0, stars: 1,
      french: "Une \u00e9toile, et encore, c'est g\u00e9n\u00e9reux ! Nous avons attendu quarante-cinq minutes pour notre table alors que j'avais r\u00e9serv\u00e9 deux semaines \u00e0 l'avance. Le serveur n'a m\u00eame pas pr\u00e9sent\u00e9 d'excuses. Et quand l'addition est arriv\u00e9e, les prix \u00e9taient bien plus \u00e9lev\u00e9s que ceux affich\u00e9s sur le site internet. Pour l'anniversaire de mariage de mes parents, c'\u00e9tait une catastrophe totale. Le rapport qualit\u00e9-prix est absolument scandaleux.",
      phonetic: "ewn ay-TWAHL, ay ahn-KOHR, seh zhay-nay-RUH! noo zah-VOHN ah-tahn-DEW kah-RAHNT sank mee-NEWT poor NOH-truh TAHBL ah-LOHR kuh zhah-VEH ray-zehr-VAY duh suh-MEN ah lah-VAHNS",
      english: "One star, and even that is generous! We waited forty-five minutes for our table even though I had booked two weeks in advance. The waiter didn't even apologise. And when the bill arrived, the prices were much higher than those shown on the website. For my parents' wedding anniversary, it was a total disaster. The value for money is absolutely outrageous."
    },
    {
      authorIndex: 1, stars: 5,
      french: "Cinq \u00e9toiles sans h\u00e9sitation ! Le fondant au chocolat noir \u00e9tait une \u0153uvre d'art \u2014 la pr\u00e9sentation avec les petites fleurs comestibles \u00e9tait magnifique, et j'ai pris au moins dix photos ! Le souffl\u00e9 au Grand Marnier \u00e9tait a\u00e9rien et dor\u00e9 \u00e0 la perfection. Je suis venue sp\u00e9cialement pour le nouveau menu de desserts et je n'ai pas \u00e9t\u00e9 d\u00e9\u00e7ue. Chaque plat \u00e9tait digne d'un magazine gastronomique.",
      phonetic: "sank ay-TWAHL sahn ay-zee-tah-SYOHN! luh fohn-DAHN oh shoh-koh-LAH NWAHR ay-TEH ewn UHVR DAHR",
      english: "Five stars without hesitation! The dark chocolate fondant was a work of art \u2014 the presentation with the little edible flowers was magnificent, and I took at least ten photos! The Grand Marnier souffl\u00e9 was light and golden to perfection. I came specifically for the new dessert menu and I was not disappointed. Every dish was worthy of a food magazine."
    },
    {
      authorIndex: 2, stars: 3,
      french: "Trois \u00e9toiles. Le filet de b\u0153uf \u00e9tait cuit correctement \u2014 \u00e0 point, comme demand\u00e9 \u2014 mais la sauce au poivre manquait de caract\u00e8re. L'assaisonnement du velout\u00e9 de champignons \u00e9tait un peu fade ; il aurait b\u00e9n\u00e9fici\u00e9 d'une pinc\u00e9e de noix de muscade. La technique de cuisson du loup de mer \u00e9tait ma\u00eetris\u00e9e, mais la pr\u00e9sentation restait classique. Le service \u00e9tait professionnel, sans plus. Un restaurant honn\u00eate, mais le chef a encore des progr\u00e8s \u00e0 faire.",
      phonetic: "trwah zay-TWAHL. luh fee-LEH duh BUHF ay-TEH KWEE koh-rek-tuh-MAHN \u2014 ah PWAHN, kohm duh-mahn-DAY",
      english: "Three stars. The beef fillet was cooked correctly \u2014 medium, as requested \u2014 but the pepper sauce lacked character. The seasoning of the mushroom velout\u00e9 was a little bland; it would have benefited from a pinch of nutmeg. The sea bass cooking technique was mastered, but the presentation remained classic. The service was professional, nothing more. An honest restaurant, but the chef still has room for improvement."
    },
    {
      authorIndex: 3, stars: 4,
      french: "Quatre \u00e9toiles ! Pour une \u00e9tudiante habitu\u00e9e aux sandwiches et aux p\u00e2tes, ce restaurant \u00e9tait incroyable ! Le menu \u00e0 prix fixe \u00e0 35 \u20ac avec entr\u00e9e, plat et dessert \u00e9tait une tr\u00e8s bonne affaire compar\u00e9 aux autres restaurants du quartier. Le carpaccio de b\u0153uf \u00e9tait d\u00e9licieux et tr\u00e8s copieux pour le prix. Le seul b\u00e9mol : le caf\u00e9 \u00e0 2,50 \u20ac, un peu cher quand on est \u00e9tudiante, mais dans l'ensemble, j'ai eu l'impression de manger comme une reine sans me ruiner.",
      phonetic: "KAH-truh zay-TWAHL! poor ewn ay-tew-DYAHNT ah-bee-tew-AY oh sahnd-WEESH ay oh PAHT",
      english: "Four stars! For a student used to sandwiches and pasta, this restaurant was incredible! The set menu at \u20ac35 with starter, main and dessert was a very good deal compared to other restaurants in the area. The beef carpaccio was delicious and very generous for the price. The only downside: the coffee at \u20ac2.50, a bit expensive when you're a student, but overall, I felt like I was eating like a queen without breaking the bank."
    }
  ]
};
