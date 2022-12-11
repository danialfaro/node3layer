const getNotes = () => {
    const notes = [
        {
            title: "my first note",
            text: "hello world!",
            author: "dani"
        },
        {
            title: "my note",
            text: "hi!",
            author: "john"
        },
        {
            title: "my personal note",
            text: "wow!",
            author: "dani"
        }
    ]  
    return notes;
}


// @desc Persistance access to database
const notesPersistance = {}
notesPersistance.getNotes = getNotes;

module.exports = notesPersistance;

