const express = require("express");
const Solution = require("../model/Solution");
const runcode = require("../function/run");
const User = require("../model/User");
const Question = require("../model/Question");

const router = express.Router();

router.post("/run", async (req, res) => {
  const { code, input } = req.body;

  if (!code) {
    return res.status(400).json({ message: "No code to run" });
  }

  try {
    const result = await runcode(code, input);

    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Execution error" });
  }
});


router.post("/submit", async (req, res) => {
  const { code, questionId, userId } = req.body;


  if (!code || !questionId || !userId) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const ques = await Question.findById(questionId);

    if (!ques) {
      return res.status(400).json({ message: "Question not found" });
    }

    for (let tc of ques.testcase) {
      const ans = await runcode(code, tc.input);

      console.log("PISTON RESPONSE:", ans);


      if (ans.run?.code !== 0) {
        return res.json({
          verdict: "RE",
          error: ans.run?.stderr || "Runtime Error",
        });
      }

      const actual = String(ans.run?.stdout ?? "").trim();
      const expected = String(tc.expectedOutput ?? "").trim();


      if (actual !== expected) {
        return res.json({
          verdict: "WA",
          expected,
          actual,
        });
      }
    }

  

    await User.findByIdAndUpdate(userId, {
      $addToSet: { questionTitle: ques.title },
    });

    await Solution.findOneAndUpdate(
      { userid: userId, questionid: questionId },
      { answer: code },
      { upsert: true }
    );

    return res.json({ verdict: "AC" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
