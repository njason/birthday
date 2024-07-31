// Trigger confetti animation
function launchConfetti() {
  var duration = 2 * 1000; // Duration of each burst
  var end = Date.now() + duration;

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

    // Schedule next burst
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    } else {
      setTimeout(launchConfetti, 500); // Restart confetti burst after a short delay
    }
  }());
}

// Launch confetti when the page loads
window.onload = launchConfetti;
