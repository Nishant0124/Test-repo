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
});
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    links: { enable: true, color: "#ffffff" },
    move: { enable: true, speed: 2 },
    size: { value: 3 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  background: { color: "#0d0d0d" }
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
