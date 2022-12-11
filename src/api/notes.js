const express = require('express');
const notesController = require('../controllers/notes');

const notesApiRoutes = express.Router();

notesApiRoutes.get("/", notesController.getNotes);
notesApiRoutes.get("/:author", notesController.getNotesByAuthor);

module.exports = notesApiRoutes;