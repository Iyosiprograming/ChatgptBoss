const express = require ("express")
const mongoose = require ("mongoose")
const app = express()
const PORT = 2000

app.use(express.json())

// create a CRUD api that get , post , delete , update users todo backend

app.get("/api/todos",(req,res)=>{
    res.send("GET Hello world")
})

app.post("/api/todos",(req,res)=>{
    res.send("POST Hello world")
})

app.get("/api/todos/:id",(req,res)=>{
    res.send("GET hello world By id")
})

app.put("/api/todos/:id",(req,res)=>{
    res.send("PUT hello wold")
})

app.delete("/api/todos/:id",(req,res)=>{
    res.send("DELETE hello world")
})

// give listen port

app.listen(PORT,()=>{
    console.log(`Connected in http://localhost:${2000}/api/todos`)
})