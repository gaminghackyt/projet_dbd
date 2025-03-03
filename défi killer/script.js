const challenges = {
    Facile: [
        "Premier Sang: Frapper un survivant au moins une fois",
        "Crochet Rapide: Accrocher un survivant dans les 30 secondes après l’avoir blessé",
        "Briseur de Générateurs: Casser un générateur au moins une fois",
        "Sentinelle: Regarder un générateur pendant 10 secondes sans bouger",
        "Surprise !: Attrape un survivant en train de sauter une fenêtre ou réparer un générateur",
        "Chasseur Patient: Suivez un survivant pendant 15 secondes sans l’attaquer",
        "Briseur de Palettes: Détruire au moins 2 palettes en une seule partie",
        "Gardien des Crochets: Se rendre au moins 3 fois près d’un survivant accroché",
        "Ombre Silencieuse: Regarder un survivant sans qu’il te voie pendant 5 secondes",
        "Écho du Mal: Interrompre un soin en frappant un survivant",
        "Peur Rampante: Faire crier un survivant en l’effrayant",
        "Maîtrise des Portes: Fermer la trappe ou forcer une porte de sortie",
        "Le Dernier Rire: Frapper un survivant après qu’il ait utilisé Dead Hard",
        "Coup de Maître: Mettre un survivant à terre en un seul coup",
        "Inévitable: Rattraper un survivant en pleine poursuite sans qu’il utilise une palette",
        "Embûche Mortelle: Forcer un survivant à s’enfuir vers une zone sans issue",
        "Sans Échappatoire: Attraper un survivant près d’une sortie",
        "Pisteur de Sang: Suivez une trace de sang pendant 10 secondes sans la perdre",
        "Tacticien: Blesser 3 survivants différents en une seule partie",
        "Chasseur de Totems: Protèger un totem maudit pendant au moins 15 secondes",
        "Briseur d’Espoir: Annuler la barre de progression d’un générateur avec une capacité ou une compétence",
        "Maître de la Vision: Utiliser un pouvoir pour révéler un survivant",
        "Traqueur Invisible: Rester accroupi ou invisible pendant 10 secondes",
        "Terreur Absolue: Faire monter la bloodlust au maximum",
        "Roi de la Menace: Faire fuir un survivant d’un générateur juste en approchant",
        "L’Assassin Fantôme: Mettre à terre un survivant sans qu’il t’ait vu arriver"
    ],
    Medium: [
        "Assaut Inévitable: Mettre à terre un survivant sans qu’il ait utilisé de palette ou fenêtre",
        "Briseur d’Espoir: Réduire la progression de 3 générateurs",
        "Chasseur Rusé: Attraper un survivant en train de sortir d’un casier",
        "Déstabilisation Totale: Forcer 3 survivants à lâcher un générateur en une seule partie",
        "Élimination Stratégique: Accrocher 4 survivants différents en une seule partie",
        "Frappe Fatale: Mettre à terre un survivant avec une attaque spéciale",
        "Gardien du Crochet: Faire échouer au moins 2 sauvetages de crochet en restant proche",
        "Hantise du Brouillard: Attraper un survivant dans un piège ou une embuscade",
        "Inévitable Châtiment: Frapper un survivant après qu’il ait sauté une fenêtre ou une palette",
        "Jugement Implacable: Accrocher un survivant à un crochet spécial",
        "Killer Instinct: Révèler 4 survivants avec un pouvoir",
        "Lethal Pursuer: Trouver et poursuivre un survivant dans les 10 premières secondes",
        "Maître du Terrain: Bloquer un survivant avec votre corps pour l’empêcher de fuir",
        "No Escape: Mettre à terre un survivant près d’une porte de sortie",
        "Obsession Traquée: Accrocher l'obsession 2 fois dans la partie",
        "Peur Permanente: Faire fuir un survivant d’un générateur au moins 5 fois",
        "Quasi-Immortel: Soiyer aveuglé ou étourdi mais attraper un survivant immédiatement après",
        "Retour de Flammes: Mettre à terre un survivant après avoir perdu une poursuite",
        "Saboteur de Dernière Minute: Briser une porte ou une palette juste avant qu’un survivant l’utilise",
        "Tueur en Série: Mettre à terre 3 survivants en moins de 30 secondes",
        "Ultime Chasseur: Poursuivre un survivant pendant 45 secondes avant de le mettre à terre",
        "Vengeance Sanglante: Blesser un survivant qui vous a aveuglé ou fait tomber une palette dessus",
        "Watchdog du Mal: Rester proche d’un crochet et repèrer un survivant venant pour un sauvetage",
        "Xénophobie du Mal: Empêcher un survivant blessé de se soigner pendant 30 secondes",
        "Yeux du Démon: Utiliser un pouvoir pour ralentir ou affaiblir les survivants au moins 3 fois",
        "Zéro Échappatoire: Ne laisser aucun survivant s’échapper par la trappe ou la porte"
    ],
    Difficile: [
        "Architecte du Chaos: Empêcher la réparation complète de 3 générateurs pendant au moins 4 minutes",
        "Briseur d’Âme: Mettre à terre 2 survivants en moins de 10 secondes",
        "Chasseur Silencieux: Attraper un survivant sans qu’il t’ait vu avant",
        "Dominateur du Terrain: Forcer 5 lâchers de générateurs dans la partie en allant sur place",
        "Exécution Parfaite: Tuer un survivant directement sans passer par le crochet",
        "Fermeture Implacable: Fermer la trappe et mettre à terre le dernier survivant avant qu’il ouvre une porte",
        "Gardien du Brouillard: Empêcher tout soin complet pendant 2 minutes avec des effets",
        "Harceleur de l’Ombre: Poursuivre un survivant pendant plus de 50 secondes avant de le mettre à terre",
        "Implacable: Accrocher chaque survivant au moins 3 fois dans la partie",
        "Jugement Ultime: Forcer 2 sacrifices immédiats",
        "Killer Instinct Suprême: Révèler tous les survivants en moins de 30 secondes avec ton pouvoir",
        "Lame Maudite: Mettre à terre 2 survivants consécutivement avec une attaque spéciale",
        "Maître de la Menace: Faire crier tous les survivants en moins de 20 secondes",
        "Némésis: Tuer l'obsession ou forcer-la à mourir sur le crochet",
        "Opportuniste Maléfique: Accrocher un survivant sur un crochet spécifique juste avant que son coéquipier essaie de saboter",
        "Plan Parfait: Mettre à terre 2 survivants en une seule poursuite",
        "Quatuor Maudit: Accrocher les 4 survivants en état critique en même temps",
        "Règne du Terreur: Augmenter la bloodlust au maximum et faire fuir 4 survivants en même temps",
        "Stratège Patient: Laisser un survivant en état critique pendant 45 secondes avant de l’accrocher",
        "Traqueur de Sang: Suivre une trace de sang pendant plus de 30 secondes sans la perdre",
        "Ultime Embuscade: Prendre un survivant par surprise en l’attrapant directement",
        "Vengeance Retardée: Garder un survivant en vie sur crochet pendant au moins 1 minute avant qu’il soit sauvé",
        "Warzone: Mettre à terre 3 survivants en moins de 20 secondes dans la même zone",
        "X-Factor du Tueur: Terminer une partie avec 4 sacrifices ou meurtres directs",
        "Yeux de la Nuit: Surveiller un survivant blessé et laisse-le ramper sans qu’il puisse se soigner ou être sauvé pendant au moins 30 secondes",
        "Zéro Chance de Survie: Bloquer toutes les issues et élimine le dernier survivant avant qu’il n’échappe à la partie"
    ]
};

