const router = require("express").Router();
const callApi = require("../utils/callApi");
const Question = require("../models/Question");

router.get("/get", async (req, res) => {
  const questions = await Question.find();
  if (questions.length > 0) {
    res
      .status(200)
      .json(questions[Math.floor(Math.random() * questions.length)]);
  } else {
    const question = await callApi(
      "get",
      "https://opentdb.com/api.php?amount=1",
      null,
      false
    );
    res.status(200).json({
      _id: question.data._id,
      answers: question.data.answers,
      body: question.data.body,
      providedBy: "OpenTDB API",
      correctAnswer: question.data.correctAnswer,
      createdAt: question.data.createdAt
    });
  }
});

module.exports = router;
