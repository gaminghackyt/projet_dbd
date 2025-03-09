document.addEventListener("DOMContentLoaded", function () {
    const killerButton = document.getElementById("killer-btn");
    const survivantButton = document.getElementById("survivant-btn");

    function animateButton(button, targetPage) {
        button.style.transition = "transform 0.2s ease";
        button.style.transform = "scale(0.9)";

        setTimeout(() => {
            button.style.transform = "scale(1.1)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
                window.location.href = targetPage;
            }, 200);
        }, 100);
    }

    killerButton.addEventListener("click", function () {
        animateButton(killerButton, "killer.html");
    });

    survivantButton.addEventListener("click", function () {
        animateButton(survivantButton, "survivant.html");
    });
});