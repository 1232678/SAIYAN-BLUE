const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const copyright = document.querySelector(".copyright");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

copyright.innerHTML = new Date().getFullYear();
