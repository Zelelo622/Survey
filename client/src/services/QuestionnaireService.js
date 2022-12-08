import axios from 'axios';
 
const QUESTIONNAIRE_API_BASE_URL = "http://localhost:5000/questionnaire";
 
class QuestionnaireService {

    getQuestionnaire() {
        return axios.get(QUESTIONNAIRE_API_BASE_URL);
    }

    createQuestionnaire(questionnaire) {
        return axios.post(QUESTIONNAIRE_API_BASE_URL, questionnaire);
    }

    getQuestionnaireById(questionnaireId) {
        return axios.get(QUESTIONNAIRE_API_BASE_URL + '/' + questionnaireId);
    }

    updateQuestionnaire(questionnaire,questionnaireId) {
        return axios.put(QUESTIONNAIRE_API_BASE_URL + '/' + questionnaireId, questionnaire);
    }

    deleteQuestionnaire(questionnaireId) {
        return axios.delete(QUESTIONNAIRE_API_BASE_URL + '/' + questionnaireId);
    }
}

export default new QuestionnaireService()