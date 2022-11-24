import React, { Component } from "react";
import QuestionnaireService from "../../services/QuestionnaireService";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import withNavigateHook from "./withNavigateHook";

export class ListQuestionnaireElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionnaire: [],
    };
    this.addQuestionnaire = this.addQuestionnaire.bind(this);
    this.editQuestionnaire = this.editQuestionnaire.bind(this);
    this.deleteQuestionnaire = this.deleteQuestionnaire.bind(this);
    // ---
    QuestionnaireService.getQuestionnaire().then((res) => {
      if (res.data == null) {
        this.props.navigation("/add-questionnaire/_add");
      }
      this.setState({ questionnaire: res.data });
    });
    // ---
  }

  deleteQuestionnaire(id) {
    QuestionnaireService.deleteQuestionnaire(id).then((res) => {
      this.setState({
        questionnaire: this.state.questionnaire.filter(
          (questionnaire) => questionnaire.id_questionnaire !== id
        ),
      });
    });
  }
  viewQuestionnaire(id) {
    this.props.navigation(`/view-questionnaire/${id}`);
  }
  editQuestionnaire(id) {
    this.props.navigation(`/update-questionnaire/${id}`);
  }

  addQuestionnaire() {
    this.props.navigation("/add-questionnaire/_add");
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center">Questionnaire List</h2>
          <div className="text-center mb-4">
            <button className="btn btn-dark" onClick={this.addQuestionnaire}>
              {" "}
              Add Questionnaire
            </button>
          </div>
          <div className="row">
            <table className="table table-bordered">
              <thead className="text-center table-dark">
                <tr>
                  <th> Name questionnaire</th>
                  <th> Sex</th>
                  <th> Year birth</th>
                  <th> Func</th>
                </tr>
              </thead>
              <tbody className="text-center table-light">
                {this.state.questionnaire.map((questionnaire) => (
                  <tr key={questionnaire.id_questionnaire}>
                    <td> {questionnaire.name_questionnaire} </td>
                    <td> {questionnaire.sex}</td>
                    <td> {questionnaire.year_birth}</td>
                    <td>
                      <button
                        onClick={() =>
                          this.editQuestionnaire(questionnaire.id_questionnaire)
                        }
                        className="btn btn-outline-warning"
                      >
                        Update{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() =>
                          this.deleteQuestionnaire(
                            questionnaire.id_questionnaire
                          )
                        }
                        className="btn btn-outline-danger"
                      >
                        Delete{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() =>
                          this.viewQuestionnaire(questionnaire.id_questionnaire)
                        }
                        className="btn btn-outline-info"
                      >
                        View{" "}
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

export default withNavigateHook(ListQuestionnaireElement);
