document.addEventListener("DOMContentLoaded", () => {
  // Vanta animated background
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    color: 0x4b2e83,
    backgroundColor: 0x151515
  });

  // Theme Toggle with localStorage
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
 
  // Menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('rotate');
  });

  // Smart hide/reveal header
  let lastScroll = 0;
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    header.style.top = (current > lastScroll && current > 100) ? '-80px' : '0';
    current > 50
      ? header.classList.add('scrolled')
      : header.classList.remove('scrolled');
    lastScroll = current;
  });

  // Scroll-triggered fade-ins
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('appear');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  faders.forEach(el => observer.observe(el));
});
