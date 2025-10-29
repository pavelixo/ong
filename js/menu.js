const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.setAttribute('aria-expanded', 'false');
toggle.setAttribute('aria-controls', 'primary-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
