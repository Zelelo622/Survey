import React, { Component } from "react";
import QuestionService from "../../services/QuestionService";
import { parseUrl } from "../../utils/ParseURL";

import withNavigateHook from "../withNavigateHook";

class CreateQuestionElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id_question: this.props.params.id,
      formulation: "",
    };
    this.changeFormulationQuestionHandler =
      this.changeFormulationQuestionHandler.bind(this);

    this.name_questionnaire = parseUrl();
  }

  saveOrUpdateQuestion = (e) => {
    e.preventDefault();
    let question = {
      formulation: this.state.formulation,
    };
    console.log("question => " + JSON.stringify(question));

    QuestionService.createQuestion(question).then((res) => {
      this.props.navigation(`/${this.name_questionnaire}/list-question`);
    });
  };

  changeFormulationQuestionHandler = (event) => {
    this.setState({
      formulation: event.target.value,
    });
  };

  cancel() {
    this.props.navigation(`/${this.name_questionnaire}/list-question`);
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center mt-2">Add Question</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="mb-1"> Formulation: </label>
                    <input
                      placeholder="Formulation..."
                      name="name_question"
                      className="form-control mb-2"
                      value={this.state.formulation}
                      onChange={this.changeFormulationQuestionHandler}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={this.saveOrUpdateQuestion}
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

export default withNavigateHook(CreateQuestionElement);
