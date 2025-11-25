// Navegação suave entre as seções
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Efeito simples de destaque no menu
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let scrollPos = window.scrollY + 200;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      links.forEach(a => a.classList.remove('active'));
      const id = sec.getAttribute('id');
      document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
    }
  });
});
