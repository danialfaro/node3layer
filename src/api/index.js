const express = require('express');
const notesApiRoutes = require('./notes');

const apiRoutes = express.Router();

apiRoutes.use("/notes", notesApiRoutes);

module.exports = apiRoutes;