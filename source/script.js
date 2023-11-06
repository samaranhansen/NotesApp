const noteContainer = document.getElementById("note-container");
const newNote = document.getElementById("new-note");
let notes = document.getElementById("input-box");

function addNewNote(event) {
  event.preventDefault();
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "inputBox";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "../media/trash-solid.svg";
  img.fill = "#b2b2b2";
  noteContainer.appendChild(inputBox).appendChild(img);
}

newNote.addEventListener("click", addNewNote);
