import React, { Component } from "react";
import QuestionService from "../../services/QuestionService";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { parseUrl } from '../../utils/ParseURL';

import withNavigateHook from "../withNavigateHook";

class ListQuestionElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: [],
    };
    this.addQuestion = this.addQuestion.bind(this);
    this.editQuestion = this.editQuestion.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.name_questionnaire = parseUrl();
    // ---
    QuestionService.getQuestion().then((res) => {
      if (res.data == null) {
        this.props.navigation(`/${this.name_questionnaire}/add-question/_add`);
      }
      this.setState({ question: res.data });
    });
    // ---
  }

  deleteQuestion(id) {
    QuestionService.deleteQuestion(id).then((res) => {
      this.setState({
        question: this.state.question.filter(
          (question) => question.id_question !== id
        ),
      });
    });
  }

  editQuestion(name_questionnaire, id) {
    this.props.navigation(`/${name_questionnaire}/update-question/${id}`);
  }

  addQuestion(name_questionnaire) {
    this.props.navigation(`/${name_questionnaire}/add-question`);
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center">Question List</h2>
          <div className="text-center mb-4">
            <button className="btn btn-dark" onClick={() => this.addQuestion(this.name_questionnaire)}>
              {" "}
              Add Question
            </button>
          </div>
          <div className="row">
            <table className="table table-bordered">
              <thead className="text-center table-dark">
                <tr>
                  <th> Formulation</th>
                  <th> Func</th>
                </tr>
              </thead>
              <tbody className="text-center table-light">
                {this.state.question.map((question) => (
                  <tr key={question.id_question}>
                    <td> {question.formulation} </td>
                    <td>
                      <button
                        onClick={() =>
                          this.editQuestion(this.name_questionnaire, question.id_question)
                        }
                        className="btn btn-outline-warning"
                      >
                        Update{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() =>
                          this.deleteQuestion(
                            question.id_question
                          )
                        }
                        className="btn btn-outline-danger"
                      >
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    );
  }
}

export default withNavigateHook(ListQuestionElement);
