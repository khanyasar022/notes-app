const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const log = console.log

//customizing yargs version
yargs.version('1.1.0')

//create yargs command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'shows the body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove comand
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'deletes the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list all the nodes',
    handler() {
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()
