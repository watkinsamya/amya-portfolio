/* ═══════════════════════════════════════════════════════════════
   AMYA WATKINS PORTFOLIO — script.js
═══════════════════════════════════════════════════════════════ */

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ── NAV: scroll shadow + active link ──────────────────────── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ── NAV: mobile toggle ─────────────────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── SMOOTH SCROLL for anchor links ────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 76; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── ACTIVE NAV LINK on scroll ──────────────────────────────── */
const sections = document.querySelectorAll('section[id], div[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkEls.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => sectionObserver.observe(section));

/* ── STAGGER project cards on scroll ───────────────────────── */
const cards = document.querySelectorAll('.project-card');
cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});
