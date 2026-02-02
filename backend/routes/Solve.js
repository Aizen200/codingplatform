const express=require("express")
const Question=require("../model/Question")
const router=express.Router()
router.get("/:id",async(req,res)=>{
    const{id}=req.params
    const descquestion= await Question.findOne({_id:id})
    res.status(200).json(descquestion)
})
module.exports=router