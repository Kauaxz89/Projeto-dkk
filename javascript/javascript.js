// -------------------------------
// 1. Destacar página atual no menu
// -------------------------------
const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".navbar a");

menuLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Adiciona um pequeno efeito visual à classe active
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
.navbar a.active {
  color: #e50914;
  text-shadow: 0 0 10px #e50914;
}
.navbar a.active::after {
  width: 100%;
}
</style>
`
);


// -------------------------------
// 2. Fade-in dos elementos ao rolar
// -------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".secao").forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

// CSS inserido automaticamente:
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
.hidden {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}
.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
`
);


// -------------------------------
// 3. Navbar que muda ao rolar
// -------------------------------
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// CSS do efeito:
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
.navbar.scrolled {
  background: rgba(0, 0, 0, 0.95);
  padding: 12px 40px;
  transition: 0.3s;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
}
</style>
`
);
