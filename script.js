document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".site-nav a");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  navLinks.forEach((link) => {
    if (link.dataset.page === page) {
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", () => {
      if (nav) {
        nav.classList.remove("open");
      }
    });
  });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
