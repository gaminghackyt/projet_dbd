document.addEventListener("DOMContentLoaded", function () {
    const settingsBtn = document.getElementById("settings-btn");
    const settingsMenu = document.getElementById("settings-menu");
    const perkList = document.getElementById("perk-list");
    const saveSettingsBtn = document.getElementById("save-settings");
    const slots = document.querySelectorAll(".slot");
    const backgrounds = document.querySelectorAll(".slot-container");

    const perks = [
        { name: "Agitation", image: "imagesk/evan1.png" },
        { name: "Force Brute", image: "imagesk/evan2.png" },
        { name: "Présence Perturbante", image: "imagesk/evan3.png" },
        { name: "Limier", image: "imagesk/philip1.png" },
        { name: "Prédateur", image: "imagesk/philip2.png" },
        { name: "Rejeton de l'Ombre", image: "imagesk/philip3.png" },
        { name: "Rejeton de la Lumière", image: "imagesk/max1.png" },
        { name: "Réparateur", image: "imagesk/max2.png" },
        { name: "Tenace", image: "imagesk/max3.png" },
        { name: "Stridor", image: "imagesk/sally1.png" },
        { name: "Thanatophobie", image: "imagesk/sally2.png" },
        { name: "Vocation de l'Infirmière", image: "imagesk/sally3.png" },
        { name: "Garder le Meilleur pour la Fin", image: "imagesk/michael1.png" },
        { name: "Jouer avec la Nourriture", image: "imagesk/michael2.png" },
        { name: "Lumière Mourante", image: "imagesk/michael3.png" },
        { name: "Sort : Le Troisième Sceau", image: "imagesk/lisa1.png" },
        { name: "Sort : Mangeur d'Espoir", image: "imagesk/lisa2.png" },
        { name: "Sort : Ruine", image: "imagesk/lisa3.png" },
        { name: "Présence Écrasante", image: "imagesk/herman1.png" },
        { name: "Surcharge", image: "imagesk/herman2.png" },
        { name: "Surveillance et Maltraitance", image: "imagesk/herman3.png" },
        { name: "Instinct Territorial", image: "imagesk/anna1.png" },
        { name: "Prédation", image: "imagesk/anna2.png" },
        { name: "Sort : Berceuse de la Chasseuse", image: "imagesk/anna3.png" },
        { name: "Chili et Barbecue", image: "imagesk/lélé1.png" },
        { name: "K.O.", image: "imagesk/lélé2.png" },
        { name: "Trépas de Franklin", image: "imagesk/lélé3.png" },
        { name: "Gardien du Sang", image: "imagesk/freddy1.png" },
        { name: "Intensité Ardente", image: "imagesk/freddy2.png" },
        { name: "Souviens-Toi de Moi", image: "imagesk/freddy3.png" },
        { name: "Crochet Flagellateur : Coup du Pendu", image: "imagesk/amanda1.png" },
        { name: "Fais ton Choix", image: "imagesk/amanda2.png" },
        { name: "Surveillance", image: "imagesk/amanda3.png" },
        { name: "Coulrophobie", image: "imagesk/jeffrey1.png" },
        { name: "Déboussoler", image: "imagesk/jeffrey2.png" },
        { name: "Le Tour est Joué", image: "imagesk/jeffrey3.png" },
        { name: "Fureur de l'Esprit", image: "imagesk/rin1.png" },
        { name: "Rancœur", image: "imagesk/rin2.png" },
        { name: "Sort : Terrain Hanté", image: "imagesk/rin3.png" },
        { name: "Cran Dément", image: "imagesk/susie1.png" },
        { name: "Discordance", image: "imagesk/susie2.png" },
        { name: "Vierge de Fer", image: "imagesk/susie3.png" },
        { name: "Intervention Impure", image: "imagesk/adiris1.png" },
        { name: "Peur Contagieuse", image: "imagesk/adiris2.png" },
        { name: "Sombre Dévotion", image: "imagesk/adiris3.png" },
        { name: "Frissons Palpitants", image: "imagesk/danny1.png" },
        { name: "Je Vous Écoute", image: "imagesk/danny2.png" },
        { name: "Poursuite Furtive", image: "imagesk/danny3.png" },
        { name: "Briseur d'Esprit", image: "imagesk/demo1.png" },
        { name: "Limites Cruelles", image: "imagesk/demo2.png" },
        { name: "Surtension", image: "imagesk/demo3.png" },
        { name: "Ennemi Juré", image: "imagesk/kazan1.png" },
        { name: "Tactiques de Zanshin", image: "imagesk/kazan2.png" },
        { name: "Écho Sanguin", image: "imagesk/kazan3.png" },
        { name: "Bricolo", image: "imagesk/caleb1.png" },
        { name: "Dispositif de l'Homme Mort", image: "imagesk/caleb2.png" },
        { name: "Sort : Châtiment", image: "imagesk/caleb3.png" },
        { name: "Lien Mortel", image: "imagesk/pyramid1.png" },
        { name: "Piste de Souffrance", image: "imagesk/pyramid2.png" },
        { name: "Pénitence Forcée", image: "imagesk/pyramid3.png" },
        { name: "Prise du Dragon", image: "imagesk/talbot1.png" },
        { name: "Sort : Faveur de Sang", image: "imagesk/talbot2.png" },
        { name: "Sort : Immortel", image: "imagesk/talbot3.png" },
        { name: "Amasseur", image: "imagesk/charlotte1.png" },
        { name: "Coup de Grâce", image: "imagesk/charlotte2.png" },
        { name: "Oppression", image: "imagesk/charlotte3.png" },
        { name: "Aucune Issue", image: "imagesk/hak1.png" },
        { name: "Fascination", image: "imagesk/hak2.png" },
        { name: "Sort : Contrôle des Foules", image: "imagesk/hak3.png" },
        { name: "Hystérie", image: "imagesk/neme1.png" },
        { name: "Poursuivant Meurtrier", image: "imagesk/neme2.png" },
        { name: "Éruption", image: "imagesk/neme3.png" },
        { name: "Crochet Flagellateur : Don de Souffrance", image: "imagesk/elliot1.png" },
        { name: "Impasse", image: "imagesk/elliot2.Png" },
        { name: "Sort : Jouet", image: "imagesk/elliot3.png" },
        { name: "Crochet Flagellateur : Écho de Douleur", image: "imagesk/carmina1.png" },
        { name: "Sombre Étreinte", image: "imagesk/carmina2.Png" },
        { name: "Sort : Repentir", image: "imagesk/carmina3.png" },
        { name: "Appel de la Mer", image: "imagesk/sadako1.Png" },
        { name: "Crochet Flagellateur : Flots de Rage", image: "imagesk/sadako2.png" },
        { name: "Tempête Impitoyable", image: "imagesk/sadako3.Png" },
        { name: "Dissolution", image: "imagesk/dredge1.png" },
        { name: "Toucher Septique", image: "imagesk/dredge.png" },
        { name: "Ténèbres Révélées", image: "imagesk/dredge3.png" },
        { name: "Anatomie Supérieure", image: "imagesk/wesker1.png" },
        { name: "Perception Éveillée", image: "imagesk/wesker2.png" },
        { name: "Terminus", image: "imagesk/wesker3.png" },
        { name: "Hubris", image: "imagesk/tharos1.png" },
        { name: "Nulle Part Où Se Cacher", image: "imagesk/tharos2.png" },
        { name: "Sort : Affrontez les Ténèbres", image: "imagesk/tharos3.png" },
        { name: "Effet de Levier", image: "imagesk/adriana1.png" },
        { name: "Ouverture de la Chasse", image: "imagesk/adriana2.png" },
        { name: "VLAN !", image: "imagesk/adriana3.png" },
        { name: "Apprentissage Automatique", image: "imagesk/HUX1.png" },
        { name: "Hésitation Forcée", image: "imagesk/HUx2.png" },
        { name: "Limites Génétiques", image: "imagesk/HUX3.png" },
        { name: "Arme Ultime", image: "imagesk/xeno1.png" },
        { name: "Brutalité Rapide", image: "imagesk/xeno2.png" },
        { name: "Instinct d'Alien", image: "imagesk/xeno3.png" },
        { name: "Amis Pour la Vie", image: "imagesk/ray1.png" },
        { name: "Piles Incluses", image: "imagesk/ray2.png" },
        { name: "Sort : On Peut Jouer à Deux", image: "imagesk/ray3.png" },
        { name: "Inattendu", image: "imagesk/inconnu1.png" },
        { name: "Inexorable", image: "imagesk/inconnu2.png" },
        { name: "Interrompu", image: "imagesk/inconnu3.png" },
        { name: "Arrogance Ténébreuse", image: "imagesk/vecna1.png" },
        { name: "Contact Languide", image: "imagesk/vecna2.png" },
        { name: "Lien avec la Trame", image: "imagesk/vecna3.png" },
        { name: "Avidité Humaine", image: "imagesk/dacrula1.png" },
        { name: "Domination", image: "imagesk/dacrula2.png" },
        { name: "Sort : Destin Misérable", image: "imagesk/dacrula3.png" },
        { name: "Coup de Tonnerre", image: "imagesk/portia1.png" },
        { name: "Crochet Flagellateur : Boussole de Douleur", image: "imagesk/portia2.png" },
        { name: "Pas de Quartier", image: "imagesk/portia3.png" },
        { name: "Boucher Sadique", image: "imagesk/commun1.png" },
        { name: "Crochet Flagellateur : Sanctuaire Monstrueux", image: "imagesk/commun2.png" },
        { name: "Espions de l'Ombre", image: "imagesk/commun3.png" },
        { name: "Implacable", image: "imagesk/commun4.png" },
        { name: "Inquiétant", image: "imagesk/commun5.png" },
        { name: "Insidieux", image: "imagesk/commun6.png" },
        { name: "Murmure Amer", image: "imagesk/commun7.png" },
        { name: "Pisteur", image: "imagesk/commun8.png" },
        { name: "Poigne de Fer", image: "imagesk/commun9.png" },
        { name: "Sort : Euphorie de la Chasse", image: "imagesk/commun10.png" },
        { name: "Sort : Personne n'Échappe à la Mort", image: "imagesk/commun11.png" },
        { name: "Murmures", image: "imagesk/commun12.png" },
    ];

    let activePerks = [...perks];

    settingsBtn.addEventListener("click", () => {
        settingsMenu.classList.toggle("hidden");
    });

    perks.forEach((perk, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${perk.image}" alt="${perk.name}">
            <input type="checkbox" id="perk-${index}" checked>
            <label for="perk-${index}">${perk.name}</label>
        `;
        perkList.appendChild(li);
    });

    saveSettingsBtn.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll("#perk-list input[type='checkbox']");
        activePerks = perks.filter((_, index) => checkboxes[index].checked);
        alert("Réglages sauvegardés !");
        settingsMenu.classList.add("hidden");
    });

    function startSlotMachine() {
        slots.forEach((slot, index) => {
            slot.classList.add("rolling");
            const spinTime = 2000 + index * 500;

            const interval = setInterval(() => {
                const randomPerk = activePerks[Math.floor(Math.random() * activePerks.length)];
                const img = `<img src="${randomPerk.image}" alt="perk image">`;
                const name = `<span class="perk-name">${randomPerk.name}</span>`;
                slot.innerHTML = img + name;
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                const finalPerk = activePerks[Math.floor(Math.random() * activePerks.length)];
                const finalImg = `<img src="${finalPerk.image}" alt="perk image">`;
                const finalName = `<span class="perk-name">${finalPerk.name}</span>`;
                slot.innerHTML = finalImg + finalName;
                slot.classList.remove("rolling");
                slot.classList.add("final");
            }, spinTime);
        });
    }

    backgrounds.forEach(background => {
        background.addEventListener("click", startSlotMachine);
    });
});