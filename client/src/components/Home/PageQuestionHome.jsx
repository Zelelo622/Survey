import React, { Component } from "react";
import QuestionService from "../../services/QuestionService";
import { Button, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import withNavigateHook from "../withNavigateHook";
import { Link } from "react-router-dom";

class PageQuestionHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: [],
    };
    // ---
    QuestionService.getQuestion().then((res) => {
      this.setState({ question: res.data });
    });
    // ---
    this.questionIndex = 0;
  }

  getTitle() {}

  getMessage() {}

  getResult() {}

  render() {
    return (
      <div>
        <Container>
          <div>
            <div>
              <h2>{this.getTitle()}</h2>
              <h3>{this.getMessage()}</h3>
              <p>{this.getResult()}</p>
            </div>
            <Button>Ответить</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default withNavigateHook(PageQuestionHome);
