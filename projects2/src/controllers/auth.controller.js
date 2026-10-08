const userModule = require("../models/user.model")
const jwt = require("jsonwebtoken")
const env = require("dotenv")

env.config()

async function registerUser(req,res) {
    const { username , email , password } = req.body

    const isemailalreadyexist = await userModule.findOne({
        email
    })

    if ( isemailalreadyexist ) {
        return res.status(409).json({
            message : "User already exists"
        }) 
    }

    const user = await userModule.create({
        username,email,password
    })

    const token = jwt.sign({
        id: user._id 
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({  
        message : "User register sucessfully",
        user
    })

}
 

module.exports = { registerUser }