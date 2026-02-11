const express=require("express")
const Question=require("../model/Question")
const router=express.Router()

router.get("/",async(req,res)=>{
    const {difficulty,name}=req.query
    if (difficulty){
        const difquestion= await Question.find({difficulty:difficulty})
        return res.status(200).json(difquestion)
    }
    if(name){
        const namequestion= await Question.find({title:name})
        return res.status(200).json(namequestion)
    }

    const allquestions= await Question.find({})
    return res.status(200).json(allquestions) 
})
router.get("/:topic",async(req,res)=>{
    const {topic}=req.params
    const {difficulty,name}=req.query
    if (difficulty){
        const diffindquestion=await Question.find({topic:topic,
            difficulty:difficulty
        })
        return res.status(200).json(diffindquestion)
    }
    if(name){
        const nameques= await Question.find({
            title:name
        })
        return res.status(200).json(nameques)
    }
    const findquestion= await Question.find({topic:topic})
    return res.status(200).json(findquestion)

})
module.exports=router