const mongoose = require("mongoose")

async function ConnectDB() {
    
    try {
        await mongoose.connect(process.env.DATA_BASE_CONNECTION)
        console.log("Connected to the Data-base...")
    } catch(error) {
        console.error("database found an error : ",error)
    }

}

module.exports = ConnectDB