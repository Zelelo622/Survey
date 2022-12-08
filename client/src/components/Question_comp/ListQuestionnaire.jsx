import React, { Component } from "react";
import QuestionnaireService from "../../services/QuestionnaireService";
import { Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import withNavigateHook from "../withNavigateHook";

class ListQuestionnire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionnaire: [],
    };
    // ---
    QuestionnaireService.getQuestionnaire().then((res) => {
      this.setState({ questionnaire: res.data });
    });
    // ---
  }

  toQuisetionsList(name_questionnaire) {
    this.props.navigation(`/${name_questionnaire}/list-question`);
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center">Questionnaire</h2>
          <div className="row">
            <table className="table table-bordered">
              <thead className="text-center table-dark">
                <tr>
                  <th> Name questionnaire</th>
                </tr>
              </thead>
              <tbody className="text-center table-light">
                {this.state.questionnaire.map((questionnaire) => (
                  <tr key={questionnaire.id_questionnaire}>
                    <td><Nav.Link onClick={() => this.toQuisetionsList(questionnaire.name_questionnaire)}>{questionnaire.name_questionnaire}</Nav.Link></td>
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

export default withNavigateHook(ListQuestionnire);
