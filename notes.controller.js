const path = require('path')

const notes = []

const notesPath = path.join(__dirname, 'db.json')
console.log(notesPath)

function addNote() {
    console.log('Note add')
}

function printNotes() {
    console.log('Note print')
}

module.exports = {
    addNote, printNotes
}