const mongoose=require("mongoose")
const testcaseschema=mongoose.Schema({
    input:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    }
    ,
    expectedOutput:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    },
    _id:false
})
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
    testcase:{type:[testcaseschema],
        required:true
    }
    ,
    constraints:{
        type:[String],
        required:true
    }
})
const Question=mongoose.model("Question",questionschema)
module.exports=Question