// Initialize Particles.js background
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 60 },
    "size": { "value": 3 },
    "move": { "speed": 2 },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff" },
    "color": { "value": "#ffffff" }
  }
});

// Typed.js - Hero headline
new Typed('#typed', {
  strings: ["Explore Space.", "Discover Planets.", "The Final Frontier."],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// AOS - Animate on scroll
AOS.init({
  duration: 1000,
  once: true
});

// VanillaTilt - 3D tilt effect
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
  speed: 400,
});
