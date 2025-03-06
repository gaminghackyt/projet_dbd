document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { text: "Que fais-tu quand tu entends un bruit bizarre ?", answers: ["Je cours", "Je vais voir"], type: ["survivant", "killer"] },
        { text: "Quelle est ta plus grande peur ?", answers: ["Me faire attraper", "Ne pas attraper ma proie"], type: ["survivant", "killer"] },
        { text: "Si tu devais choisir une arme, ce serait… ?", answers: ["Une lampe torche", "Un couteau"], type: ["survivant", "killer"] },
        { text: "Un inconnu te tend la main, tu...", answers: ["La serres", "Lui casses la main"], type: ["survivant", "killer"] },
        { text: "Tu es seul dans une forêt la nuit, tu...", answers: ["Cherches une cachette", "Cherches une proie"], type: ["survivant", "killer"] },
        { text: "Tu entends un bruit derrière toi, que fais-tu ?", answers: ["Je cours sans me retourner", "Je m'arrête et écoute attentivement"], type: ["survivant", "killer"] },
        { text: "Comment réagis-tu face à l’inconnu ?", answers: ["J’essaie de l’éviter", "J’en fais ma proie"], type: ["survivant", "killer"] },
        { text: "Ton objectif principal dans une situation tendue ?", answers: ["Fuir et survivre", "Eliminer toute menace"], type: ["survivant", "killer"] },
        { text: "Tu trouves une arme sur le sol, que fais-tu ?", answers: ["Je la prends pour me défendre", "Je la prends pour attaquer"], type: ["surviant", "killer"] },
        { text: "Tu es caché, mais quelqu’un t’appelle à l’aide…", answers: ["Je vais l’aider", "Je l’ignore, chacun pour soi"], type: ["survivant", "killer"] },
        { text: "La nuit tombe et tu es seul dans un village abandonné…", answers: ["Je cherche un abri sécurisé", "Je pars traquer ce qui rôde"], type: ["survivant", "killer"] },
        { text: "Tu repères des empreintes au sol…", answers: ["Je les évite et reste discret", "Je les suis à la trace"], type: ["survivant", "killer"] },
        { text: "Un cri résonne au loin…", answers: ["Je fais demi-tour", "Je me dirige vers le cri"], type: ["survivant", "killer"] },
        { text: "Tu es blessé, mais le danger n’est pas loin…", answers: ["Je cherche un endroit pour me soigner", "Je continue malgré la douleur"], type: ["survivant", "killer"] },
        { text: "Un générateur est presque réparé…", answers: ["Je le finis rapidement", "Je le sabote pour ralentir l’ennemi"], type: ["survivant", "killer"] },
        { text: "Un allié est accroché à un crochet…", answers: ["Je vais le sauver", "Je l’observe souffrir"], type: ["survivant", "killer"] },
        { text: "Tu surprends un ennemi désarmé…", answers: ["Je prends la fuite", "J’en profite pour l’attaquer"], type: ["survivant", "killer"] },
        { text: "Une porte de sortie s’ouvre, mais un ami est en danger…", answers: ["Je vais l’aider", "Je pars sans me retourner"], type: ["survivant", "killer"] },
        { text: "Tu trouves une cachette idéale…", answers: ["Je m’y installe discrètement", "Je la détruis pour éviter que d’autres s’y cachent"], type: ["survivant", "killer"] },
        { text: "Un totem maudit brille dans un coin…", answers: ["Je le cleanse immédiatement", "Je le protège et guette ceux qui l’approchent"], type: ["survivant", "killer"] },
        { text: "Quel est ton plus grand avantage ?", answers: ["Ma capacité à me cacher", "Ma force et ma traque"], type: ["survivant", "killer"] },
        { text: "Ton premier réflexe dans un environnement inconnu ?", answers: ["Repérer les meilleures cachettes", "Détecter les faiblesses des autres"], type: ["survivant", "killer"] },
        { text: "Quel est ton équipement de prédilection ?", answers: ["Une trousse de soin", "Une machette bien affûtée"], type: ["survivant", "killer"] },
        { text: "Un corbeau s’envole devant toi…", answers: ["Je reste immobile pour ne pas attirer l’attention", "Je me dirige immédiatement vers la zone"], type: ["survivant", "killer"] },
        { text: "Si tu devais choisir une compétence spéciale…", answers: ["Courir plus vite sous la pression", "Repérer les battements de cœur des autres"], type: ["survivant", "killer"] },
        { text: "Une lumière vive t’éblouit soudainement…", answers: ["Je recule et me protège les yeux", "Je continue en forçant le passage"], type: ["survivant", "killer"] },
        { text: "Comment réagis-tu face à une blessure ?", answers: ["Je cherche à la soigner", "Je l’ignore et poursuis mon objectif"], type: ["survivant", "killer"] },
        { text: "Un choix difficile : tuer ou épargner ?", answers: ["Je choisis d’épargner", "Je n’hésite pas à tuer"], type: ["survivant", "killer"] },
        { text: "Quel est ton rapport au bruit ?", answers: ["J’essaie d’en faire le moins possible", "J’écoute attentivement pour repérer ma proie"], type: ["survivant", "killer"] },
        { text: "Tu es dans un lieu inconnu…", answers: ["J’analyse mon environnement pour m’adapter", "Je cherche immédiatement une cible"], type: ["survivant", "killer"] },
        { text: "Le sang sur tes mains, ça te dérange ?", answers: ["Je panique et cherche à m’en débarrasser", "C’est une preuve de mon triomphe"], type: ["survivant", "killer"] },
        { text: "Tu surprends quelqu’un qui fouille un coffre…", answers: ["Je l’aide à récupérer du matériel", "Je l’attaque avant qu’il ne trouve quelque chose d’utile"], type: ["survivant", "killer"] },
        { text: "Un adversaire est sur le point de s’échapper…", answers: ["Je cherche un autre moyen de fuir aussi", "Je fonce pour le rattraper avant qu’il parte"], type: ["survivant", "killer"] },
        { text: "Tu es face à ton ennemi, que fais-tu ?", answers: ["Je tente une diversion pour fuir", "Je l’élimine immédiatement"], type: ["survivant", "killer"] },
        { text: "Si tu devais incarner un rôle dans un film d’horreur…", answers: ["Le survivant rusé qui échappe au tueur", "Le monstre qui traque sans relâche"], type: ["survivant", "killer"] }
    ];

    let shuffledQuestions = [];
    let currentQuestionIndex = 0;
    let survivantPoints = 0;
    let killerPoints = 0;

    function startQuiz() {
        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 35);
        currentQuestionIndex = 0;
        survivantPoints = 0;
        killerPoints = 0;
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex >= shuffledQuestions.length) {
            showResult();
            return;
        }

        const questionData = shuffledQuestions[currentQuestionIndex];
        document.getElementById("question-text").innerText = questionData.text;
        document.getElementById("question-counter").innerText = `Question ${currentQuestionIndex + 1} / 35`;

        const answersDiv = document.getElementById("answers");
        answersDiv.innerHTML = "";

        questionData.answers.forEach((answer, index) => {
            const label = document.createElement("label");
            console.log("Réponse enregistrée :", questionData.answers[index], "=> Type:", questionData.type[index]);
            label.innerHTML = `<input type="radio" name="answer" value="${questionData.type[index]}"> ${answer}`;
            answersDiv.appendChild(label);
            answersDiv.appendChild(document.createElement("br"));
        });
    }

    document.getElementById("quiz-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedAnswer = document.querySelector("input[name='answer']:checked");
        if (!selectedAnswer) {
            alert("Sélectionne une réponse !");
            return;
        }

        if (selectedAnswer.value === "survivant") {
            survivantPoints++;
        } else {
            killerPoints++;
        }

        currentQuestionIndex++;
        showQuestion();
    });

    function showResult() {
        let resultText = "";
        let resultImg = "";

        if (survivantPoints > killerPoints) {
            resultText = "🏃‍♂️ Tu es un Survivant ! Cache-toi bien et trouve une sortie avant qu'il ne soit trop tard.";
            resultImg = "survivant.png";
        } else {
            resultText = "🔪 Tu es un Killer ! Rien ne peut t’arrêter, traque et élimine tes proies sans pitié.";
            resultImg = "killer.png";
        }

        document.getElementById("result-img").src = resultImg;
        document.getElementById("result-text").innerText = resultText;
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result-container").style.display = "block";
    }

    window.restartQuiz = function() {
        document.getElementById("quiz").style.display = "block";
        document.getElementById("result-container").style.display = "none";
        startQuiz();
    };

    startQuiz();
});