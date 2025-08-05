let createNotesBtn = document.querySelector(".notes-btn");
let notesContainer = document.querySelector(".notes-app");
createNotesBtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("container");
  div.innerHTML = ` <i class="fa-solid fa-trash" id="icon"></i>`;
  document.querySelector(".notes-app").appendChild(div);
  // create p
  let p = document.createElement("p");
  p.setAttribute("contenteditable", "true");
  div.appendChild(p);
  // create icon
});
notesContainer.addEventListener("click", (e) => {
  if (e.target.id == "icon") {
    e.target.parentElement.remove();
  }
});
