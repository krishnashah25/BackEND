const express = require('express')
const app = express()
const postModel = require("./models/node.model")
const multer = require("multer")
const uploadfile = require("./services/storage.service")

const upload = multer({ storage : multer.memoryStorage() })

app.use(express.json()) 

app.post("/Create-post", upload.single("image"), async ( req , res ) => {

    const result = await uploadfile(req.file.buffer)

    const post = await postModel.create({
        url : result.url,
        caption : req.body.caption  
    })

    res.status(201).json({
        message : "post created successfully",
        post
    })
})

app.get("/post", async ( req , res ) => {
    const post = await postModel.find()

    res.status(200).json({
        message : "posts fetched successfully",
        post
    })

})


module.exports = app