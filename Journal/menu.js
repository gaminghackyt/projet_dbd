document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("introScreen");
  const mainContent = document.querySelector(".book-container");
  const bookClosed = document.getElementById("bookClosed");
  const bookOpen = document.getElementById("bookOpen");
  const animatedText = document.querySelector(".animated-text");

  bookClosed.addEventListener("click", () => {
    console.log("Clicked on bookClosed");

    bookClosed.style.opacity = "0";
    bookOpen.style.opacity = "1";

    setTimeout(() => {
      introScreen.classList.add("hidden");

      mainContent.classList.remove("hidden");
      mainContent.style.display = "flex";
      mainContent.style.color = "white";

      leftContent.style.display = "block";
      mode1.style.display = "flex";
      mode2.style.display = "none";
    }, 500);
  });

  const switchViewBtn = document.getElementById("switchViewBtn");
  const mode1 = document.getElementById("mode1");
  const mode2 = document.getElementById("mode2");
  const leftContent = document.getElementById("leftContent");
  const descriptionBox = document.getElementById("ghostDescription");

  let mode = 1;
  switchViewBtn.addEventListener("click", () => {
    const isMode1 = mode === 1;

    mode1.style.display = isMode1 ? "none" : "flex";
    mode2.style.display = isMode1 ? "flex" : "none";
    leftContent.style.display = isMode1 ? "none" : "block";
    descriptionBox.style.display = "none";

    if (!isMode1) {
      descriptionBox.textContent = "Cliquez sur un fantôme pour voir sa description.";
    }

    mode = isMode1 ? 2 : 1;
  });

  const ghosts = document.querySelectorAll(".ghost-list li");

  ghosts.forEach(li => {
    li.dataset.state = "0";
    li.addEventListener("click", () => {
      let state = parseInt(li.dataset.state);
      if ((state + 1) % 3 === 1) {
        ghosts.forEach(other => {
          if (other !== li && other.dataset.state === "1") {
            other.dataset.state = "0";
            other.classList.remove("selected", "crossed");
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

  const evidenceButtons = document.querySelectorAll(".evidence");
  const allGhosts = document.querySelectorAll(".ghost-list li");

  const ghostProofs = {
    "Esprit": ["EMF 5", "Écriture", "Spirit Box"],
    "Spectre": ["DOTS", "Empreintes", "Température"],
    "Fantôme": ["DOTS", "Orbe", "Écriture"],
    "Poltergeist": ["Écriture", "Spirit Box", "Empreintes"],
    "Banshee": ["DOTS", "Empreintes", "Orbe"],
    "Djinn": ["EMF 5", "Empreintes", "Température"],
    "Cauchemar": ["Écriture", "Orbe", "Spirit Box"],
    "Revenant": ["Écriture", "Orbe", "Température"],
    "Ombre": ["EMF 5", "Écriture", "DOTS"],
    "Démon": ["Écriture", "Température", "Empreintes"],
    "Yurei": ["Orbe", "Température", "DOTS"],
    "Oni": ["EMF 5", "DOTS", "Température"],
    "Yokai": ["Orbe", "DOTS", "Spirit Box"],
    "Hantu": ["Température", "Empreintes", "Orbe"],
    "Goryo": ["EMF 5", "DOTS", "Empreintes"],
    "Myling": ["EMF 5", "Écriture", "Empreintes"],
    "Onryo": ["Température", "Spirit Box", "Orbe"],
    "Les Jumeaux": ["EMF 5", "Écriture", "Spirit Box"],
    "Raiju": ["EMF 5", "Orbe", "DOTS"],
    "Obake": ["Empreintes", "Orbe", "EMF 5"],
    "Le Mimic": ["Spirit Box", "Empreintes", "Température"],
    "Moroï": ["Spirit Box", "Écriture", "Température"],
    "Deogen": ["Spirit Box", "Écriture", "DOTS"],
    "Thayé": ["DOTS", "Orbe", "Écriture"]
  };

  evidenceButtons.forEach(button => {
    button.dataset.state = "0";

    button.addEventListener("click", () => {
      let state = parseInt(button.dataset.state);
      button.dataset.state = ((state + 1) % 3).toString();

      button.classList.remove("selected", "crossed");
      if (button.dataset.state === "1") button.classList.add("selected");
      else if (button.dataset.state === "2") button.classList.add("crossed");

      filterGhostsByProofs();
    });
  });

  function filterGhostsByProofs() {
    const selected = [...evidenceButtons].filter(b => b.dataset.state === "1").map(b => b.dataset.proof);
    const excluded = [...evidenceButtons].filter(b => b.dataset.state === "2").map(b => b.dataset.proof);

    allGhosts.forEach(li => {
      const name = li.textContent.trim();
      const hasAllSelected = selected.every(p => ghostProofs[name]?.includes(p));
      const hasAnyExcluded = excluded.some(p => ghostProofs[name]?.includes(p));
      const visible = (selected.length === 0 && excluded.length === 0) || (hasAllSelected && !hasAnyExcluded);
      li.style.opacity = visible ? "1" : "0.3";
    });
  }
  
  const ghostDescriptions = {
    "Esprit": "L'Esprit ne pourra pas chasser pendant 180 secondes après l'encens.",
    "Spectre": "Le Spectre ne marche pas dans le sel. Il peut suivre le joueur.",
    "Fantôme": "Presque invisible en chasse. Il peut suivre le joueur.",
    "Poltergeist": "Peut lancer plusieurs objets à la fois.",
    "Banshee": "Cible un seul joueur à la fois. Cri spécial au micro parabolique.",
    "Djinn": "Ne coupe pas le courant. Accélère à la vue.",
    "Cauchemar": "N’allume jamais rien. Chasse uniquement dans le noir.",
    "Revenant": "Très rapide s’il voit un joueur, sinon lent.",
    "Ombre": "Ne chasse pas si le joueur est dans sa salle.",
    "Démon": "Très agressif. Encens = 60s de sécurité.",
    "Yurei": "Comment le trouver ?",
    "Oni": "Très actif, clignote vite. Pas de souffle.",
    "Yokai": "Il est sourd mdr.",
    "Hantu": "Rapide dans le froid. N'accélère pas à la vue.",
    "Goryo": "Ne change pas de salle. Chasse uniquement là.",
    "Myling": "Très silencieux. Plus de cris au micro parabolique.",
    "Onryo": "Craint les flammes. Chasse après 3 extinctions.",
    "Les Jumeaux": "Un lent, un rapide.",
    "Raiju": "Rapide près d’électroniques.",
    "Obake": "Change d’apparence en chasse.",
    "Le Mimic": "Imite les autres. A toujours un orbe.",
    "Moroï": "Plus rapide si santé mentale basse.",
    "Deogen": "Toujours sur vous. Rapide puis lent à proximité.",
    "Thayé": "Rapide jeune, ralentit avec le temps."
  };

  document.querySelectorAll("#mode2 .ghost-list-info li").forEach(li => {
    li.addEventListener("click", () => {
      const name = li.textContent.trim();
      const description = ghostDescriptions[name] || "Pas de description disponible.";
      descriptionBox.textContent = description;
      descriptionBox.style.display = "block";
    });
  });
});