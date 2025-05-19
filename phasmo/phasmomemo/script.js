document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("phasmo-memo");
    const section = document.querySelector("section");

    const ghosts = [
      {
        name: "Esprit",
        description: ["• L'encens l'empêche de chasser pendant 180 secondes (3 minutes) (au lieu de 90)"],
        chasse: "A partir de 50% de santé mentale",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accélération max)",
        preuves: ["EMF niveau 5", "Spirit Box", "Écriture fantomatique"]
      },
      {
        name: "Spectre",
        description: ["• Ne peux pas marcher dans le sel et ne laisse donc pas d'empreintes de pas.", "• Peux se téléporter vers un joueur aléatoirement. Cela créer un EMF 2 (ou 5) à l'endroit ciblé."],
        chasse: "A parir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accélération max)",
        preuves: ["EMF niveau 5", "Spirit Box", "Projecteur D.O.T.S"]
      },
      {
        name: "Fantôme",
        description: ["• Peux choisir de se déplacer vers un joueur aléatoirement. Cela créer un un EMF 2 à son point d'arrivée.", "• N'apparait pas sur les photos et celles-ci ne sont pas brouillées.", "• Le prendre en photo pendant un événement paranormal le fera disparaître mais l'événement continuera.", "• Clignotement lent, il est invisible pendant minimum 1 seconde contre 0,3 à 1 seconde pour les autres entités", "• Être en ligne de vue à moins de 10 mètres du Fantôme pendant les manifestations et les chasses draine la santé mentale de 0,5%/s", "• Prendre un Fantôme en photo pendant une chasse ne le fait pas disparaître ni arrêter la chasse."],
        chasse: "A partir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 ms (accélération max)",
        preuves: ["Spirit Box", "Ultraviolet", "Projecteur D.O.T.S"]
      },
      {
        name: "Poltergeist",
        description: ["• Peut lancer plusieurs objets en même temps. Cela créer un EMF 2 à sa postion actuelle.", "• Si le joueur est proche qaund il fait son pouvoir, il perdra 2% de santé mentale par objet lancé.", "• Lance les objets 2x plus fort que les autres entités.", "• Pendant une chasse, il a 100% de chances de lancer un objet toute les demi-secondes au lieux de 50% pour les autres fantômes.", "• Il fera un EMF 2 ou 3 en faisant son pouvoir et par objets jetés.", "• Il est facile de le trouver aussi avec le graphique de l'activit dans le camion, si on y voit un pic de 0 à 10 sans chasse ni événement."],
        chasse: "A partir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accélération max)",
        preuves: ["Écriture fantomatique", "Ulraviolet", "Spirit Box"]
      },
      {
        name: "Banshee",
        description: ["• Cible un joueur au hasard au début de la partie, et change de cible qu'une fois qu'il meurt ou quitte la partie.", "• Chasse uniquement le joueur ciblé s'il se trouve dans la maison, sinon chasse n'importe qu'elle joueur comme une entité normale.", "• A 67% de chances de se déplacer vers sa cible en dehors d'une chasse (ne fonctionne pas à travers les étages, sauf sur Point Hope ou si l'entité est à la cave ou grenier de la Bleasdale).", "• Le joueur ciblé pert 15% de santé de santé mentale lors d'un événement chantant s'il entre en contact avec la Banshee (contre 10% pour les autres).", "• A plus de chance de réaliser un événement chantant.", "• A 33% de chance d'effectuer un cri spéciales au micro parabolique.", "• Ne peut pas changer de se salle favorite sauf avec le voeu d'être sain d'esprit de la patte de singe (monkey paw)"],
        chasse: "A partir de 50% (santé mentale de la cible SEULEMENT)",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accélération max)",
        preuves: ["EMF 5", "Orbe fantomatique", "Ultraviolet"]
      },
      {
        name: "Djinn",
        description: ["• Ne peux pas éteindre directement le disjoncteur (peut toujours le faire sauter en allumant trop de lumière).", "• Si le disjoncteur est allumé, il peut drainer 25% de saté mentale à tous les joueurs à moins de 3 mètres ou dans la même pièce. Cela créer un EMF 2 à 5 au disconcteur sans l'éteindre.", "• Le drain de santé mentale ne fais pas d'EMF.", "• Il ne peut pas faire ses capacités si le courant est éteints ou cassé.", "• Il n'accélère pas mais passe à sa vitesse de 2.5 m/s instantanément à la vue du joueur puis accélèrera progressivement à sa vitesse maximale de 2.8 m/s. Et il ralenti à -2.5 mètres du joueur ou si le pert de vue."],
        chasse: "A partir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accélèration max)\n2.5 m/s (disjoncteur allumé et joueur visible à plus de 3 mètres)",
        preuves: ["EMF 5", "Ultraviolet", "Températures glaciales"]
      },
      {
        name: "Cauchemar",
        description: ["• Ne peut pas allumer les lumières mais peut allumer les radios, les télévisions, les odinateurs et le disjoncteur.", "• *selon les devs", "• Peux éteindre une lumière instantanément qu'un joueur vient d'allumer à moins de 4 mètres d'elle. Le joueur ne peut pas forcer ce pouvoir en spammant les lumières, il faut attendre un minimum de 10 secondes entre chaque touche de l'intérrupteur ou qu'un autre joueur éteigne la lumière.\n⚠ Attention, les entités peuvent éteidre un lumière juste après qu'un joueur l'allume, faites attention au coïncidences.", "• Le cauchemar le fera plus fréquemment.", "• A plus de chances de vouloir éteindre les lumières en tant qu'intéraction.", "• A plus de chance de réalisé un événement brisant les lumières.", "• N'hésitera pas à changer de salle et à chasser d'une autre pièce si sa pièce favorite est allumée.", "• Le cauchemar chasse à 40% dans une pièce avec l'intérupteur allumé, même sans courant et/ou ampoule cassée."],
        chasse: "A partir de 60% si l'entité est dans le noir / 40% si l'entité est dans la lumière",
        vitesse: "1.7 m/s (base)\n2.8 m/s (vitesse max)",
        preuves: ["Spirit Box", "Orbe fantomatique", "Ecriture fantomatique"]
      },
      {
        name: "Revenant",
        description: ["• Très lent lorsqu'il ne sait pas où est le joueur, très rapide lorsqu'il sait où est le joueur.", "• S'il perd la position du joueur, il ralentira progressivement jusqu'à sa vitesse initiale.", "• Ralenti quand on brûle l'encens avant de reprendre  sa vitesse de base ou son accélération s'il sait où est un joueur."],
        chasse: "A partir de 50%",
        vitesse: "1 m/S (de base)\n3 m/s (lorsqu'un joueur est repéré)",
        preuves: ["Orbe fantomatique", "Ecriture fantomatique", "Températures glaciales"]
      },
      {
        name: "Ombre",
        description: ["• A tendance à peu intéragir.", "• Ne peut pas intéragir, souffler les bougies, attaquer, écrire, bouger d'objets ou de portes si un joueur se trouve dans sa pièce. Elle peut toujours se déplacer ou effectuer un événement cependant.", "• Ne peut pas faire d'EMF 3 quand on est dans sa salle.", "• A beaucoup plus de chances d'effectuer l'événement paranormal de la boule d'air/souffle.", "• Si manifestation, elle a beacoup plus de chances d'utiliser la forme d'ombre.", "• A une chance d'apparaître sous forme d'ombre en utilisant le cercle d'invocation, la boîte à musique et la patte de singe.", "• Avec 100% de santé mentale, l'Ombre a 0% de chances de faire un événement. La probabilité augmente de 2% par % de santé mentale perdu.", "• Ne peut pas chasser si un joueur se trouve dans sa pièce."],
        chasse: "A partir 35%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accelération max).",
        preuves: ["Ultraviolet", "Ecriture fantomatique", "Températures glacicales"]
      },
      {
        name: "Démon",
        description: ["• Le délai minimum entre 2 chasses normales et de 20 secondes (au lieu de 25)sans encens.", "• L'encens l'empêche de chasser pendant 60 secondes (au lieu de 90).", "• Le crucifix a une portée multipliée par x1.5 donc T1 4.5m T2 6m T3 7.5m.", "• Il aura tendance à chasser plus fréquemment."],
        chasse: "A partir de 100% (pouvoir)\nA partir de 70%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accelération max).",
        preuves: ["Ultraviolet", "Ecriture fantomatique", "Températures glacicales"]
      },
      {
        name: "Yurei",
        description: ["• Le pouvoir du Yurei est de fermer UNE porte autour de lui sans événement paranormal.", "• Il peut faire une double intéraction sur la porte (pouvoir), que vous pouvez visualiser avec l'EMF T3.", "• Le Yurei vous enlèvera 15% de santé mentale en faisant son pouvoir si vous êtes proches de lui.", "• Brûler un encens dans la maison, en plus d'empêcher les chasses et d'augmenter temporairement l'activité, le fera retourner dans sa pièce favorite et le piègera 90 secondes.", "⚠ Cela ne sert pas à prouver le Yurei mais plutôt à l'invalidé s'il sort de sa salle avant ce timer! Toutes les entités peuvent ne pas sortir de la salle durant se temps."],
        chasse: "A partir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accelération max)",
        preuves: ["Orbe fantomatique", "Températures glaciales", "Projecteur D.O.T.S"]
      },
      {
        name: "Oni",
        description: ["• A tendance à beaucoup intéragir, surtout avec des joueurs à proximité.", "• Clignotement rapide, il est visible plus souvent qu'invisible pendant les chasses. Ne peut pas être invisible plus de 0.5s.", "• Ne peut pas effectuer l'événement du boule d'air/souffle.", "• A tendance à utiliser la forme complète pour les événements paranormaux.", "• Enlève 20% de santé mentale au lieu de 10% lors d'un événement si le joueur ciblé entre en collision avec lui."],
        chasse: "A partir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accelération max)",
        preuves: ["EMF 5", "Températures glaciales", "Projecteur D.O.T.S"]
      },
      {
        name: "Yokai",
        description: ["• Le yokai attaque à partir de 80% de santé mentale grâce à son pouvoir qui peut s'activer si vous parler à côté de lui et sera du coup proche du joueur à se moment là.", "• Il sera plus actif si vous parlez à côté de lui.", "• En chasse, il ne vous entendra pas ni ne détectera votre matériel électronique ou votre radio au-delà de 2.5 à 3m et vous perdra très facilement.", "• Avec la boîte à musique, il peut commencer à se manifester plus proche de la boîte que les autres entités.", "• La légende raconte que le Yokai est le seul à ne pas entendre le cri du dindo !🦃"],
        chasse: "A partir de 80% (puvoir)\nA partir de 50%",
        vitesse: "1.7 m/s (base)\n 2.8 m/s (accelération max)",
        preuves: ["Spirit Box", "Orbe fantomatique", "Projecteur D.O.T.S"]
      },
      {
        name: "Hantu",
        description: ["• Ne peux pas allumer le disjoncteur.", "• Si le disjoncteur est éteint, il génère un souffle glacial durant la chasse dans toutes les pièces. Les joueurs décédés ne peuvent pas voir ce souffle.", "• Il n'accélère pas à la vue du joueur, sa vitesse étant basée sur la température des pièces qu'il traverse. (Attention les entités refroidissent la salle où elles se trouvent, même en chasse."],
        chasse: "A partir de 50%",
        vitesse: "1.4 m/s (température supérrieur à 15°C)\n1.75 m/s (température entre 15°C et 12°C)\n2.1 m/s (tempétature entre 12°C et 9°C)\n2.3 m/s (température entre 9°C et 6°C)\n2.4 m/s (température entre 6°C et 3°C)\n2.5 m/s (température entre 3°C et 0°C)\n2.7 m/s (température inférieur à 0°C)\nN'accélère pas pendant la chasse (Sauf changement de température)",
        preuves: ["Ultraviolet", "Orbe fantomatique", "Températures glaciales"]
      },
      {
        name: "Goryo",
        description: ["• Ne peux pas changer de pièce favorite (sauf si on utilise le voeu de santé mentale à la patte de singe(monkey paw)).", "• Ne peut QUE faire des courts déplacements avec une distance maximale de 3m par déplacement (il peut cependant en enchainer plusieurs et parcourir de plus longues distances, même si cela reste tout de même assez rare). Cest doncpour cela qu'il est rare qu'un Goryo se trouve loin de sa salle favorite.", "• Ses D.O.T.S ne sont visibles qu'à la caméra et si personne ne se trouve dans sa pièce, cependant les D.O.T.S restent visibles si nous entrons dans sa pièce alors qu'il les avait déjà commencés. Il ne pourra pas entrer en phase D.O.T.S si un joueur est présant dans sa pièce."],
        chasse: "A partir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accelération max)",
        preuves: ["EMF 5", "Ultraviolet", "Projecteur D.O.T.S (Obligatoire)"]
      },
      {
        name: "Myling",
        description: ["• Ses bruit de de pas ne sont audibles qu'à moins de 12m au lieu de 20m pour un fantôme normal (De façon prograssive).", "⚠ Attention, le matériel électronique ne clignote pas si vous n'êtes pas au même étage que lui mais vous pouvais entendre ses pas au-dessus/dessous de vous.", "• Produit des sons paranormaux plus fréquemment au micro parabolique.", "• Les sons du Myling seront aussi moins audible durant les chasses, comme par exemple son chant (si le fantôme en a un)"],
        chasse: "A partir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accelération max)",
        preuves: ["EMF 5", "Ultraviolet", "Ecriture fantomatique"]
      },
      {
        name: "Onryo",
        description: ["• Tente une chasse dans un délai de 1 à 6 secondes chaque fois qu'il souffle 3 flammes. Les flammes empêchant les chasses et celles soufflées pendant les chasses comptent aussi.", "• S'il tente une chasse à moins de 4m d'une flamme, il soufflera cette flame au lieu de chasser. La flamme a toujours la priorité sur le crucifix pour empêcher ses chasses.", "• Il peut brûler le crucifix s'il chasse en dehors du rayon d'action de la flamme.\n\n• Le chandelier compte comme une seule flamme malgré les 3 bougies.", "• Les bougies allumées dans la maison compte pour le pouvoir de l'Onryo.", "• Les bougies de la chanpelle de Sunny Meodows comptent."],
        chasse: "A partir de 100% (pouvoir)\nA partir de 60% (base)",
        vitesse: "1.7 m/s (base)|n2.8 m/s (accéleration max)",
        preuves: ["Spirit Box", "Orbe fantomatique", "Températures glaciales"]
      },
      {
        name: "Les Jumeaux",
        description: ["• N'est en ralité qu'une seul entité.", "• A la possibilité de faire une double intéraction décalée de 0.5s, l'une à moins de 3m de sa position et l'autre jusqu'à 16m.", "• A 50% de chances de chasser depuis sa position actuelle (jumeau lent) et 50% de chances depuis l'endroit où la dernière intéraction à disctance s'est produite (jumeau rapide).", "• Au tableau d'activité il fera une courbe avec une cassure sans plat au millieu ou monté plate pais une période de 2s au lieu d'1s.", "• Le crucifix ne fonctionne que sur le vrai jumeau, le faux jumeau peut chasser depuis la zone de l'intéraction à distance.", "• Il a 50% de chance de choisir l'une ou l'autre entité et peut donc être plusieurs fois la même."],
        chasse: "A partir de 50%",
        vitesse: "1.5 m/s (base jumeau lent)\n2.5 m/s (accelération max jumeau lent)\n1.9 m/s (base jumeau rapide)\n(3.1 m/s (accelération max jumeau rapide)",
        preuves: ["EMF 5", "Spirit Box", "Températures glaciales"]
      },
      {
        name: "Raiju",
        description: ["• Pendant les chasses, s'il se trouve proche d'un appareil éléctroniques actif un même étage, sa vitesse augmente. Ceci dans un rayon de 6m pour une petite map, 8m pour une moyenne et 10m pour une grande.", "• Pertube Les appareils éléctroniques jusqu'à 15m au lieu de 10 pendant les manifestations et chasses. Attention de ne pas confondre donc avec un Myling.", "• Il ira à 2.5 m/s instantanément et reprendra un vitesse normale en dehors du rayon d'un objet éléctronique allumé.", "• Il n'ira pas au dessus de 2.5 m/s en voyant le joueur s'il est proche d'un objet allumé mais accélèrera jusqu'à 2.8 m/s à la vue du joueur en dehors de se rayon.", "• La télé, les radios, les lampes de la maison et le disjoncteur ne sont pas pris en compte pour son pouvoir.", "•La lampe de poche allumé dans votre main, dans votre ceinture ou au slot et pris en compte en permance.", "• Tous les équipements dit éléctronique allumés sont pris en compte pour son pouvoir, posés au sol ou en main."],
        chasse: "A partir de 50% (base)\nA partir de 65% (si un appareil éléctronique actif est à proximité)",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accélération max)\n2.5 m/s (à proximité d'un appareil éléctronique actif)",
        preuves: ["EMF 5", "Orbe fantomatique", "Projecteur D.O.T.S"]
      },
      {
        name: "Obake",
        description: ["• Possède 25% de chances de ne pas laisse d'empreintes digitales.", "• Possède 16.7% de chance de laisser son empreinte à 6 doigts, à 5 sur le clavier et à 2 sur l'intérupteur.", "• Il peut réduire le temps restant d'affichage par 2 de ses empreintes à tous moment.", "• Il changera de skin à chaque clignotement lors d'une chasse tous les 12, 27, 39, 54, 62, 80, 105, 120 et 132eme clignotements (en commençant par le premier clignotement) d'une chasse.", "• L'Obake ne se transformera pas du tout si la chasse se termine prématurément (après que l'entité ait tué un joueur ou lorsque tous les joueurs quittent le lieu d'enquête), car il n'aura pas le temps d'atteindre le 12e clignotement.", "• Il ne peut pas changer de sexe et Sadako pourra changer en ses 3 formes différentes durant la chasse.", "• Les joueurs décédés ne peuvent pas voir cette transformation.", "• Change de forme au minimum 1 fois par chasse."],
        chasse: "A partir de 50%",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accélération max)",
        preuves: ["EMF 5", "Ultraviolet (obligatoire)", "Orbe fantomatique"]
      },
      {
        name: "Le Mimic",
        description: ["• Copie une autre entité et ses caractéristiques toutes les 30 à 120 secondes en dehors des chasses.", "• Ne copie pas les preuves des entités imitées mais toutes caratéristiques, pouvoirs et comportements.", "• Si le Thayé est imité, il aura un âge aléatoire et ne viellira pas.", "• Possède orbes fantomatiques, même sur une difficulté à 0 preuves.", "• Ile ne change pas d'entité en chasse.", "• Il ne change pas de skin en changeant d'entités.", "• Il peut se mettre en état neutre (quand il se copie lui même, ou même le joueur, même si ce n'est pas vraiment le cas) et sera inactif à se moment là.", "• Il est le seul à pouvoir laisser une empreinte sur la porte d'entrée."],
        chasse: "A partir de 50%\nMais peut chasser en fonction des pouvoirs des entités copiées.",
        vitesse: "1.7 m/s (base)\n2.8 m/s (accélération max)\nVariable en fonction de l'entité copiée.",
        preuves: ["Spirit Box", "Ultraviolet", "Températures glaciales", "Orbe fantomatique (fausse preuve obligatoire)"]
      },
      {
        name: "Moroï",
        description: ["• Maudit le joeur recevant une réponse à la Spirit Box ou un chuchotement au micro parabolique.", "• Un joueur maudit pert 2 fois plus vite sa santé mentale donc 14% en solo et 28%/min en multi même dans la lumière (petite map et en pro minimum).", "• La malédiction se soigne en prenant une pillule calmante.", "• L'encens le désoriente 7.5s au lieu de 5 pendant une chasse.", "• Il accélère en temps réel.", "• Prendre des pillules le fait ralentir hors et pendant la chasse.", "• La malédiction n'est effective que dans la maison.", "• Ressuciter un joueur annule la malédiction s'il était maudit."],
        chasse: "A partir de 50%",
        vitesse: "1.5 m/s (base avec plus de 50% de santé mentale)\n+0.8 m/s tous les 5% de santé mentale perdus en dessous de 45%\n2.25 m/s (base avec moins de 5% de santé mentale)\n3.71 m/s (accélération max)",
        preuves: ["Spirit Box (obligatoire)", "Ecriture fantomatique", "Températures glaciales"]
      },
      {
        name: "Deogen",
        description: ["• Le Deogen sait en permanence où sont les joueurs avec ou sans équipement donc impossible de se cacher." , "• 33% de chance de faire un cri spécial à la Spirit Box à moins de 1m de lui.", "• Il est très rapide loin du joueur même sans le voir et devient très lent à proximité du joueur.", "• Il a plus de chance de mettre l'écriture et les D.O.T.S.", "• Il clignote aussi très vite comme l'Oni."],
        chasse: "A partir de 40%",
        vitesse: "3 m/s (au delà de 6m)\n3 m/s jusqu'à 0.4 m/s (entre 6m et 2.5m décélération)\n0.4 m/s (en dessous de 2.5m)",
        preuves: ["Spirit Box (obligatoire)", "Ecriture fantomatique", "Projecteur D.O.T.S"]    
      },
      {
        name: "Thayé",
        description: ["• Au bout de 1 à 2 minutes, il tente de viellir. Si un joueur se trouve dans sa pièce, son âge augmentera de 1. Sinon il attend 30 secondes avant de tenter à nouveau.", "• 2x plus de chance de faire des intéractions à son âge initial que les autres entités, devient de moins en moins actif lorsque son âge augmente et fera moins de 50% d'itéraction à son âge max.", "• A plus de chance d'intéragir avec le livre d'écriture et les D.O.T.S.", "• Il est possible de savoir s'il vielli grâce à la Ouija. La question quel âge avez vous ? donnera l'âge actuel de l'entité.", "• Il vieillira jusqu'à 10 fois maximum par partie.", "• Le Thayé n'accélére pas pendant la chasse. Sa vitesse étant basée sur son âge, elle n'est pas influencée par la vue du joueur."],
        chasse: "A partir de 75% (âge initial)\n-6% par âge ajouté\nA partir de 15% (âge +10)",
        vitesse: "2.75 m/s (âge initial)\n-0.175 m/s par âge ajouté\n1 m/s (âge max)\nN'accélére pas pendant la chasse",
        preuves: ["Orbe fantomatique", "Ecriture fantomatique", "Projecteur D.O.T.S"]
      }
    ];

    function fadeOut(element, duration = 300) {
      return new Promise((resolve) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = 0;
        setTimeout(() => resolve(), duration);
      });
    }

    function fadeIn(element, duration = 300) {
      return new Promise((resolve) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = 1;
        setTimeout(() => resolve(), duration);
      });
    }

    function showGhostDetails(ghost) {
      const details = document.getElementById("ghost-details");
      details.innerHTML = "";

      const title = document.createElement("h3");
      title.textContent = ghost.name;
      title.style.color = "white";
      title.style.fontSize = "2rem";
      details.appendChild(title);

      const descList = document.createElement("ul");
      descList.style.color = "#36ff00";
      descList.style.fontSize = "1.5rem";
      descList.style.marginTop = "3%"
      ghost.description.forEach((desc) => {
        const li = document.createElement("li");
        li.textContent = desc;
        li.style.marginBottom = "15px";
        descList.appendChild(li);
      });
      details.appendChild(descList);

      const characteristics = document.createElement("div");
      characteristics.style.display = "flex";
      characteristics.style.justifyContent = "space-around";
      characteristics.style.marginTop = "10px";

      ["chasse", "vitesse"].forEach((key) => {
        const block = document.createElement("div");
        const title = document.createElement("h4");
        title.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        title.style.color = "#ff0000";
        title.style.fontSize = "1.5rem";
        title.style.marginTop = "4%"
        const text = document.createElement("p");
        text.textContent = ghost[key];
        text.style.color = "white";
        block.appendChild(title);
        block.appendChild(text);
        characteristics.appendChild(block);
      });
      details.appendChild(characteristics);

      const evidence = document.createElement("p");
      evidence.textContent = "preuves : " + ghost.preuves.join(", ");
      evidence.style.color = "#00dcff";
      evidence.style.marginTop = "4%";
      evidence.style.fontSize = "1.5rem"
      details.appendChild(evidence);
    }

    button.addEventListener("click", async () => {
      await fadeOut(section);

      section.innerHTML = "";
      section.style.opacity = 0;

      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.flexWrap = "wrap";
      container.style.gap = "20px";
      section.appendChild(container);

      ghosts.forEach((ghost, index) => {
        const ghostBtn = document.createElement("button");
        ghostBtn.textContent = `${index + 1}. ${ghost.name}`;
        ghostBtn.style.fontFamily = "'Orbitron', sans-serif";
        ghostBtn.style.fontSize = "1.3rem";
        ghostBtn.style.color = "#7FFFD4";
        ghostBtn.style.background = "#111";
        ghostBtn.style.padding = "10px";
        ghostBtn.style.margin = "5px";
        ghostBtn.style.borderRadius = "5px";
        ghostBtn.style.cursor = "pointer";

        ghostBtn.addEventListener("click", () => showGhostDetails(ghost));

        container.appendChild(ghostBtn);
      });

      const details = document.createElement("div");
      details.id = "ghost-details";
      details.style.marginTop = "20px";
      section.appendChild(details);

      await fadeIn(section);
    });
  });