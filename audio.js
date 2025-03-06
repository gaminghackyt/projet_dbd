document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-audio");
    const soundToggleBtn = document.getElementById("toggle-sound");

    if (!audio || !soundToggleBtn) {
        console.error("Erreur : Les éléments audio ou bouton n'existent pas.");
        return;
    }

    const soundState = localStorage.getItem("sound") || "off";

    if (soundState === "on") {
        audio.play();
        soundToggleBtn.textContent = "🔇 Couper le son";
    }

    soundToggleBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            soundToggleBtn.textContent = "🔇 Couper le son";
            localStorage.setItem("sound", "on");
        } else {
            audio.pause();
            soundToggleBtn.textContent = "🔊 Activer le son";
            localStorage.setItem("sound", "off");
        }
    });
});