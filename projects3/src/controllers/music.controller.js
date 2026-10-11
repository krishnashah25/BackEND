const musicModle = require("../models/music.model")
const jwt = require("jsonwebtoken")
const { musicFile} = require("../services/storage.service")
require("dotenv").config()

async function createModel(req,res) {
    
    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({ message : "Unauthorized"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if (decoded.role != "artist") {
            return res.status(403).json({message : "You don't have access to create an music..."})
        }

    } catch (err) {
        return res.status(401).json({message:"Unauthorized"})
    }

    const {tittle} = req.body 
    const uri = req.file

    

}