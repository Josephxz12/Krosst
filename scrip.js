// Cargar confeti al entrar a la página
window.onload = function () {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });

  // O seguir lanzando por unos segundos
  let duration = 3 * 1000;
  let end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
