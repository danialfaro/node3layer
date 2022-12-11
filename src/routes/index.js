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

routes.get( "/data", ( req, res ) => {
    const data = [
        {
            random: "1214114",
            data: "234314"
        },
        {
            wow: "134124",
            my: "234143"
        }
    ]
    res.render("index", {
        data: data
    });
});

module.exports = routes;