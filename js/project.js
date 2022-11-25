// fixing iframe

let frame = document.querySelector("iframe");
let link = frame.src.replace(/pub/, "embed");
frame.src = link;
