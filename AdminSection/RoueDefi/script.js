const options = [
    "Tarot Surprise",
    "Mur de la mort",
    "Difficulté aléatoire",
    "Photo Surprise",
    "Chasse unique",
    "Map aléatoire",
    "Sans sprint",
    "Game parfaite",
    "Sans preuve",
    "Cauchemar du pauvre",
    "Le pari gagnant",
    "Sans électronique",
    "Le tchat est mes oreilles",
    "Voyelles maudites",
    "5 minutes pour survivres",
    "Le dé maudit"
];

function drawWheel() {
      ctx.clearRect(0, 0, size, size);

      options.forEach((option, i) => {
        const angle = startAngle + i * arc;

        // Couleur alternée
        ctx.fillStyle = i % 2 === 0 ? "#f39c12" : "#e67e22";

        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, angle, angle + arc);
        ctx.closePath();
        ctx.fill();

        // Texte
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(angle + arc / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "20px Arial";
        ctx.fillText(option, radius - 10, 10);
        ctx.restore();
      });

      // Flèche
      ctx.fillStyle = "#e74c3c";
      ctx.beginPath();
      ctx.moveTo(radius - 20, radius - (radius + 10));
      ctx.lineTo(radius + 20, radius - (radius + 10));
      ctx.lineTo(radius, radius - (radius - 20));
      ctx.closePath();
      ctx.fill();
    }

    // 🎡 Faire tourner la roue
    function spin() {
      if (spinning) return;
      spinning = true;

      let spinTime = 0;
      let spinTimeTotal = Math.random() * 3000 + 4000; // entre 4 et 7 secondes
      let spinAngleStart = Math.random() * 10 + 10;

      function rotate() {
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
          stopRotate();
          return;
        }

        let easeOut = easeOutFunc(spinTime, 0, spinAngleStart, spinTimeTotal);
        startAngle += (easeOut * Math.PI) / 180;
        drawWheel();
        requestAnimationFrame(rotate);
      }

      rotate();
    }

    // Fonction easing pour ralentir
    function easeOutFunc(t, b, c, d) {
      let ts = (t /= d) * t;
      let tc = ts * t;
      return b + c * (tc + -3 * ts + 3 * t);
    }

    // Quand la roue s’arrête
    function stopRotate() {
      spinning = false;
      const degrees = (startAngle * 180) / Math.PI + 90;
      const arcd = (arc * 180) / Math.PI;
      const index = Math.floor((360 - (degrees % 360)) / arcd) % options.length;

      document.getElementById("result").textContent =
        "🎉 Résultat : " + options[index];
    }

    drawWheel();