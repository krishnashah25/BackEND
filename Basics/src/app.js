const express  = require('express')

const app =  express() //server instance create kar diya

app.use(express.json()) //midlle ware


const notes = []

//post tittle , description

app.post('/notes', ( req , res )=>{     
    notes.push(req.body)

    res.status(201).json({
        message : "note created succcessfully"
    })
})
app.get('/notes', ( req , res )=>{     

    res.status(200).json({
        message : "note fetched successfully",
        notes : notes
    })
})
app.delete('/notes/:index', ( req , res )=> {

    const index = req.params.index

    delete notes[index] 

    res.status(200).json({
        message : "note deleted successfully"
    })
})
app.patch('/notes/:index',(req,res)=>{

    const index = req.params.index 
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message : "note Updated successfully"
    })
})

module.exports = app