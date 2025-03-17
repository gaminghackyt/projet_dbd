let questions = [
    {
        question: "Comment réagissez-vous face à une attaque du tueur ?",
        options: [
            { text: "Je me cache et j'attends le bon moment pour m'échapper.", type: "esquive" },
            { text: "Je cherche à distraire le tueur pour aider mes alliés.", type: "distracteur" },
            { text: "Je tente de désactiver ses pièges et sauver les autres.", type: "soutien" },
            { text: "Je cours aussi vite que possible, quitte à prendre des risques.", type: "rapide" }
        ]
    },
    {
        question: "Quel est votre point fort lors d'une évasion ?",
        options: [
            { text: "Ma capacité à me faufiler sans être vu.", type: "esquive" },
            { text: "Je peux aider mes alliés à rester en vie grâce à ma stratégie.", type: "planificateur" },
            { text: "Je suis bon pour trouver et activer les générateurs rapidement.", type: "rapide" },
            { text: "Je suis très bon pour m'échapper à la dernière seconde.", type: "rapide" }
        ]
    },
    {
        question: "Quel est votre terrain de jeu favori ?",
        options: [
            { text: "Les endroits sombres où je peux me cacher.", type: "esquive" },
            { text: "Un espace dégagé où je peux courir librement.", type: "rapide" },
            { text: "Les zones avec des objets que je peux utiliser pour me protéger.", type: "soutien" },
            { text: "Partout, tant que je peux créer des distractions.", type: "distracteur" }
        ]
    },
    {
        question: "Que faites-vous lorsque vous êtes acculé par le tueur ?",
        options: [
            { text: "J'essaie de m'échapper en utilisant mon agilité.", type: "rapide" },
            { text: "Je commence à distraire le tueur pour permettre aux autres de fuir.", type: "distracteur" },
            { text: "Je tente de désactiver ses pièges pour tous les sauver.", type: "soutien" },
            { text: "Je lutte pour le faire tomber et prendre le dessus.", type: "combatif" }
        ]
    },
    {
        question: "Quel est votre objectif principal pendant une partie ?",
        options: [
            { text: "Éviter le tueur et trouver les générateurs.", type: "esquive" },
            { text: "Aider mes coéquipiers tout en m'échappant.", type: "distracteur" },
            { text: "Compléter les générateurs tout en sécurisant les zones.", type: "planificateur" },
            { text: "Réparer les générateurs et fuir rapidement.", type: "rapide" }
        ]
    },
    {
        question: "Si un coéquipier est capturé, que faites-vous ?",
        options: [
            { text: "Je tente de le sauver discrètement.", type: "esquive" },
            { text: "Je cherche à distraire le tueur pour permettre à mes alliés de se libérer.", type: "distracteur" },
            { text: "Je me précipite pour désactiver son piège et le sauver.", type: "soutien" },
            { text: "Je fonce pour le sauver, peu importe le danger.", type: "rapide" }
        ]
    },
    {
        question: "Quel est votre plan lorsque le tueur est proche ?",
        options: [
            { text: "Je me cache et attends qu'il passe.", type: "esquive" },
            { text: "Je fais du bruit pour l'attirer loin de mes alliés.", type: "distracteur" },
            { text: "Je me concentre sur la désactivation de ses pièges.", type: "soutien" },
            { text: "Je m'échappe à toute vitesse pour lui échapper.", type: "rapide" }
        ]
    },
    {
        question: "Que préférez-vous faire pendant une traque ?",
        options: [
            { text: "Je reste calme et discret, j'évite les confrontations directes.", type: "esquive" },
            { text: "Je me cache et attends une opportunité pour sortir.", type: "esquive" },
            { text: "Je tente de comprendre ses stratégies pour mieux contrer ses attaques.", type: "planificateur" },
            { text: "Je cours et fais de mon mieux pour me faufiler.", type: "rapide" }
        ]
    },
    {
        question: "Si un piège vous prend, comment réagissez-vous ?",
        options: [
            { text: "J'essaie de me libérer rapidement et de m'échapper.", type: "rapide" },
            { text: "Je me cache et j'attends que l'opportunité se présente.", type: "esquive" },
            { text: "Je demande de l'aide à un coéquipier pour me libérer.", type: "distracteur" },
            { text: "Je lutte pour me libérer en espérant que mes alliés agiront.", type: "combatif" }
        ]
    },
    {
        question: "Quel est votre plus grand défi lors de l'évasion ?",
        options: [
            { text: "Éviter le tueur et trouver un moyen de m'échapper.", type: "esquive" },
            { text: "Soutenir mes coéquipiers tout en fuyant.", type: "distracteur" },
            { text: "Assurer que tous les générateurs sont réparés en sécurité.", type: "planificateur" },
            { text: "Survivre à la traque et courir aussi vite que possible.", type: "rapide" }
        ]
    },
    {
        question: "Si vous êtes pris au piège, comment vous sentez-vous ?",
        options: [
            { text: "Je reste calme et attend une chance de m'échapper.", type: "esquive" },
            { text: "Je fais de mon mieux pour tenir jusqu'à ce que mes alliés viennent.", type: "distracteur" },
            { text: "Je travaille avec mes alliés pour désactiver le piège.", type: "soutien" },
            { text: "Je me bats pour la liberté et l'évasion.", type: "combatif" }
        ]
    },
    {
        question: "Lorsque le tueur s'approche de vous, que faites-vous ?",
        options: [
            { text: "Je reste caché et surveille les mouvements du tueur.", type: "esquive" },
            { text: "Je le défie et essaye de le distraire.", type: "distracteur" },
            { text: "Je cherche à désactiver un piège qui pourrait m'aider.", type: "soutien" },
            { text: "Je prends la fuite dès que je le peux.", type: "rapide" }
        ]
    }
];

