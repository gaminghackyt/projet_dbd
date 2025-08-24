document.addEventListener("DOMContentLoaded", function () {
    const settingsBtn = document.getElementById("settings-btn");
    const settingsMenu = document.getElementById("settings-menu");
    const perkList = document.getElementById("perk-list");
    const saveSettingsBtn = document.getElementById("save-settings");
    const searchInput = document.getElementById("search-perk");
    const toggleAllBtn = document.getElementById("toggle-all");
    const slots = document.querySelectorAll(".slot");
    const backgrounds = document.querySelectorAll(".slot-container");

    const perks = [
        { name: "Fais tes Preuves", image: "images/dwight1.png" },
        { name: "Lien", image: "images/dwight2.png" },
        { name: "Meneur", image: "images/dwight3.png" },
        { name: "Adrénaline", image: "images/meg1.png" },
        { name: "Course Effrénée", image: "images/meg2.png" },
        { name: "Rapide et Silencieux", image: "images/meg3.png" },
        { name: "Auto-Traitement", image: "images/claudette1.png" },
        { name: "Connaissances en Botanique", image: "images/claudette2.png" },
        { name: "Empathie", image: "images/claudette3.png" },
        { name: "Esprit Calme", image: "images/jake1.png" },
        { name: "Même Pas Mal", image: "images/king2.png" },
        { name: "Saboteur", image: "images/jake2.png" },
        { name: "Volonté de Fer", image: "images/jake3.png" },
        { name: "Atterrissage Équilibré", image: "images/nea1.png" },
        { name: "Débrouillardise", image: "images/nea2.png" },
        { name: "Évasion Urbaine", image: "images/nea3.png" },
        { name: "Coup Décisif", image: "images/laurie1.png" },
        { name: "Objet d'Obsession", image: "images/laurie2.png" },
        { name: "Unique Survivant", image: "images/laurie3.png" },
        { name: "Atout dans la Manche", image: "images/ace1.png" },
        { name: "Augmenter la Mise", image: "images/ace2.png" },
        { name: "Le Cœur sur la Main", image: "images/ace3.png" },
        { name: "Abandonné", image: "images/bill1.png" },
        { name: "Indéfectible", image: "images/bill2.png" },
        { name: "Sursis", image: "images/bill3.png" },
        { name: "Souple", image: "images/feng1.png" },
        { name: "Technicien", image: "images/feng2.png" },
        { name: "Vigilant", image: "images/feng3.png" },
        { name: "Dur à Cuire", image: "images/king1.png" },
        { name: "Nous Vivrons Éternellement", image: "images/king3.png" },
        { name: "Debout !", image: "images/quentin1.png" },
        { name: "Pharmacie", image: "images/quentin2.png" },
        { name: "Veillée", image: "images/quentin3.png" },
        { name: "En Planque", image: "images/tapp1.png" },
        { name: "Intuition de l'Inspecteur", image: "images/tapp2.png" },
        { name: "Ténacité", image: "images/tapp3.png" },
        { name: "Danse Avec Moi", image: "images/kate1.png" },
        { name: "Effusion", image: "images/kate2.png" },
        { name: "Parfaite Occasion", image: "images/kate3.png" },
        { name: "Autodidacte", image: "images/adam1.png" },
        { name: "Diversion", image: "images/adam2.png" },
        { name: "Libération", image: "images/adam3.png" },
        { name: "Distorsion", image: "images/jeff1.png" },
        { name: "Effondrement", image: "images/jeff2.png" },
        { name: "Suivi des Soins", image: "images/jeff3.png" },
        { name: "Assurance", image: "images/jane1.png" },
        { name: "De Front", image: "images/jane2.png" },
        { name: "Solidarité", image: "images/jane3.png" },
        { name: "Accrochez-Vous", image: "images/ash1.png" },
        { name: "Force de Caractère", image: "images/ash2.png" },
        { name: "À la Revoyure", image: "images/ash3.png" },
        { name: "Force Intérieure", image: "images/nancy1.png" },
        { name: "Mieux Ensemble", image: "images/nancy2.png" },
        { name: "Obnubilé", image: "images/nancy3.png" },
        { name: "Baby-Sitter", image: "images/steve1.png" },
        { name: "Camaraderie", image: "images/steve2.png" },
        { name: "Second Souffle", image: "images/steve3.png" },
        { name: "Coup de Chance", image: "images/yui1.png" },
        { name: "Par Tous les Moyens", image: "images/yui2.png" },
        { name: "Évasion", image: "images/yui3.png" },
        { name: "Confidentiel", image: "images/zarina1.png" },
        { name: "Leurre", image: "images/zarina2.png" },
        { name: "Pour le Peuple", image: "images/zarina3.png" },
        { name: "Alliance Refoulée", image: "images/cheryl1.png" },
        { name: "Pacte de Sang", image: "images/cheryl2.png" },
        { name: "Protection de l'Âme", image: "images/cheryl3.png" },
        { name: "Conçu pour Durer", image: "images/felix1.png" },
        { name: "Mesures Désespérées", image: "images/felix2.png" },
        { name: "Visionnaire", image: "images/felix3.png" },
        { name: "Bras de Fer", image: "images/rakoto1.png" },
        { name: "Estimation", image: "images/rakoto2.png" },
        { name: "Supercherie", image: "images/rakoto3.png" },
        { name: "Instinct de Survie", image: "images/lee1.png" },
        { name: "Succès Écrasant", image: "images/lee2.png" },
        { name: "Voie Rapide", image: "images/lee3.png" },
        { name: "Contre-Force", image: "images/jill1.png" },
        { name: "Mine Explosive", image: "images/jill2.png" },
        { name: "Renaissance", image: "images/jill3.png" },
        { name: "Détermination du Bleu", image: "images/leon1.png" },
        { name: "Grenade Aveuglante", image: "images/leon2.png" },
        { name: "Serrer les Dents", image: "images/leon3.png" },
        { name: "Bénédiction : Cercle de Soins", image: "images/mikaela1.png" },
        { name: "Bénédiction : Marche de l'Ombre", image: "images/mikaela2.png" },
        { name: "Clairvoyance", image: "images/mikaela3.png" },
        { name: "Bénédiction : Exponentiel", image: "images/jonah1.png" },
        { name: "Mesure de Correction", image: "images/jonah2.png" },
        { name: "Surmonter", image: "images/jonah3.png" },
        { name: "Bénédiction : Théorie Ténébreuse", image: "images/yoichi1.png" },
        { name: "Connexion Empathique", image: "images/yoichi2.png" },
        { name: "Conseils Parentaux", image: "images/yoichi3.png" },
        { name: "Concentration Intérieure", image: "images/haddie1.png" },
        { name: "Excès de Zèle", image: "images/haddie2.png" },
        { name: "Manifeste Résiduel", image: "images/haddie3.png" },
        { name: "Guérison Réactive", image: "images/ada1.png" },
        { name: "Micro Caché", image: "images/ada2.png" },
        { name: "Profil Bas", image: "images/ada3.png" },
        { name: "Hyperconcentration", image: "images/rebecca1.png" },
        { name: "Mieux que Neuf", image: "images/rebecca2.png" },
        { name: "Réconfort", image: "images/rebecca3.png" },
        { name: "Débrouillard", image: "images/vito1.png" },
        { name: "Gambit Prompt", image: "images/vito2.png" },
        { name: "Énergie Potentielle", image: "images/vito3.png" },
        { name: "Compétition Amicale", image: "images/thalita1.png" },
        { name: "Hors de Contrôle", image: "images/thalita2.png" },
        { name: "Travail d'Équipe : Pouvoir des Deux", image: "images/thalita3.png" },
        { name: "Coup de Collier", image: "images/renato1.png" },
        { name: "Joueur Arrière", image: "images/renato2.png" },
        { name: "Travail d'Équipe : Discrétion Collective", image: "images/renato3.png" },
        { name: "Expert", image: "images/soma1.png" },
        { name: "Fait Pour Ça", image: "images/soma2.png" },
        { name: "Récupérateur", image: "images/soma3.png" },
        { name: "Dramaturgie", image: "images/cage1.png" },
        { name: "Partenaire de Scène", image: "images/cage2.png" },
        { name: "Rebondissement", image: "images/cage3.png" },
        { name: "Bonne Étoile", image: "images/ripley1.png" },
        { name: "Piège Chimique", image: "images/ripley2.png" },
        { name: "À Pas de Chat", image: "images/ripley3.png" },
        { name: "Bénédiction : Illumination", image: "images/wake1.png" },
        { name: "Champion de la Lumière", image: "images/wake2.png" },
        { name: "Échéance", image: "images/wake3.png" },
        { name: "Invocation : Araignées Tisseuses", image: "images/sable1.png" },
        { name: "L'Ombre Fait la Force", image: "images/sable2.png" },
        { name: "Malice", image: "images/sable3.png" },
        { name: "Illusion du Miroir", image: "images/aestri1.png" },
        { name: "Inspiration Bardique", image: "images/aestri2.png" },
        { name: "Vision Immobile", image: "images/aestri3.png" },
        { name: "Endurcie", image: "images/lara1.png" },
        { name: "Finesse", image: "images/lara2.png" },
        { name: "Spécialiste", image: "images/lara3.png" },
        { name: "Exultation", image: "images/alucard1.png" },
        { name: "Moment de Gloire", image: "images/alucard2.png" },
        { name: "Yeux de Belmont", image: "images/alucard3.png" },
        { name: "Endosse le Fardeau", image: "images/taurie1.png" },
        { name: "Invocation : Corbeaux Traîtres", image: "images/taurie2.png" },
        { name: "Rupture Nette", image: "images/taurie3.png" },
        { name: "Ce n'est pas en Train d'Arriver", image: "images/commun1.png" },
        { name: "Déjà-Vu", image: "images/commun2.png" },
        { name: "Espoir", image: "images/commun3.png" },
        { name: "Frisson", image: "images/commun4.png" },
        { name: "Instinct de Pillard", image: "images/commun5.png" },
        { name: "Nous Y Arriverons", image: "images/commun6.png" },
        { name: "On n'Abandonne Personne", image: "images/commun7.png" },
        { name: "Parenté", image: "images/commun8.png" },
        { name: "Petit Gibier", image: "images/commun9.png" },
        { name: "Poids Plume", image: "images/commun10.png" },
        { name: "Prémonition", image: "images/commun11.png" },
        { name: "Résistance", image: "images/commun12.png" },
        { name: "Sentiment Obscur", image: "images/commun13.png" },
        { name: "Viande Glissante", image: "images/commun14.png" },
        { name: "Conviction", image: "images/michonne1.png" },
        { name: "Dernier combat", image: "images/michonne2.png" },
        { name: "Travail d'équipe : Lancer", image: "images/michonne3.png" },
        { name: "Ingéniosité apocalyptique", image: "images/rick1.png" },
        { name: "Viens me chercher !", image: "images/rick2.png" },
        { name: "Travail d'équipe : s'endurcir", image: "images/rick3.png" }
    ];

    let activePerks = [...perks];

    // ouvrir/fermer le menu
    settingsBtn.addEventListener("click", () => {
        settingsMenu.classList.toggle("hidden");
    });

    // === Fonction affichage de la liste filtrée ===
    function renderPerkList(filter = "") {
        perkList.innerHTML = ""; // reset

        perks.forEach((perk, index) => {
            const searchTerm = filter.toLowerCase();

            const perkNameMatch = perk.name.toLowerCase().includes(searchTerm);
            const charNameMatch = perk.image.toLowerCase().includes(searchTerm);

            if (searchTerm === "" || perkNameMatch || charNameMatch) {
                const li = document.createElement("li");
                li.innerHTML = `
                    <img src="${perk.image}" alt="${perk.name}">
                    <input type="checkbox" id="perk-${index}" checked>
                    <label for="perk-${index}">${perk.name}</label>
                `;
                perkList.appendChild(li);
            }
        });
    }

    // affichage initial
    renderPerkList();

    // recherche en live
    searchInput.addEventListener("input", () => {
        renderPerkList(searchInput.value);
    });

    // bouton Tout cocher/décocher
    toggleAllBtn.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll("#perk-list input[type='checkbox']");
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);

        checkboxes.forEach(cb => cb.checked = !allChecked);
        toggleAllBtn.textContent = allChecked ? "Tout cocher" : "Tout décocher";
    });

    // sauvegarde des réglages
    saveSettingsBtn.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll("#perk-list input[type='checkbox']");
        activePerks = perks.filter((_, index) => {
            const cb = document.getElementById(`perk-${index}`);
            return cb && cb.checked;
        });
        alert("Réglages sauvegardés !");
        settingsMenu.classList.add("hidden");
    });

    // === Roulette avec tirage unique ===
    function startSlotMachine() {
        let availablePerks = [...activePerks];

        slots.forEach((slot, index) => {
            slot.classList.add("rolling");

            if (!slot.querySelector(".perk-name")) {
                const nameDiv = document.createElement("div");
                nameDiv.classList.add("perk-name");
                slot.appendChild(nameDiv);
            }

            if (!slot.querySelector("img")) {
                const imgElement = document.createElement("img");
                slot.appendChild(imgElement);
            }

            const spinTime = 2000 + index * 500;

            const interval = setInterval(() => {
                const randomPerk = activePerks[Math.floor(Math.random() * activePerks.length)];
                const img = slot.querySelector("img");
                const name = slot.querySelector(".perk-name");

                img.src = randomPerk.image;
                name.textContent = randomPerk.name;
            }, 100);

            setTimeout(() => {
                clearInterval(interval);

                if (availablePerks.length > 0) {
                    const randomIndex = Math.floor(Math.random() * availablePerks.length);
                    const finalPerk = availablePerks.splice(randomIndex, 1)[0];

                    const img = slot.querySelector("img");
                    const name = slot.querySelector(".perk-name");

                    img.src = finalPerk.image;
                    name.textContent = finalPerk.name;
                }

                slot.classList.remove("rolling");
                slot.classList.add("final");
            }, spinTime);
        });
    }

    backgrounds.forEach(background => {
        background.addEventListener("click", startSlotMachine);
    });
});