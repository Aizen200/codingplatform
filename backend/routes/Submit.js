const express=require("express")
const Answer=require("../model/Solution")
const runcode=require("../function/run")
const question=require("../model/Question")
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
router.post("/submit",async(req,res)=>{
    const{code,questionId}=req.body
    if(!code){
        return res.status(400).json({"mess":"no code to submit"})
    }
    try{
        const testcase=await question.findOne({_id:questionId})
        if(!testcase){
            return res.status(400).json({"mess":"question not found"})
        }
        for (let tc of testcase.testcase){
           const ans= await runcode(code,tc.input)
           if (ans.stderr && ans.stderr.length>0){
            return res.json({ "verdict": "RE", "error": result.stderr });
           }
        
        }
        const actual=ans.stdout.trim()
        const expect=testcase.expectedOutput.trim()
        if(actual!==expect){
            return res.json({
                "verdict":"WA",
                expect,
                actual
            })
        }
        return res.json({"verdict":"AC"})
    }
    catch(err){
        return res.status(400).json(err)
    }
})
module.exports=router
