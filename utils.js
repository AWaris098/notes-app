const fs= require('fs');
const chalk= require('chalk')

const getNotes= ()=> 'your notes'


const addNote= (title,body)=>{
     const notes= loadNotes()

     const duplicateNote= notes.find((note) => note.title === title)
          console.log(duplicateNote)

          debugger
        

        if(!duplicateNote){
         notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('new note added!'))
}else{
    console.log(chalk.red.inverse('note title taken!'))
}
}
const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter(function(note) {
        return note.title !== title
    })
    if(notes.length > keepNotes.length){
        console.log(chalk.green.inverse('Note remonve'))
        saveNotes(keepNotes)
    }else{
        console.log(chalk.red.inverse('No one found'))
    }
}   

const listNotes = ()=> {
    const notes= loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
} 

const readNotes= (title)=> {
const notes= loadNotes()
const note= notes.find((note)=> note.title=== title)

if(note){
    console.log(chalk.inverse(note.title))
    console.log(chalk.inverse(note.body))
}else{
    console.log(chalk.red.inverse('no not found'))
}
}
const saveNotes= (notes) => {
    
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes=()=>{

try{
    const dataBuffer= fs.readFileSync('notes.json')
    const dataJSON= dataBuffer.toString()
    return JSON.parse(dataJSON)
}catch (e) {
    return []
}

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
} 