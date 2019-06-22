const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  providedBy: {
    type: String,
    default: "Anonymous"
  },
  answers: [
    {
      type: String
    }
  ],
  correctAnswer: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
