const mongoose = require('mongoose'); // mongoose ko import karo

async function connectDB() {
    await mongoose.connect("mongodb+srv://1st-user:IPlDdo4xwHxvy4h9@cluster-backend.bmdf5by.mongodb.net/notes")   //data abse se cconnect karo 

    console.log("connected to DB") //if conneted then it will print
}

module.exports = connectDB 