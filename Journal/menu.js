document.addEventListener("DOMContentLoaded", () => {
    const switchViewBtn = document.getElementById("switchViewBtn");
    const mode1 = document.getElementById("mode1");
    const mode2 = document.getElementById("mode2");
    const descriptionBox = document.getElementById("ghostDescription");

    const ghosts = document.querySelectorAll(".ghost-list li");

    ghosts.forEach(li => {
        li.dataset.state = "0";

        li.addEventListener("click", () => {
            let state = parseInt(li.dataset.state);

            if ((state + 1) % 3 === 1) {
                ghosts.forEach(other => {
                    if (other !== li && other.dataset.state === "1") {
                        other.dataset.state = "0";
                        other.classList.remove("selected");
                    }
                });
            }

            state = (state + 1) % 3;
            li.dataset.state = state.toString();

            li.classList.remove("selected", "crossed");

            if (state === 1) li.classList.add("selected");
            else if (state === 2) li.classList.add("crossed");
        });
    });

    const ghostsInfo = document.querySelectorAll(".ghost-list-info li");

    const descriptions = {
        "Esprit": "L'Esprit ne pourras pas chasser pendant 180 secondes ( 3 minutes ) quand l'encens est consommé.",
        "Spectre": "Le Spectre ne peux pas marcher dans le sel.",
        "Fantôme": "Le Fantôme ne serra casiment pas visible en chasse.",
        "Poltergeist": "Le Poltergeist peut lancer plusieurs objets à la fois et loin.",
        "Banshee": "La Banshee cible une victime à la fois et peut aussi faire un cri spécial au microphone parabolique ( Depuis la nernière MAJ la Banshee à le skin féminin ).",
        "Djinn": "Le Djinn ne peux pas couper le courant et accélère instantanément à la vue du joueur.",
        "Cauchemar": "Le Cauchemar ne peux pas allumé de lumière, la télévison, les ordinateurs et le courant.",
        "Revenant": "Le Revenant est très lent quand il n'a pas de joueur en vue et deviens extrêmement rapide à la vue du joueur.",
        "Ombre": "L’Ombre ne peux pas bouger d'objet à côté du joueur et ne chasseras pas si le joueur est dans sa salle.",
        "Démon": "Le Démon attaque plus fréquemment que les autres.",
        "Yurei": "Le Yurei comment le trouver ?",
        "Oni": "L’Oni est très actif et clignote rapidement lors des chasses.",
        "Yokai": "Le Yokai il est sourd mdr.",
        "Hantu": "Le Hantu est plus rapide dans les pièces froides.",
        "Goryo": "Le Goryo ne peux pas changer de salle.",
        "Myling": "Le Myling est plus silencieux lors de ses déplacements.",
        "Onryo": "L’Onryo craint les flammes et attaque quand elles s’éteignent. Il suffit de 3 souffle pour lancer une chasse même à 100% de santé mental.",
        "Les Jumeaux": "Les Jumeaux provoquent des événements à deux endroits différents. En chasse le vrai Jumeaux est légèrement plus lent qu'un fantôme basic et le faux Jumeaux est légèrement plus rapide qu'un fantôme basic.",
        "Raiju": "Le Raiju devient plus rapide près d’appareils électroniques.",
        "Obake": "L’Obake peut changer d’apparence pendant une chasse.",
        "Le Mimic": "Le Mimic imite les capacités des autres fantômes. Il possèdent aussi un orbe même en sans preuve.",
        "Moroï": "Le Moroï affaiblit la santé mentale et devient plus rapide. Il ralentit quand des médicaments sont consommés.",
        "Deogen": "Le Deogen est lent mais sait toujours où est situé le joueur.",
        "Thayé": "Le Thayé vieillit et devient moins actif au fil du temps. Il est rapide au plus jeune âge est devient de plus en plus lent ( Il devient vieux ) quand le joueur est dans sa salle."
    };

    ghostsInfo.forEach(li => {
        li.addEventListener("click", () => {
            const name = li.textContent.trim();
            descriptionBox.textContent = descriptions[name] || "Pas de description disponible.";
        });
    });

    let mode = 1;

    switchViewBtn.addEventListener("click", () => {
        if (mode === 1) {
            mode1.style.display = "none";
            mode2.style.display = "block";
            switchViewBtn.textContent = "Retour au Journal";
            descriptionBox.textContent = "";
            mode = 2;
        } else {
            mode2.style.display = "none";
            mode1.style.display = "block";
            switchViewBtn.textContent = "Ghost Huntin'";
            mode = 1;
        }
    });
});