//course colapse
let colapses = document.querySelectorAll(".chapter-colapse");

colapses.forEach((colapse) => {
  colapse.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("rotate-180");
    let chapterContent = e.currentTarget.previousElementSibling;
    chapterContent.classList.toggle("max-h-60");
  });
});