let selectedTypes = [];
let currentQuestion = 0;
let playerName = "";
let scores = localStorage.getItem("survivorScores");
scores = scores ? JSON.parse(scores) : [];

function startQuiz() {
    playerName = document.getElementById("playerName").value;
    if (playerName.trim() === "") {
        alert("Veuillez entrer un pseudo !");
        return;
    }

    document.getElementById("name-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    let q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option.text;
        btn.onclick = () => selectOption(option.type);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(type) {
    selectedTypes.push(type);
    console.log("Réponse enregistrée:", type);
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    console.log("Fin du quiz - Affichage du résultat...");
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    if (selectedTypes.length === 0) {
        console.error("Aucune réponse enregistrée !");
        return;
    }

    const typeCount = selectedTypes.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    console.log("Comptage des types:", typeCount);

    const dominantType = Object.keys(typeCount).reduce((a, b) => typeCount[a] > typeCount[b] ? a : b);

    document.getElementById("resultText").textContent = `Vous êtes un tueur de type : ${dominantType}`;
    saveResult(dominantType);
}

function saveResult(type) {
    console.log(`Sauvegarde du résultat: ${playerName} -> ${type}`);
    if (!Array.isArray(scores)) {
        console.warn("⚠️ Correction : `scores` n'était pas un tableau. Réinitialisation.");
        scores = [];
    }

    scores.push({ name: playerName, result: type });

    localStorage.setItem("quizScores", JSON.stringify(scores));
    document.addEventListener("DOMContentLoaded", function() {
        updateResultsTable();
    });
}

function updateResultsTable() {
    console.log("Mise à jour du tableau des résultats...");
    const tableBody = document.getElementById("resultTableBody");
    tableBody.innerHTML = "";

    scores.forEach(entry => {
        const row = `<tr><td>${entry.name}</td><td>${entry.result}</td></tr>`;
        tableBody.innerHTML += row;
    });

    document.getElementById("toggleButton").textContent = `Tableau des résultats (${scores.length})`;
}

document.getElementById("toggleButton").addEventListener("click", function() {
    let resultTab = document.getElementById("resultTab");
    updateResultsTable();
    resultTab.classList.toggle("visible");
});

document.addEventListener("click", function(event) {
    let resultTab = document.getElementById("resultTab");
    if (event.target !== document.getElementById("toggleButton") && resultTab.style.display === "block") {
        resultTab.style.display = "none";
    }
});