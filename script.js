const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal sections as they enter the viewport.
const revealTargets = document.querySelectorAll('.section-kicker, .feature-card, .manifesto-grid, .feature-heading, .experience-grid, .download-options, .faq-layout');
revealTargets.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('visible'));
}

// The first release is not published yet. Keep download controls intentionally disabled.
// Replace href and remove the disabled class/aria-disabled when official release URLs are ready.
document.querySelectorAll('.download-button.disabled').forEach(button => {
  button.addEventListener('click', event => event.preventDefault());
});
