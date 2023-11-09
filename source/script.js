document.addEventListener("DOMContentLoaded", function () {
  loadNotes();
});

function addNote() {
  var noteInput = document.getElementById("noteInput");
  var notesList = document.getElementById("notesList");

  if (noteInput.value.trim() !== "") {
    var note = document.createElement("li");
    note.textContent = noteInput.value;
    note.addEventListener("click", function () {
      this.parentNode.removeChild(this);
      saveNotes();
    });

    notesList.appendChild(note);
    noteInput.value = "";
    saveNotes();
  }
}

function saveNotes() {
  var notesList = document.getElementById("notesList");
  var notes = [];

  for (var i = 0; i < notesList.children.length; i++) {
    notes.push(notesList.children[i].textContent);
  }

  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  var notesList = document.getElementById("notesList");
  var notes = JSON.parse(localStorage.getItem("notes")) || [];

  for (var i = 0; i < notes.length; i++) {
    var note = document.createElement("li");
    note.textContent = notes[i];
    note.addEventListener("click", function () {
      this.parentNode.removeChild(this);
      saveNotes();
    });

    notesList.appendChild(note);
  }
}
