//phone menu
let menuBtn = document.querySelector(".menu-btn");
let nav = document.querySelector("header nav");

menuBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("bg-gray-100");
  nav.classList.toggle("max-h-screen");
});
