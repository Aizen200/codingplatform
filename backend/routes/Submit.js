const express=require("express")
const Solution=require("../model/Solution")
const runcode=require("../function/run")
const question=require("../model/Question")
const User=require("../model/User")
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
router.post("/submit", async (req, res) => {
  const { code, questionId, userId } = req.body;

  if (!code || !questionId || !userId) {
    return res.status(400).json({ message: "missing fields" });
  }

  try {
    const ques = await question.findById(questionId);

    if (!ques) {
      return res.status(400).json({ message: "question not found" });
    }

    for (let tc of ques.testcase) {
      const ans = await runcode(code, tc.input);

      if (ans.stderr && ans.stderr.length > 0) {
        return res.json({ verdict: "RE", error: ans.stderr });
      }

      const actual = String(ans.run?.stdout ?? "").trim();
      const expected = String(tc.expectedOutput).trim();

      if (actual !== expected) {
        return res.json({
          verdict: "WA",
          expected,
          actual,
        });
      }
    }
    await User.findByIdAndUpdate( userId,{
        $addToSet:{questionTitle:ques.title}
       
    
    })
   await Solution.create({
  userid: userId,
  questionid: questionId,
  answer: code,
});
    return res.json({ verdict: "AC" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "server error" });
  }
});



module.exports=router
