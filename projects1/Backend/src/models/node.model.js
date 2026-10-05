const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    url : String,
    caption : String
})

const postModel = mongoose.model("post", imageSchema)//post nam se mongo me data base banta hai or imageSchema uska structure hota hai

module.exports = postModel