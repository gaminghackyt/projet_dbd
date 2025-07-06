const allImages = [
  "item/3Fte3.png",
  "item/Cam.png",
  "item/CapteurSonore.png",
  "item/Crucifix.png",
  "item/DetecteurDeMouvement.png",
  "item/DOTS.png",
  "item/Encens.png",
  "item/LampeU.png",
  "item/LecteurEMF.png",
  "item/Livre.png",
  "item/LumiereFeu.png",
  "item/Mentale.png",
  "item/MicrophoneParabolique.png",
  "item/Sel.png",
  "item/soundRecorder.png",
  "item/SpiritBox.png",
  "item/Thermo.png",
  "item/Trepied.png",
  "item/Allumeur.png",
  "item/AppareilPhoto.png"
];

let activeImages = [...allImages];

const select = document.getElementById("imageCount");
const resetBtn = document.getElementById("resetBtn");
const camera = document.getElementById("cameraContainer");
const flash = document.getElementById("flash");
const sound = document.getElementById("cameraSound");
const gallery = document.getElementById("imageGallery");
const selectContainer = document.getElementById("selectContainer");
const welcomeText = document.getElementById("welcomeText");

const settingsButton = document.querySelector(".option");
const settingsMenu = document.getElementById("settingsMenu");
const checkboxList = document.getElementById("checkboxList");

const showEvidenceBtn = document.getElementById("showEvidenceBtn");
const journalPage = document.getElementById("journalPage");
const mainContent = document.getElementById("mainContent");

// 📸 Générer les images
function generateImages() {
  const count = parseInt(select.value);
  if (!count || count < 1 || count > activeImages.length) {
    alert(`Choisis un nombre entre 1 et ${activeImages.length} !`);
    return;
  }

  welcomeText.style.display = "none";
  camera.classList.add("active");

  setTimeout(() => {
    flash.classList.add("active");
    sound.currentTime = 0;
    sound.play();
  }, 500);

  setTimeout(() => {
    flash.classList.remove("active");
  }, 700);

  setTimeout(() => {
    camera.classList.remove("active");
    gallery.innerHTML = "";

    const shuffled = [...activeImages].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    selected.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Objet Phasmo";
      img.style.animationDelay = `${index * 0.1}s`;
      gallery.appendChild(img);
    });

    selectContainer.style.display = "none";
    resetBtn.style.display = "inline-block";
  }, 1200);
}

// 🔄 Réinitialiser
function resetImages() {
  gallery.innerHTML = "";
  select.value = "";
  selectContainer.style.display = "block";
  resetBtn.style.display = "none";
  welcomeText.style.display = "block";
}

// ⚙ Affichage du menu paramètres avec animation
settingsButton.addEventListener("click", () => {
  mainContent.classList.add("fade-out");

  setTimeout(() => {
    mainContent.style.display = "none";
    mainContent.classList.remove("fade-out");

    settingsMenu.style.display = "block";
    settingsMenu.classList.add("fade-in");

    setTimeout(() => settingsMenu.classList.remove("fade-in"), 600);

    createImageSelector();
  }, 600);
});

// ❌ Fermer paramètres
function closeSettings() {
  settingsMenu.classList.add("fade-out");

  setTimeout(() => {
    settingsMenu.style.display = "none";
    settingsMenu.classList.remove("fade-out");

    mainContent.style.display = "block";
    mainContent.classList.add("fade-in");

    setTimeout(() => mainContent.classList.remove("fade-in"), 600);
  }, 600);
}

// ✅ Créer les images sélectionnables dans les paramètres
function createImageSelector() {
  checkboxList.innerHTML = "";

  allImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Objet sélectionnable";

    if (!activeImages.includes(src)) {
      img.classList.add("inactive");
    }

    img.addEventListener("click", () => {
      if (activeImages.includes(src)) {
        activeImages = activeImages.filter(item => item !== src);
        img.classList.add("inactive");
      } else {
        activeImages.push(src);
        img.classList.remove("inactive");
      }
    });

    checkboxList.appendChild(img);
  });
}

// 📄 Affichage du Journal avec animation
showEvidenceBtn.addEventListener("click", () => {
  mainContent.classList.add("fade-out");

  setTimeout(() => {
    mainContent.style.display = "none";
    mainContent.classList.remove("fade-out");

    journalPage.style.display = "block";
    journalPage.classList.add("fade-in");

    setTimeout(() => journalPage.classList.remove("fade-in"), 600);
  }, 600);
});

// ❌ Fermer le journal
function closeJournal() {
  journalPage.classList.add("fade-out");

  setTimeout(() => {
    journalPage.style.display = "none";
    journalPage.classList.remove("fade-out");

    mainContent.style.display = "block";
    mainContent.classList.add("fade-in");

    setTimeout(() => mainContent.classList.remove("fade-in"), 600);
  }, 600);
}