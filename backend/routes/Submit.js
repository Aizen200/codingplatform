const express = require("express");
const Solution = require("../model/Solution");
const runcode = require("../function/run");
const User = require("../model/User");
const Question = require("../model/Question");

const router = express.Router();
router.post("/run", async (req, res) => {
  const { code, input } = req.body;

  if (!code || code.trim() === "") {
    return res.status(400).json({ message: "No code provided" });
  }

  try {
    const result = await runcode(code, input || "");

    const output =
      result.stderr ||
      result.compile_output ||
      result.stdout ||
      result.message ||
      "No output";

    return res.json({
      output,
      status: result.status?.description || "Unknown",
      time: result.time,
      memory: result.memory,
    });

  } catch (err) {
    console.error("Execution error:", err.response?.data || err.message);
    return res.status(500).json({ message: "Execution failed" });
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
      return res.status(404).json({ message: "Question not found" });
    }

    const normalize = (str) =>
      (str || "").trim().split(/\s+/).join(" ");

    for (let tc of ques.testcase) {
      const result = await runcode(code, tc.input || "");

      if (result.status?.id !== 3) {
        return res.json({
          verdict: "Runtime Error",
          error:
            result.stderr ||
            result.compile_output ||
            result.status?.description ||
            "Runtime Error",
        });
      }

      const actual = normalize(result.stdout);
      const expected = normalize(tc.expectedOutput);

      if (actual !== expected) {
        return res.json({
          verdict: "Wrong Answer",
          expected: tc.expectedOutput,
          actual: result.stdout,
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

    return res.json({ verdict: "Answer Accepted" });

  } catch (err) {
    console.error("Submit error:", err.response?.data || err.message);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
