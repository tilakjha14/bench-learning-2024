const fs = require("fs");
const getNotes = function () {
  return "Notes returned form notes.js";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Note added successfully");
  } else {
    console.log("Duplicate note ");
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
