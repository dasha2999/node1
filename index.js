// require('./test')

const yargs = require('yargs')
const {addNotes, printNotes} = require('./notes.controller')

// console.log('Hello NODE JS')

// window
// document

// есть доступ к файлам, папкам...

// console.log(__filename)
// console.log(__dirname)

// const userName = process.argv[2]
// const userAge = process.argv[3]

// console.log('user name:', userName)
// console.log('user age:', userAge)

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    builder: {
        title: {
            type: 'string',
            describe: 'Note string',
            demandOption: true
        }
    },
    handler({title}) {
        console.log('add command', title)
        addNotes()
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    handler() {
        console.log('All notes')
        printNotes()
    }
})

yargs.parse()