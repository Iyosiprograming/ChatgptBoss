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
router.post("/todos", async (req, res) => {
    try {
        const user = await TODO.create({
            title: req.body.title,            
            description: req.body.description,
            completed: false,
            dueDate: req.body.dueDate
        });
        res.status(201).send({ message: "Todo created successfully!", user });
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: "Error creating todo" }); 
    }
});


router.put("/todos/:id",async(req,res)=>{

    try{
        const Update = await TODO.findById(req.params.id)      
        if(!Update){
            res.status(404).send({message:"Todo Not Found"})
        }else {
        Update.title = req.body.title ,
        Update.description = req.body.description ,
        Update.dueDate = req.body.dueDate , 
        Update.completed = req.body.status 
        const UpdatedTodo = await Update.save()
        res.json({ message: "Todo updated successfully!", UpdatedTodo });
    
        }
        

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