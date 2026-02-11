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
    answer:{
        type:String,
        required:true
    }
})
const Solution=mongoose.model("Answer",solutionschema)
module.exports=Solution