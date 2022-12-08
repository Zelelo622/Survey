import React, { Component } from "react";
import QuestionnaireService from "../../services/QuestionnaireService";
import { Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import withNavigateHook from "../withNavigateHook";

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

  toQuisetionsList(name_questionnaire) {
    this.props.navigation(`/${name_questionnaire}/list-question`);
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center">Questionnaire</h2>
          <div className="row">
            <div className="col-xs-12 col-sm-6" id="bx_651765591_1692">
              {this.state.questionnaire.map((questionnaire) => (
                <Nav.Link key={questionnaire.id_questionnaire}  className="link-questionnaire" href="">
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
