//chapter number generator

let chapterCount = 0;
let chapterNumbers = document.querySelectorAll(".chapter-number");
chapterNumbers.forEach((chapter) => {
  chapter.textContent = `chapter ${++chapterCount}`;
});

// newChapter btn

let newChapterBtn = document.querySelector(".new-chapter-btn");
let chaptersContainer = document.querySelector(".admin-chapters");
let chapter = document.querySelector(".admin-chapter");

newChapterBtn.addEventListener("click", () => {
  let chapterNode = chapter.cloneNode(true);
  chapterNode.querySelector(
    ".chapter-number"
  ).textContent = `chapter ${++chapterCount}`;
  chapterNode.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  chapterNode.querySelectorAll("textarea").forEach((area) => {
    area.value = "";
  });
  chaptersContainer.appendChild(chapterNode);
});
