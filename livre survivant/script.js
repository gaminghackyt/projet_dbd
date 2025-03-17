let currentAngle = 0;

document.getElementById("next").addEventListener("click", () => {
    currentAngle -= 180;
    document.querySelector(".book").style.transform = `rotateY(${currentAngle}deg)`;
});

document.getElementById("prev").addEventListener("click", () => {
    currentAngle += 180;
    document.querySelector(".book").style.transform = `rotateY(${currentAngle}deg)`;
});