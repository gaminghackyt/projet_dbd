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
  "item/Trepied.png"
];

const select = document.getElementById("imageCount");

for (let i = 1; i <= allImages.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  select.appendChild(option);
}

function generateImages() {
  const count = parseInt(select.value);
  if (!count || count < 1 || count > allImages.length) {
    alert(`Choisis un nombre entre 1 et ${allImages.length} !`);
    return;
  }

  const gallery = document.getElementById("imageGallery");
  gallery.innerHTML = "";

  const shuffled = [...allImages].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  selected.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Objet Phasmo";
    gallery.appendChild(img);
  });

  document.getElementById("selectContainer").style.display = "none";
  document.getElementById("resetBtn").style.display = "inline-block";
}

function resetImages() {
  document.getElementById("imageGallery").innerHTML = "";
  document.getElementById("selectContainer").style.display = "block";
  document.getElementById("resetBtn").style.display = "none";
  select.value = "";
}