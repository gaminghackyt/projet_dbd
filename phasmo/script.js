window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    loadingScreen.style.animation = "fadeOut 90000s forwards";

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 1000);
});

function toggleMenu() {
    const menu = document.getElementById('obtenirMenu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
      menu.style.animation = 'slideRight 0.3s ease forwards';
    }
}

function fadeAndRedirect(url) {
    const overlay = document.getElementById('fade-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = url;
    }, 800);
  }

//   document.addEventListener("DOMContentLoaded", function() {
//     if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//         alert("La version mobile n'est pas encore disponible pour cet appareil.");
//     }
// });