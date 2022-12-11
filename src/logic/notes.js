const notesPersistance = require("../persistance/notes");

const getNotes =  () => {
    const notes = notesPersistance.getNotes();
    return notes;
}

const getNotesByAuthor =  (author) => {
    const notes = notesPersistance.getNotes();
    const notesBy = notes.filter(n => n.author === author)
    return notesBy;
}

// @desc Logic algorithms to treat the data taken from database
const notesLogic = {}

notesLogic.getNotes = getNotes;
notesLogic.getNotesByAuthor = getNotesByAuthor;

module.exports = notesLogic;