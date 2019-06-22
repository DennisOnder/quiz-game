import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: NaN,
      question: false
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/question/get")
      .then(res => this.setState({ question: res.data, score: 0 }))
      .catch(err => console.error(err));
  }
  checkAnswer = answer => {
    answer === this.state.question.correctAnswer
      ? this.setState({ score: this.state.score + 1 })
      : this.setState({ score: 0 });
    this.fetchQuestion();
  };

  fetchQuestion = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/question/get");
      this.setState({ question: res.data });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div className="App">
        <h1 className="App__title">Quiz Game</h1>
        <header className="App__header">
          {isNaN(this.state.score) ? (
            <p className="App__score">Score</p>
          ) : (
            <p className="App__score">Score: {this.state.score}</p>
          )}
          {this.state.question ? (
            <div
              key={this.state.question._id}
              id={this.state.question._id}
              className="App__question"
            >
              <p className="App__question__body">{this.state.question.body}</p>
              <div className="App__question__answers">
                {[
                  ...this.state.question.answers,
                  this.state.question.correctAnswer
                ].map((answer, index) => (
                  <div
                    key={index}
                    id={index}
                    className="App__question__answer"
                    onClick={e => {
                      e.target.classList.contains("App__question__answer__body")
                        ? this.checkAnswer(e.target.innerHTML)
                        : this.checkAnswer(e.target.firstChild.innerHTML);
                    }}
                  >
                    <p className="App__question__answer__body">{answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No question</p>
          )}
        </header>
      </div>
    );
  }
}

export default App;
