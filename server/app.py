from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from models import Questionnaire, Question, Answer, Result

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:zelelo@localhost/survey'
db = SQLAlchemy(app)
db.session.commit()


@app.route('/')
def hello():
    return 'hey'


@app.route('/questionnaire', methods=['GET'])
def get_questionnaire():
    all_questionnaire = db.session.query(Questionnaire).all()
    questionnaire_list = []
    for questionnaire in all_questionnaire:
        curr_questionnaire = {'name_questionnaire': questionnaire.name_questionnaire, 'sex': questionnaire.sex,
                              'year_birth': questionnaire.year_birth}
        questionnaire_list.append(curr_questionnaire)
    return jsonify(questionnaire_list)


@app.route('/questionnaire', methods=['POST'])
def create_questionnaire():
    questionnaireData = request.get_json()
    questionnaire = Questionnaire(name_questionnaire=questionnaireData['name_questionnaire'],
                                         sex=questionnaireData['sex'], year_birth=questionnaireData['year_birth'])
    db.session.add(questionnaire)
    db.session.commit()
    return jsonify(questionnaireData)


if __name__ == '__main__':
    app.run()
