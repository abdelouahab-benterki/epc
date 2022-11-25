//back to top btn
let backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    backToTop.classList.add("block");
  } else {
    backToTop.classList.remove("block");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
