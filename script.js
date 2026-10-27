const header = document.getElementById('siteHeader');
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

const syncHeader = () => header.classList.toggle('scrolled', window.scrollY > 30);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden') === false;
  menuButton.setAttribute('aria-expanded', String(open));
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -35px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