function getRandomChallenge() {
    const levels = Object.keys(challenges);
    const level = levels[Math.floor(Math.random() * levels.length)];
    const challenge = challenges[level][Math.floor(Math.random() * challenges[level].length)];
    return `[${level.toUpperCase()}] ${challenge}`;
}

document.getElementById("newChallengeBtn").addEventListener("click", function() {
    const challengeBox = document.getElementById("challengeBox");
    const container = document.querySelector(".container");

    container.classList.add("show-challenge");

    const challenge = getRandomChallenge();
    challengeBox.textContent = challenge;

    setTimeout(() => {
        container.classList.remove("show-challenge");
    }, 100000);
});

function displayChallenge() {
    const challengeBox = document.getElementById("challengeBox");
    if (!challengeBox) return;

    let counter = 0;
    let intervalSpeed = 50;
    let duration = 3000;

    const interval = setInterval(() => {
        challengeBox.textContent = getRandomChallenge();
        counter += intervalSpeed;

        if (counter > duration * 0.7) intervalSpeed = 150;
        if (counter > duration * 0.9) intervalSpeed = 300;

        if (counter >= duration) {
            clearInterval(interval);
            setTimeout(() => {
                challengeBox.textContent = getRandomChallenge();
            }, 500);
        }
    }, intervalSpeed);
}

document.getElementById("newChallengeBtn").addEventListener("click", () => {
    displayChallenge();
});

// 🎥 Twitch Bot : Écoute le chat pour !defi
const client = new tmi.Client({
    options: {debug:true},
    identity: {
        username: 'spectralBot', //nom du bot 
        password: 'oauth:ud5nuhl9trae2u79sfebanxj3c2utm' // jeton d'accès
    },
    channels: [ 'spectralreid' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // console.log(`${tags['spectralreid']}: ${message}`)
    if (self) return;
    if (message.toLowerCase() === "!defi") {
        client.say(channel, `@${tags.username}, heya!`)
        // displayChallenge();
    }
});