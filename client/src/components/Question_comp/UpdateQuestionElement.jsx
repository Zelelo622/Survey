import React, { Component } from "react";
import QuestionService from "../../services/QuestionService";
import withNavigateHook from "../withNavigateHook";
import { parseUrl } from '../../utils/ParseURL';

class UpdateQuestionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id_question: this.props.params.id,
      formulation: "",
    };
    this.name_questionnaire = parseUrl();

    this.changeFormulationQuestionHandler =
      this.changeFormulationQuestionHandler.bind(this);
  }

  componentDidMount() {
    QuestionService.getQuestionById(this.state.id_question).then((res) => {
      let question = res.data;
      this.setState({
        formulation: question.formulation,
      });
    });
  }

  updateQuestion = (e) => {
    e.preventDefault();
    let question = {
      formulation: this.state.formulation,
    };
    console.log("question => " + JSON.stringify(question));
    console.log("id => " + JSON.stringify(this.state.id_question));
    QuestionService.updateQuestion(question, this.state.id_question).then(
      (res) => {
        this.props.navigation(`/${this.name_questionnaire}/list-question`);
      }
    );
  };

  changeFormulationQuestionHandler = (event) => {
    this.setState({ formulation: event.target.value });
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
              <h3 className="text-center mt-2">Update Question</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="mb-1"> Formulation question: </label>
                    <input
                      placeholder="Name Questionnaire"
                      name="name_questionnaire"
                      className="form-control mb-2"
                      value={this.state.formulation}
                      onChange={this.changeFormulationQuestionHandler}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={this.updateQuestion}
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

export default withNavigateHook(UpdateQuestionComponent);
