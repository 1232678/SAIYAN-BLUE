const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const copyright = document.querySelector(".copyright");
// const bignav_ctn = document.querySelector(".big-nav__container");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

copyright.innerHTML = new Date().getFullYear();
