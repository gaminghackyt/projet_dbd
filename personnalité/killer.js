const questions = [
    {
        question: "Comment traquez-vous vos victimes ?",
        options: [
            { text: "Dans l’ombre, silencieusement.", type: "furtif" },
            { text: "En leur mettant une pression constante.", type: "harceleur" },
            { text: "Je leur tends des pièges.", type: "piegeur" },
            { text: "Je fonce sans réfléchir !", type: "brutal" }
        ]
    },
    {
        question: "Quel est votre point fort ?",
        options: [
            { text: "Ma vitesse et mon agilité.", type: "mobilite" },
            { text: "Ma capacité à manipuler leur peur.", type: "psychologique" },
            { text: "Ma patience et mes tactiques.", type: "strategique" },
            { text: "Ma puissance brute.", type: "brutal" }
        ]
    },
    {
        question: "Quel est votre terrain de chasse favori ?",
        options: [
            { text:"Les endrois sombres et confinés.", type: "furtif" },
            { text:"Un espace ouvert où je peux me déplacer rapidement.", type: "mobilite" },
            { text:"Un lieu piégeux et difficile à fuit.", type: "piegeur" },
            { text:"Peu importe, je domine partout.", type: "brutal" }
        ]
    },
    {
        question: "Quel est votre plus grand plaisir ?",
        options: [
            { text: "Suspendre mes proies.", type: "furtif" },
            { text: "Les voir tomber dans mon pièges.", type: "piegeur" },
            { text: "Dominer psychologiquement mes victimes.", type: "psychologique" },
            { text: "Les attraper après une longue poursuite", type: "mobilite" }
        ]
    },
    {
        question: "Que ressentez-vous en voyant un survivant paniqué ?",
        options: [
            { text: "J'adore jouer avec leur peur.", type: "psychologique" },
            { text: "Cela signifie que ma pression fonctionne !", type: "harceleur" },
            { text: "C'est satifaisant de les voir tomber dans mon piège.", type: "piegeur" },
            { text: "Je n'ai pas le temps de les observer, je les frappe !", type: "brutal" }
        ]
    },
    {
        question: "Qu'elle est votre stratégie pour capturer vos proies ?",
        options: [
            { text: "Les effrayer jusqu'à l'erreur.", type: "psychologique" },
            { text: "Les harceler sans relâche.", type: "harceleur" },
            { text: "Les acculer lentement avec mes pièges.", type: "piegeur" },
            { text: "Utiliser ma force brute pour les abattre.", type: "brutal" }
        ]
    },
    {
        question: "Que préférez-vous ?",
        options: [
            { text: "Une approche furtive et imprévisible.", type: "furtif" },
            { text: "Des courses-poursuites intenses.", type: "mobilite" },
            { text: "Jouer avec la tête de mes proies.", type: "psychologique" },
            { text: "Frapper fort et vite.", type: "brutal" }
        ]
    },
    {
        question: "Quel est votre but ultime en tant que tueur ?",
        options: [
            { text: "Jouer avec la peur de mes victimes.", type: "psychologique" },
            { text: "Être un prédateur parfait.", type: "furtif" },
            { text: "Contrôler totalement le terrain.", type: "piegeur" },
            { text: "Faire le plus de dégâts possible.", type: "brutal" }
        ]
    },
    {
        question: "Quelle est votre arme de prédilection ?",
        options: [
            { text: "Une lame tranchante et silencieuse.", type: "furtif" },
            { text: "Un outil imposant et brutal.", type: "brutal" },
            { text: "Des pièges mortels.", type: "piegeur" },
            { text: "Une force psychologique indomptable.", type: "psychologique" }
        ]
    },
    {
        question: "Quelle est votre plus grande faiblesse ?",
        options: [
            { text: "Ma vitesse limitée.", type: "piegeur" },
            { text: "Je peux être repéré trop facilement.", type: "furtif" },
            { text: "Je suis parfois trop impulsif.", type: "brutal" },
            { text: "Si mon plan échoue, je suis perdu.", type: "strategique" }
        ]
    },
    {
        question: "Préférez-vous chasser en groupe ou en solitaire ?",
        options: [
            { text: "Je suis un chasseur solitaire.", type: "furtif" },
            { text: "J’aime contrôler plusieurs zones en même temps.", type: "strategique" },
            { text: "J’isole mes proies avant de les achever.", type: "psychologique" },
            { text: "Je fonce sans réfléchir !", type: "brutal" }
        ]
    },
    {
        question: "Quelle est votre plus grande peur ?",
        options: [
            { text: "Que mes proies m’échappent.", type: "harceleur" },
            { text: "Qu’ils découvrent mes faiblesses.", type: "psychologique" },
            { text: "Que mes pièges soient inutiles.", type: "piegeur" },
            { text: "Aucune peur, je suis invincible !", type: "brutal" }
        ]
    },
    {
        question: "Si un survivant vous nargue, que faites-vous ?",
        options: [
            { text: "Je l’ignore et continue ma traque.", type: "strategique" },
            { text: "Je lui montre qu’il a fait une erreur.", type: "harceleur" },
            { text: "Je prépare une vengeance bien calculée.", type: "psychologique" },
            { text: "Je le charge immédiatement !", type: "brutal" }
        ]
    },
    {
        question: "Quel est votre plus grand plaisir en tant que tueur ?",
        options: [
            { text: "Voir leur peur grandir.", type: "psychologique" },
            { text: "Les piéger un à un.", type: "piegeur" },
            { text: "Les attraper après une longue poursuite.", type: "mobilite" },
            { text: "Les écraser sans pitié !", type: "brutal" }
        ]
    },
];

let scores = JSON.parse(localStorage.getItem("quizScores")) || { furtif: 0, harceleur: 0, piegeur: 0, brutal: 0, mobilite: 0, psychologique: 0, strategique: 0 };
let currentQuestion = 0;

function showQuestion() {
    if (currentQuestion >= questions.length) {
        return showResult();
    }
    
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        btn.onclick = () => selectOption(option.type);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(type) {
    scores[type]++;
    localStorage.setItem("quizScores", JSON.stringify(scores));
    currentQuestion++;
    showQuestion();
}

function showResult() {
    let highestScore = 0;
    let personality = "";
    for (let type in scores) {
        if (scores[type] > highestScore) {
            highestScore = scores[type];
            personality = type;
        }
    }
    document.getElementById("result").textContent = "Votre archétype de tueur est : " + personality;
    toggleResults();
}

function toggleResults(event) {
    const resultTab = document.getElementById("resultTab");
    resultTab.classList.toggle("visible");
    event.stopPropagation();
}

showQuestion();