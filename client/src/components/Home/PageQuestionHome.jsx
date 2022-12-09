import React, { Component } from "react";
import QuestionService from "../../services/QuestionService";
import { Button, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import withNavigateHook from "../withNavigateHook";

class PageQuestionHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: [],
      currentQuestion: 0,
    };
    // ---
    QuestionService.getQuestion().then((res) => {
      this.setState({ question: res.data });
    });
    // ---

    this.listAns = {
      answerOpt: [
        { answerText: "Да" },
        { answerText: "Нет" },
        { answerText: "Не могу ответить" },
      ],
    };
  }

  handleAnswerOptClick = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.state.question.length) {
      this.setState({ currentQuestion: nextQuestion });
    } else {
      this.props.navigation("/home");
    }
  };

  getQuestion(arr, i) {
    return arr[i];
  }

  render() {
    return (
      <div>
        <Container>
          <div>
            <div className="d-flex flex-column align-items-center mt-5">
              {/* <div className="d-flex flex-column align-items-center justify-content-center"> */}
              <div className="question_seciton">
                <div className="question-count pb-4 fs-1">
                  <span>Question {this.state.currentQuestion + 1}</span>/
                  {this.state.question.length}
                </div>
                <div className="question-text pb-4 fs-2">
                  {this.state.question[this.state.currentQuestion]?.formulation}
                </div>
              </div>
              <div className="answer-section">
                {this.listAns.answerOpt.map((answerOpt) => (
                  <Button
                    className="d-block mb-2 fs-5"
                    onClick={() => this.handleAnswerOptClick()}
                  >
                    {answerOpt.answerText}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withNavigateHook(PageQuestionHome);
