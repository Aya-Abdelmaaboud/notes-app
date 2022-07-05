const fs = require("fs");
const { title } = require("process");

const addNotes = (title, body) => {
  const notes = getNotes();
  console.log(notes);
  // const duplicateTitle = notes.filter((note) => note.title == title);
  const duplicateTitle = notes.find((note) => note.title === title);
  console.log(duplicateTitle);
  if (!duplicateTitle) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("Saved Successfully");
  } else {
    console.log("Error: Duplicate title exists");
  }
};

const getNotes = () => {
  try {
    const notes = fs.readFileSync("notes.json").toString();
    return JSON.parse(notes);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const deleteNotes = (title) => {
  const notes = getNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  console.log(notesToKeep);
  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log("Deleted Successfully");
  } else {
    console.log("This title is not exist");
  }
};

const readNotes = (title) => {
  const notes = getNotes();
  const noteToRead = notes.find((note) => note.title === title);
  if (noteToRead) {
    console.log(noteToRead.body);
  } else {
    console.log("This title is not exists");
  }
};

const getNotesTitle = () => {
  const notes = getNotes();
  console.log(notes)
  notes.forEach((note) => console.log(note.title));
  
};

module.exports = {
  addNotes,
  deleteNotes,
  readNotes,
  getNotesTitle,
};
