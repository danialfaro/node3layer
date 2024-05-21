const express = require('express');
const routes = express.Router();

const notesLogic = require('../logic/notes');

routes.get( "/notes", ( req, res ) => {
    const notes = notesLogic.getNotes()
    res.render("notes", {
        notes: notes
    });
});

routes.get( "/notes/:author", ( req, res ) => {
    const { author } = req.params
    const notesByAuthor = notesLogic.getNotesByAuthor(author)
    res.render("notes", {
        notes: notesByAuthor,
        author: author
    });
});

module.exports = routes;