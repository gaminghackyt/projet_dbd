document.addEventListener("DOMContentLoaded", () => {
  const switchViewBtn = document.getElementById("switchViewBtn");
  const mode1 = document.getElementById("mode1");
  const mode2 = document.getElementById("mode2");
  const leftContent = document.getElementById("leftContent");
  const descriptionBox = document.getElementById("ghostDescription");

  // === 1. Switch entre mode 1 et mode 2 ===
  let mode = 1;

  switchViewBtn.addEventListener("click", () => {
    const isMode1 = mode === 1;

    mode1.style.display = isMode1 ? "none" : "flex";
    mode2.style.display = isMode1 ? "flex" : "none";
    leftContent.style.display = isMode1 ? "none" : "block";
    descriptionBox.style.display = "none"; // Masqué tant qu'aucun fantôme cliqué

    if (!isMode1) {
      descriptionBox.textContent = "Cliquez sur un fantôme pour voir sa description.";
    }

    mode = isMode1 ? 2 : 1;
  });

  // === 2. Fantômes (mode 1) : 3 états ===
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

  // === 3. Preuves : 3 états + filtrage fantômes ===
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

  // === 4. Descriptions (mode 2 uniquement) ===
  const ghostDescriptions = {
    "Esprit": "L'Esprit ne pourra pas chasser pendant 180 secondes après l'encens.",
    "Spectre": "Le Spectre ne marche pas dans le sel. Il peut suivre le joueur.",
    "Fantôme": "Presque invisible en chasse. Il peut suivre le joueur.",
    "Poltergeist": "Peut lancer plusieurs objets à la fois.",
    "Banshee": "Cible un seul joueur à la fois. Elle peut laisser un cri spécial au micro parabolique. Elle peut suivre le joueur ( Ne peux que être en skin feminin ).",
    "Djinn": "Ne coupe pas le courant. Accélère à la vue.",
    "Cauchemar": "N’allume jamais rien. Il chasse uniquement dans le noir.",
    "Revenant": "Très rapide s’il voit un joueur, sinon lent.",
    "Ombre": "Ne chasse pas si le joueur est dans sa salle et ne bouge pas d'objet à côté du joueur.",
    "Démon": "Très agressif, il chassera plus souvent que les autres fantômes. Quand un encens est consomé il ne pouras pas chasser pendant 60 secondes.",
    "Yurei": "Comment le trouver ?",
    "Oni": "Très actif, clignote vite. Fais perdre 25% de santé mental lors d'événement et ne peut pas faire l'événement du soufle.",
    "Yokai": "Il est sourd mdr.",
    "Hantu": "Rapide dans le froid. N'accélère pas à la vue du joueur.",
    "Goryo": "Ne peux pas changer de salle, sortir de sa salle et commencer une chasse en dehors de sa salle.",
    "Myling": "Très silencieux en déplacement. Il peut faire des cris au microphone parabolique plus souvent que les autres fantômes.",
    "Onryo": "Craint les flammes. Chasse après 3 extinctions. Ne peut pas chasser si une flamme est allumé.",
    "Les Jumeaux": "Le vrai Jumeaux et légèrement plus lent qu'un fantôme basic et le faux Jumeaux légèrement plus rapide qu'un fantôme basic.",
    "Raiju": "Rapide près d’électroniques.",
    "Obake": "Change d’apparence en chasse.",
    "Le Mimic": "Imite les autres. A toujours un orbe.",
    "Moroï": "Plus la santé mentale est basse plus il est rapide. Ralentit en prennant des médicaments.",
    "Deogen": "Toujours sur votre trace. Il est très rapide et deviens très lent à proximité du joueur.",
    "Thayé": "Rapide jeune, ralentit avec le temps. Il ne peut pas accélèrer."
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