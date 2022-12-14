import React, { Component } from "react";
import QuestionnaireService from "../../services/QuestionnaireService";

import withNavigateHook from "../withNavigateHook";

class CreateQuestionnaireElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id_questionnaire: this.props.params.id,
      name_questionnaire: "",
      sex: "",
      year_birth: "",
    };
    this.changeNameQuestionnaireHandler =
      this.changeNameQuestionnaireHandler.bind(this);
    this.changeSexHandler = this.changeSexHandler.bind(this);
    this.saveOrUpdateQuestionnaire = this.saveOrUpdateQuestionnaire.bind(this);

    // ---
    if (this.state.id_questionnaire === "_add") {
      return;
    } else {
      QuestionnaireService.getQuestionnaireById(
        this.state.id_questionnaire
      ).then((res) => {
        let questionnaire = res.data;
        this.setState({
          name_questionnaire: questionnaire.name_questionnaire,
          sex: questionnaire.sex,
          year_birth: questionnaire.year_birth,
        });
      });
    }
    // ---
  }

  saveOrUpdateQuestionnaire = (e) => {
    e.preventDefault();
    let questionnaire = {
      name_questionnaire: this.state.name_questionnaire,
      sex: this.state.sex,
      year_birth: this.state.year_birth,
    };
    console.log("questionnaire => " + JSON.stringify(questionnaire));

    if (this.state.id_questionnaire === "_add") {
      QuestionnaireService.createQuestionnaire(questionnaire).then((res) => {
        this.props.navigation("/questionnaire");
      });
    } else {
      QuestionnaireService.updateQuestionnaire(
        questionnaire,
        this.state.id_questionnaire
      ).then((res) => {
        this.props.navigation("/questionnaire");
      });
    }
  };

  changeNameQuestionnaireHandler = (event) => {
    this.setState({
      name_questionnaire: event.target.value,
    });
  };

  changeSexHandler = (event) => {
    this.setState({
      sex: event.target.value,
    });
  };

  changeYearBirthHandler = (event) => {
    this.setState({
      year_birth: event.target.value,
    });
  };

  cancel() {
    this.props.navigation("/questionnaire");
  }

  getTitle() {
    if (this.state.id_questionnaire === "_add") {
      return <h3 className="text-center mt-2">Add Questionnaire</h3>;
    } else {
      return <h3 className="text-center mt-2">Update Questionnaire</h3>;
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="mb-1"> Name Questionnaire: </label>
                    <input
                      placeholder="Name Questionnaire"
                      name="name_questionnaire"
                      className="form-control mb-2"
                      value={this.state.name_questionnaire}
                      onChange={this.changeNameQuestionnaireHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1"> Sex: </label>
                    <input
                      placeholder="Sex"
                      name="sex"
                      className="form-control mb-2"
                      value={this.state.sex}
                      onChange={this.changeSexHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1"> Year birth: </label>
                    <input
                      placeholder="Year birth"
                      name="year_birth"
                      className="form-control mb-4"
                      value={this.state.year_birth}
                      onChange={this.changeYearBirthHandler}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={this.saveOrUpdateQuestionnaire}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(CreateQuestionnaireElement);
