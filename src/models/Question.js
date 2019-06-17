const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  answers: [
    {
      body: {
        type: String,
        required: true
      },
      correct: {
        type: Boolean,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const question = mongoose.model("question", questionSchema);

module.exports = question;
