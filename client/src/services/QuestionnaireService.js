import axios from 'axios';
 
const QUESTIONNAIRE_API_BASE_URL = "http://localhost:5000/questionnaire";
 
class QuestionnaireService {

    getQuestionnaire() {
        return axios.get(QUESTIONNAIRE_API_BASE_URL);
    }

    createQuestionnaire(client) {
        return axios.post(QUESTIONNAIRE_API_BASE_URL, client);
    }

    getQuestionnaireById(clientId) {
        return axios.get(QUESTIONNAIRE_API_BASE_URL + '/' + clientId);
    }

    updateQuestionnaire(client, clientId) {
        return axios.put(QUESTIONNAIRE_API_BASE_URL + '/' + clientId, client);
    }

    deleteQuestionnaire(clientId) {
        return axios.delete(QUESTIONNAIRE_API_BASE_URL + '/' + clientId);
    }
}

export default new QuestionnaireService()