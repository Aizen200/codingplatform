const express= require("express")
const User=require("../model/User")

const router= express.Router()
router.get("/:username",async (req,res)=>{
    const{username}=req.params
    const user= await User.findOne({
        name:username
    })
    return res.status(200).json(user)
    
})
module.exports=router