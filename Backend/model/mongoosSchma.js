const mongoose = require("mongoose")

const NEWSCHMA = new mongoose.Schema({
    title:{
            type:string,
            required:true
     },
     description:{
                  type:string,
                  required:true
     },
     dueDate:{
            type:Date,
            required:false
     },

     status:{
            type: String, 
            enum: ['pending', 'completed'], 
            default: 'pending'
     },
     createdAt:{
            type:Date,
            default:Date.now
     }


})

const TODO = mongoose.model('TODO',NEWSCHMA)

module.exports = TODO