const challenges = {
    Facile: [
        "Échappez à une poursuite au moins une fois",
        "Soignez un coéquipier pour un total de 100% de sa vie",
        "Réparer un générateur seul ou en coopération",
        "Cacher pendant 30 secondes dans un casier sans se faire attraper",
        "Échapper au tueur en sautant une fenêtre pendant une poursuite",
        "Utiliser une palette pour étourdir le tueur",
        "Ouvrir une porte de sortie",
        "Décrochet un coéquipier sans être blessé",
        "Fouiller trois coffres dans une partie",
        "Utiliser une trousse de soin complètement",
        "Aveugler le tueur",
        "Utiliser une boîte à outils pour saboter un crochet",
        "S'échapper par la trappe",
        "Se cacher dans un buisson pendant 20 secondes sans bouger",
        "Faire tourner le tueur sur un jungle-jim pendant au moins 15 secondes",
        "Faire une fake window sans se faire toucher",
        "S'échapper en étant le dernier survivant",
        "Terminer un générateur sans rater un QTE",
        "Utiliser une boîte à outils pour réparer un générateur rapidement",
        "Prendre un coup de protection",
        "Faire du bruit pour distraire le tueur",
        "Se cacher à moins de 5 mètres du tueur sans se faire repérer pendant 30 secondes",
        "Terminer une partie en ayant utilisé la totalité de l'objet",
        "Jouer une partie avec un survivant jamais jouer",
        "Récupérer un objet dans un coffre et l'utiliser entièrement",
        "S'échapper d'une partie en ayant réparé au minimum 2 générateurs"
    ],
    Medium: [
        "Accro au danger: Rester blessé 120 secondes dans la partie",
        "Bagarreur rusé: Éblouir ou étourdir le tueur 3 fois dans la partie",
        "Caméléon: Changer de casier 3 fois tout en étant poursuivi par le tueur",
        "Dérangeant: Détruire 3 totems dans la partie",
        "Évasion parfaite: Échapper au tueur après un sprint avec course effrénée ou pendant le sprint final",
        "Faux espoir: Faire croire au tueur que tu vas sauver un allié accroché, mais fais demi-tour au dernier moment",
        "Génis des générateurs: Terminer 3 générateurs dans la partie",
        "Harceleur: Marche accroupi près du tueur pendant au moins 10 secondes sans qu'il te voie",
        "Ingénieux: Réussir un test d'habilité exellent sur un générateur au moins 3 fois",
        "Justicier: Saboter un crochet juste avant que le tueur accroche un allié",
        "Kamikaze: Prendre un coup à la place d'un allié au moins deux fois dans la partie",
        "Leurreur: Jouer uniquement avec des perks de distraction",
        "Maître du corp à corp: Étourdir le tueur 2 fois avec une palette dans la partie",
        "Ninja: Rester caché pendant 1 minute sans bouger et sans être repéré",
        "Opportuniste: Sauver un allié accroché et le soigner dans les 20 secondes qui suivent",
        "Piégé mais pas perdu: Réussir à s'échapper après avoir marcher sur un piège du trappeur ou avoir étais attraper par le spectre",
        "Quitte ou double: Passer par une fenêtre au moment où le tueur s'apprête à frapper",
        "Ruse ultime: Faire croire au tueur que tu vas sauter par une fenêtre",
        "Sauveur désespéré: Utiliser une flash-light ou une grenade flash pour empêcher un accrochage juste à temps",
        "Trompe l'oeil: Utiliser la compétence illusion miroir pour faire croire au tueur que vous réparer le générateur",
        "Ultime sacrifice: Mettre sa vie en danger lors du sprint final pour sauver un allié",
        "Vitesse supersonique: Utiliser course effrénée pour échapper au tueur dans les 30 secondes qui suivent",
        "Wrecking ball: Faire tomber 4 palletes dans la partie",
        "Xénomorphe détecté: Lancer la partie sans utiliser de perk ni d'objets",
        "Yamakasi: Réussire 4 sauts de fenêtre rapides sans êtres touché",
        "Zéro pitié: Garder le tueur occupé en poursuite pendant 60 secondes sans être toucher"
    ],
    Difficile: [
        "Survivant solo: Gagner la partie sans aider les autres survivants (pas de soin, pas de sauvetages et pas d'objectifs communs)",
        "Ninja: Ne pas alerter le tueur (pas de bruit ou d'action bruyante) pendant la partie (excluant les moments où vous devez courir pour fuir le tueur)",
        "Survivant accroupi: Terminer la partie sans jamais se relever de la position accroupie (excluant les moments où vous devez courir pour fuir le tueur)",
        "Libération par soins: Sauver un survivant du crochet uniquement après avoir soigner un allié",
        "Détective: Localiser et ouvrir 3 coffres pendant la partie sans jamais être touché par le tueur",
        "Héros de la porte: Terminer la partie en ouvrant les deux portes de sortie tout en sauvant un survivant du crochet à la fin",
        "Moteur humain: Réparer un générateur tout en étant poursuivi par le tueur",
        "L’infiltrateur: Terminer une partie sans que le tueur vous touche",
        "Cauchemar de l'assistance: Sauver un survivant 3 fois, mais sans jamais être guéris par eux",
        "L’Œil de lynx: Réussir à réparer un générateur tout en restant à l’extérieur de la ligne de vision du tueur pendant la totalité de l’objectif",
        "Évasion en sprint: Courir plus de 600 mètres dans la partie sans être attrapé",
        "Ranger solidaire: Réparer un générateur à 4 joueurs sans que personne ne prenne de coup",
        "Explosion de générateur: Faire sauter un générateur dans les 30 secondes suivant la réparation en ajoutant un sabotage avec la boîte à outils",
        "Récupération rapide: Réussir à se libérer du crochet en moins de 10 secondes",
        "Sans repos: Ne jamais vous arrêter de courrir pendant toute la partie",
        "Fantôme: Faire 5 actions d'évasions, sans être vu par le tueur",
        "Pas de peur: Ne jamais vous cacher dans un casier de toute la partie",
        "Survivant chasseur: Vaincre un tueur qui utilise un piège spécifique ou une capacité unique (par exemple, se libérer d'un piège du trappeur)",
        "Travail d'équipe: Guérir un autre survivant 10 fois dans la partie sans que cela prenne plus de 15 secondes par fois",
        "Chasseur de trappes: Sauver un survivant d'un trappe de manière spectaculaire",
        "Manipulateur: Faire un générateur, puis sauvez un allié tout en ayant un piège (non visible) en place",
        "Concentration: Ne pas rater un seul QTE pendant la partie",
        "Double sauvetage: Sauver 2 survivants du crochet sans être blessé",
        "Solo héroïque: Terminer la partie avec tous les générateurs réparés, tout en étant le seul survivant",
        "Partie délirante: Réussir 15% de toutes les actions en évitant de regarder les éléments nécessaires pour augmenter une statistique",
        "Voyageur intrépide: Ne pas utiliser d'objet dans la partie"
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
    connection: { reconnect: true },
    channels: ["spectralreid"]
});

client.connect();

client.on("message", (channel, tags, message, self) => {
    if (self) return;
    if (message.toLowerCase() === "!defi") {
        displayChallenge();
    }
});