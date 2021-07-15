const chalk= require('chalk');
const yargs = require('yargs');
const notes = require('./utils.js');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
             describe: 'note title',
            demandOption: true,
            type: 'string'        
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
    }
}),

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
        
    }
})
yargs.command({
    command: 'list',
    describe: 'list of new notes',
    handler: function() {
        notes.listNotes()
        
    }
})
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function(argv) {
        notes.readNotes(argv.title)
       
        
    }
})
console.log(yargs.argv)
