let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("nav");
let closeBtn = document.querySelector(".close-panel");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("-translate-x-96");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("-translate-x-96");
});
