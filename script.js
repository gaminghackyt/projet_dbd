window.addEventListener("load", function() {
    const loadingScreen = this.document.getElementById("loading-screen");
    const mainContent = this.document.getElementById("main-content");

    loadingScreen.style.animation = "fadeOut 90000s forwards";

    this.setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 1000);
});