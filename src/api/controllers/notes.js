const notesLogic = require("../logic/notes")

const getNotes = async (req, res) => {

    try {

        //get notes
        const notes = notesLogic.getNotes();
                
        //send notes
        res.json(notes);

    } catch(error) {
        res.send(error.message)
    }   
    
}

const getNotesByAuthor = async (req, res) => {

    const { author } = req.params;

    try {

        //get notes by author
        const notes = notesLogic.getNotes();
        const notesBy = notes.filter(n => n.author === author)
        
        //send notes
        res.json(notesBy);

    } catch(error) {
        res.send(error.message)
    }   
}


const notesController = {}
notesController.getNotes = getNotes;
notesController.getNotesByAuthor = getNotesByAuthor;

module.exports = notesController;