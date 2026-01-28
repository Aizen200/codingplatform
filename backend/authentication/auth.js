const express=require("express")
const bcrypt =require("bcrypt")
const router=express.Router()
const User=require("../model/User")

const {signUpmiddleware}=require("../middleware/Authmiddleware")
router.post("/signup",signUpmiddleware,async (req,res)=>{
    const {username,password,email}=req.body
    const finduser=await User.findOne({email:email})
    if (finduser){
        return res.status(409).send("User already exist")
    }
    const hashpassword=await bcrypt.hash(password,10)
    const user= await User.create({
        name:username,
        password:hashpassword,
        email:email
    })
    return res.status(201).json(user)


})
router.post("/login",async (req,res)=>{
    const {email,password}=req.body
    const loginuser= await User.findOne({
        email:email
    })
    if (!loginuser){
        return res.status(404).send("User not found")

    }
    const compare=await bcrypt.compare(password,loginuser.password)
    if (!compare){
        return res.status(401).send("Incorrect password")
    }
})
module.exports=router