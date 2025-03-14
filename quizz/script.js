document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { text: "Quelle est la vitesse de base d'un tueur ?", answers: ["4.4 m/s", "4.6 m/s", "4.8 m/s", "5.0 m/s"], correct: 1 },
        { text: "Combien de palettes y a-t-il en moyenne sur une map ?", answers: ["10-12", "12-14", "14-16", "16-18"], correct: 2 },
        { text: "Quel tueur possède le pouvoir 'Chains of Hate' ?", answers: ["The Blight", "The Deathslinger", "The Oni", "The Plague"], correct: 1 },
        { text: "Quel est le vrai nom du Tueur 'Le Spectre' ?", answers: ["Philip Ojomo", "Max Thompson Jr.", "Evan MacMillan", "Frank Morrison"], correct: 0 },
        { text: "Quel personnage a vendu son âme à l’Entité en premier ?", answers: ["La Chasseuse", "Le Piégeur", "L'Esprit", "Le Clown"], correct: 1 },
        { text: "Quel Survivant a été enlevé par l’Entité alors qu’il fuyait un procès ?", answers: ["Jonah Vasquez", "Ace Visconti", "Felix Richter", "Jeff Johansen"], correct: 1 },
        { text: "Quelle tueuse a été abandonnée dans la nature par sa mère ?", answers: ["L'Infirmière", "L'Esprit", "La Chasseuse", "L'épidemie"], correct: 2 },
        { text: "Quel est le lien entre l’Artiste et son frère Pablo ?", answers: ["Il est devenu un Tueur pour l’Entité", "Il l’a trahie et livrée à l’Entité", "Il est mort en tentant de la sauver", "Il est toujours en vie et la cherche"], correct: 2 },
        { text: "Quel Survivant possède la perk 'Adrenaline' ?", answers: ["Dwight Fairfield", "Claudette Morel", "David King", "Meg Thomas"], correct: 3 },
        { text: "Quelle perk permet à un survivant de voir les coffres et les générateurs à travers les murs ?", answers: ["Clairvoyance", "Intuition de l'Inspecteur", "Déjà Vu", "Petit Gibier"], correct: 2 },
        { text: "Quelle perk de tueur réduit la vitesse de réparation des générateurs après un accrochage ?", answers: ["Ruine", "Intervention Impure", "Surveillance", "Le Tour est Joué"], correct: 3 },
        { text: "Quelle perk de Survivant permet d’augmenter la vitesse de guérison après un sauvetage ?", answers: ["Nous Y Arriverons", "Auto-Traitement", "Boon: Cercle de Soins", "Volonté de Fer"], correct: 0 },
        { text: "Quelle perk de Tueur force les Survivants à hurler lorsqu’ils entrent dans un certain rayon d’action ?", answers: ["Présence perturbante", "Peur Contagieuse", "Piste de Souffrance", "Nulle Part Où Se Cacher"], correct: 1 },
        { text: "Lequel de ces Tueurs peut voir l’aura des Survivants lorsqu’ils sont blessés ?", answers: ["La Légion", "Le Docteur", "Le Spectre", "Le Fléau"], correct: 3 },
        { text: "Quel est le pouvoir unique de La Harpie ?", answers: ["Piéger des zones avec des illusions", "Se téléporter à des endroits précis", "Poser des totems maudits", "Voir les Survivants à travers les murs"], correct: 0 },
        { text: "Quel Tueur peut dash en avant à toute vitesse et infliger des dégâts ?", answers: ["Le Fléau", "Le Cauchemar", "Le Démogorgon", "Le Chevalier"], correct: 2 },
        { text: "Quel Tueur a un corbeau posé sur l’épaule dans son modèle de base ?", answers: ["Le Chevalier", "L'Artiste", "La Marchande de Crâne", "La Silhouette"], correct: 1 },
        { text: "Quelle est la particularité du Pouvoir du Lance-Mort ?", answers: ["Il peut se téléporter sur toute la carte", "Il pose des pièges explosifs", "Il tire avec un fusil à longue portée", "Il devient invisible après une attaque"], correct: 2 },
        { text: "Quel Tueur est inspiré d’un personnage de Resident Evil ?", answers: ["La Maîtresse des Molosses", "Le Seigneur des Ténèbres", "L'Inconnu", "Le Némésis"], correct: 3 },
        { text: "Quelle tueuse a un pouvoir basé sur des drones ?", answers: ["La Liche", "Le Brave Gars", "La Marchande de Crâne", "La Singularité"], correct: 2 }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResult();
            return;
        }

        const questionData = questions[currentQuestionIndex];
        document.getElementById("question-text").innerText = questionData.text;

        const answersDiv = document.getElementById("answers");
        answersDiv.innerHTML = "";

        questionData.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.innerText = answer;
            button.classList.add("answer-button");
            button.addEventListener("click", () => checkAnswer(index));
            answersDiv.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        console.log("Réponse sélectionnée :", selectedIndex);
        console.log("Réponse correcte attendue :", questions[currentQuestionIndex].correct);
    
        if (selectedIndex === questions[currentQuestionIndex].correct) {
            score++;
        }
    
        const questionData = questions[currentQuestionIndex];
        const answerButtons = document.querySelectorAll(".answer-button");
        
        const correctSound = new Audio("correct.mp3");
        const wrongSound = new Audio("wrong.mp3");
    
        answerButtons.forEach((button, index) => {
            button.disabled = true;
            if (index === questionData.correct) {
                button.style.backgroundColor = "green";
                if (index === selectedIndex) correctSound.play();
            } else if (index === selectedIndex) {
                button.style.backgroundColor = "red";
                wrongSound.play();
            }
        });
    
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 1500);
    }

    function showResult() {
        console.log("Score final calculé :", score);
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("score-container").style.display = "block";
        document.getElementById("final-score").innerText = `Score final : ${score} / ${questions.length}`;
        updateHighScores();
    }

    function updateHighScores() {
        const playerName = prompt("Entrez votre pseudo :");
        if (playerName) {
            highScores.push({ name: playerName, score });
            highScores.sort((a, b) => b.score - a.score);
            highScores = highScores.slice(0, 5);
            localStorage.setItem("highScores", JSON.stringify(highScores));
            displayHighScores();
        }
    }

    function displayHighScores() {
        const highScoresList = document.getElementById("leaderboard");
        let displayScores = highScores.slice(0, 5);
    
        while (displayScores.length < 5) {
            displayScores.push({ name: "", score: "" });
        }
    
        highScoresList.innerHTML = displayScores.map(entry => `<li>${entry.name} : ${entry.score}</li>`).join("");
    }

    document.getElementById("restart-button").addEventListener("click", function () {
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById("quiz-container").style.display = "block";
        document.getElementById("score-container").style.display = "none";
        showQuestion();
    });

    displayHighScores();
    showQuestion();
});