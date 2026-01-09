const express=require("express")
const Question=require("../model/Question")
const router=express.Router()

router.get("/",async(req,res)=>{
    const {difficulty}=req.query
    if (difficulty){
        const difquestion= await Question.find({difficulty:difficulty})
        return res.status(200).json(difquestion)
    }

    const allquestions= await Question.find({})
    return res.status(200).json(allquestions) 
})
router.get("/:topic/",async(req,res)=>{
    const {topic}=req.params
    const {difficulty}=req.query
    if (difficulty){
        const diffindquestion=await Question.find({topic:topic,
            difficulty:difficulty
        })
        return res.status(200).json(diffindquestion)
    }
    const findquestion= await Question.find({topic:topic})
    return res.status(200).json(findquestion)

})
router.get("/:id",async(req,res)=>{
    const{id}=req.params
    const descquestion= await Question.find({_id:id})
    res.status(200).json(descquestion)
})
module.exports=router