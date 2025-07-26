let body = document.querySelector("body");
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach(changeColor);
function changeColor (box) {
  box.addEventListener("click", (e) => {
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
}
