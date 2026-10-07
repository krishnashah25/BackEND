const mongoose = require("mongoose")

async function connectDB() {

    try {
        await mongoose.connect("mongodb+srv://1st-user:IPlDdo4xwHxvy4h9@cluster-backend.bmdf5by.mongodb.net/Project2")
        console.log("Data base connected..."); 
    } catch (err) {
        console.error("Data base catch an error : ",err);
    }
}

module.exports = connectDB