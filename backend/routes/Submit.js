const express=require("express")
const Answer=require("../model/Solution")
const runcode=require("../function/run")
const router=express.Router()
router.post("/run",async (req,res)=>{
    const {code,input}=req.body
    if(!code){
        return res.status(400).json({"mess":"no code to run"})
    }
    try{
        const run= await runcode(code,input)
        return res.json(run)
    }
    catch(err){
        return res.status(400).json(err)
    }
})
module.exports=router
