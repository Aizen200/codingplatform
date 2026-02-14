const express= require("express")
const User=require("../model/User")

const router= express.Router()
router.get("/:username",async (req,res)=>{
    const{username}=req.params
    if(!username)
    {
    return res.status(404).json({"err":"User not exist"})
    }
    const user= await User.findOne({
        name:username
    })
    return res.status(200).json(user)
    
})
module.exports=router