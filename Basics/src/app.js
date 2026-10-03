const express  = require('express')
const noteModel = require("./models/node.model")
const app =  express() //server instance create kar diya

app.use(express.json()) //midlle ware


//post title , description

app.post('/notes', async ( req , res )=>{     
    const data = req.body // { title,description }
    await noteModel.create({
        title : data.title,
        description : data.description
    })

    res.status(201).json({  
        message : "note created succcessfully"
    })  
})

app.get('/notes', async ( req , res )=>{

    const notes = await noteModel.find()

    // find [{},{}...]
    // findOne {}
    
    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})

app.delete('/notes/:id', async ( req , res )=> {
    const id = req.params.id

    await noteModel.findByIdAndDelete({
        _id: id
    })

    res.status(200).json({
        message : "note deleted successfully"
    })
})

app.patch('/notes/:id', async ( req , res ) => {
    const id = req.params.id 
    const description = req.body.description

    await noteModel.findOneAndUpdate({ _id : id } , { description: description })

    res.status(200).json({
        message : "note Updated successfully"
    })
})

module.exports = app