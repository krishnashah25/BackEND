const mongoose = require("mongoose")
const env = require("dotenv")

env.config()

async function connectDB() {

    try {
        await mongoose.connect(process.env.DATA_BASE_CONNECTION)
        console.log("Data base connected..."); 
    } catch (err) {
        console.error("Data base catch an error : ",err);
    }
}

module.exports = connectDB