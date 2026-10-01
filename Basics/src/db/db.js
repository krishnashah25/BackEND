const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://1st-user:IPlDdo4xwHxvy4h9@cluster-backend.bmdf5by.mongodb.net/newONE")   

    console.log("connected to DB")
}

module.exports = connectDB