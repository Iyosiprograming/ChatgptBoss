const mongoose = require("mongoose");

const Todo_App = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        required: false
    }
})


module.exports = mongoose.model("TODO_LIST",Todo_App)