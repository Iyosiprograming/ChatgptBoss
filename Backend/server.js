const express = require ("express")
const mongoose = require ("mongoose")
const TODO = require("./model/mongoosSchma")
const app = express()
const PORT = 2000

app.use(express.json())

// create a CRUD api that get , post , delete , update users todo backend

app.get("/api/todos",(req,res)=>{
    res.send("GET Hello world")
})


// give listen port

app.listen(PORT,()=>{
    console.log(`Connected in http://localhost:${2000}/api/todos`)
})