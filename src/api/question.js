const router = require("express").Router();
const callApi = require("../utils/callApi");
const Question = require("../models/Question");
const uuid = require("uuid/v4");

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
      _id: uuid(),
      answers: question.data.results[0].incorrect_answers,
      body: question.data.results[0].question,
      providedBy: "OpenTDB API",
      correctAnswer: question.data.results[0].correct_answer,
      createdAt: Date.now()
    });
  }
});

module.exports = router;
