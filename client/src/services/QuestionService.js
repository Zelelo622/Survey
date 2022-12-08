import axios from 'axios';
import { parseUrl } from '../utils/ParseURL';

const name_questionnaire = parseUrl();

const QUESTIONNAIRE_API_BASE_URL = `http://localhost:5000/${name_questionnaire}/question`;

class QuestionService {

    getQuestion() {
        return axios.get(QUESTIONNAIRE_API_BASE_URL);
    }

    createQuestion(question) {
        return axios.post(QUESTIONNAIRE_API_BASE_URL, question);
    }

    getQuestionById(questionId) {
        return axios.get(QUESTIONNAIRE_API_BASE_URL + '/' + questionId);
    }

    updateQuestion(question, questionId) {
        return axios.put(QUESTIONNAIRE_API_BASE_URL + '/' + questionId, question);
    }

    deleteQuestion(questionId) {
        return axios.delete(QUESTIONNAIRE_API_BASE_URL + '/' + questionId);
    }
}

export default new QuestionService()