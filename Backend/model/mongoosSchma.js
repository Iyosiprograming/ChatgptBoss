const mongoose = require("mongoose");

const Todo_App = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },

    description:{
        type: String,
        require:true
    },
    
    completed: {
        type: Boolean,
        default: false
      },

    dueDate:{
        type:Date,
        require:false
    }
})

module.exports = mongoose.model("TODO_LIST",Todo_App)