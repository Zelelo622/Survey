import React, { Component } from 'react'
import QuestionnaireService from "../../services/QuestionnaireService";

import withNavigateHook from "../withNavigateHook";
 
class ViewQuestionnaireComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            id_questionnaire: this.props.params.id,
            questionnaire: {}
        }
    }
 
    componentDidMount(){
        QuestionnaireService.getQuestionnaireById(this.state.id_questionnaire).then( res => {
            this.setState({questionnaire: res.data});
        })
    }
 
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center mt-2"> View Questionnaire Details</h3>
                    <div className = "card-body">
                        <div className = "row mb-3">
                            <label className="mb-1 text-bg-info fst-italic"> Questionnaire name: </label>
                            <div className='fw-bold'> { this.state.questionnaire.name_questionnaire }</div>
                        </div>
                        <div className = "row mb-3">
                            <label className="mb-1 text-bg-info fst-italic"> Questionnaire sex: </label>
                            <div className='fw-bold'> { this.state.questionnaire.sex }</div>
                        </div>
                        <div className = "row mb-3">
                            <label className="mb-1 text-bg-info fst-italic"> Questionnaire year birth: </label>
                            <div className='fw-bold'> { this.state.questionnaire.year_birth }</div>
                        </div>
                    </div>
 
                </div>
            </div>
        )
    }
}
 
export default withNavigateHook(ViewQuestionnaireComponent)