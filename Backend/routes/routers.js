const express = require("express") 
const BodyParser = require("body-parser")
const router = express.Router()
const TODO = require("../model/mongoosSchma")


router.use(BodyParser.json())
router.get("/todos",async(req,res)=>{
    try{
        const todo = await TODO.find()
        res.json(todo)

    }catch(e){console.log(e.message)}
    
})

router.post("/todos",async(req,res)=>{
    try{
        const user = await TODO.create({
            title:"Iyosiyas todo",
            description:"Iyosiyas todo 123456789",
            completed:false,

        })
        res.status(201).send({ message: "Todo created successfully!",user })
    }catch(e){
        console.log(e.message)
    }
})


router.put("/todos/:id",async(req,res)=>{
    try{
        const Update = await TODO.findByIdAndUpdate(
            req.params.id,
            req.body, 
            { new: true } // Returns the updated document
        );        
        

    }catch(e){console.log(e.message)}
    
})

router.delete("/todos/:id",async(req,res)=>{
    try{
        const Delete = await TODO.findByIdAndDelete(req.params.id)
        if(!Delete){
           return res.status(404).send({message:"todo not found"})
        }
        else res.status(200).send({message:"Todo Deleted Succusfully",DeletedTodo:Delete.title})

    }catch(e){console.log(e.message)}
})

module.exports = router