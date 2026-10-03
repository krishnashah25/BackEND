const mongoose = require("mongoose") // mongoose ko import karo

const notesSchema = new mongoose.Schema({ // create schema
    title : String, // type
    description : String 
})

const noteModel = mongoose.model("notes",notesSchema) 

module.exports = noteModel