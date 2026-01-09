const mongoose=require("mongoose")
const solutionschema=mongoose.Schema({
    questionid:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
})
const solution=solutionschema
module.exports=solution