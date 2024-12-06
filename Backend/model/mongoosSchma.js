const mongoose = require("mongoose");

const TODO_SCHEMA = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'done'], 
        default: 'pending' 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const TODO = mongoose.model('TODO', TODO_SCHEMA);

module.exports = TODO;