const mongoose = require("mongoose")

const musicSchema = new mongoose.Schema({
    uri :{
        type : String,
        required : true,
    },
    tittle : {
        type :String,
        required : true,
    },
    artist : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required:true    
    }
})

const musicModle = mongoose.model("music",musicSchema)

module.exports = musicModle 