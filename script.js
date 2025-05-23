window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    loadingScreen.style.animation = "fadeOut 90000s forwards";

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 1000);
});

// document.addEventListener("DOMContentLoaded", function() {
//     if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//         alert("La version mobile n'est pas encore disponible pour cet appareil.");
//     }
// });