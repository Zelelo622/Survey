import React, { Component } from "react";
import QuestionnaireService from "../../services/QuestionnaireService";
import { Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import withNavigateHook from "../withNavigateHook";
import { Link } from "react-router-dom";

class PageHome extends Component {
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

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center">Questionnaire</h2>
          <div className="mt-5">
            <div className="d-flex flex-column bd-highlight gap-2">
              {this.state.questionnaire.map((questionnaire) => (
                <Nav.Link
                  key={questionnaire.id_questionnaire}
                  className="p-2 bg-light border text-decoration-none text-dark"
                  href={'/' + questionnaire.name_questionnaire + '/survey'}
                >
                  <span className="link-questionnaire__text">
                    <span className="link-questionnaire__title">
                      {questionnaire.name_questionnaire}
                    </span>
                  </span>
                </Nav.Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withNavigateHook(PageHome);
