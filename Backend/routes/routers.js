const express = require("express") 
const app = express.Router()
const TODO = require("../model/mongoosSchma")
app.get("/todos",(req,res)=>{
    res.send("GET hello world")
})

app.post("/todos",(req,res)=>{
    res.send("POST Hello world")
})

app.get("/todos/:id",(req,res)=>{
    res.send("GET hello world By id")
})

app.put("/todos/:id",(req,res)=>{
    res.send("PUT hello wold")
})

app.delete("/todos/:id",(req,res)=>{
    res.send("DELETE hello world")
})

module.exports = app