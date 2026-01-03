const mongoose=require("mongoose")
const questionschema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        enum:["easy","medium","hard"],
        required:true
    },
    description:{
        type:String,
        required:true
    },
    constraints:{
        type:[String],
        required:true
    }
})
module.exports=questionschema