const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('menu-toggle');

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggle.classList.toggle('rotate');
  });
  function initVantaWhenReady() {
    if (typeof VANTA === 'undefined' || typeof VANTA.DOTS !== 'function') {
      console.log("Waiting for VANTA to be ready...");
      return setTimeout(initVantaWhenReady, 100);
    }
  VANTA.DOTS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x6900ff,
    color2: 0x20ceff,
    backgroundColor: 0x171717,
    size: 3.10,
    spacing: 34.00
  });
});

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.3 });

faders.forEach(el => appearOnScroll.observe(el));


let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scrolling down
    header.style.top = "-90px"; // hides header
  } else {
    // Scrolling up
    header.style.top = "0";
  }

  lastScrollTop = currentScroll;
});
