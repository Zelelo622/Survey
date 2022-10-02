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
        curr_questionnaire = {'id_questionnaire': questionnaire.id_questionnaire,
                              'name_questionnaire': questionnaire.name_questionnaire, 'sex': questionnaire.sex,
                              'year_birth': questionnaire.year_birth}
        questionnaire_list.append(curr_questionnaire)
    return jsonify(questionnaire_list)


@app.route('/questionnaire/<id>', methods=['GET'])
def get_one_questionnaire(id):
    questionnaire = db.session.get(Questionnaire, id)
    curr_questionnaire = {'id_questionnaire': questionnaire.id_questionnaire,
                          'name_questionnaire': questionnaire.name_questionnaire, 'sex': questionnaire.sex,
                          'year_birth': questionnaire.year_birth}
    return jsonify(curr_questionnaire)


@app.route('/questionnaire', methods=['POST'])
def create_questionnaire():
    questionnaireData = request.get_json()
    questionnaire = Questionnaire(name_questionnaire=questionnaireData['name_questionnaire'],
                                  sex=questionnaireData['sex'], year_birth=questionnaireData['year_birth'])
    db.session.add(questionnaire)
    db.session.commit()
    return jsonify(questionnaireData)


@app.route('/questionnaire/<id>', methods=['DELETE'])
def delete_questionnaire(id):
    questionnaire = db.session.get(Questionnaire, id)
    db.session.delete(questionnaire)
    db.session.commit()
    return f'Questionnaire (id: {id}) deleted!'


@app.route('/questionnaire/<id>', methods=['PUT'])
def update_questionnaire(id):
    # questionnaire = db.session.query(Questionnaire).filter_by(id=id)
    name_questionnaire = request.json['name_questionnaire']
    sex = request.json['sex']
    year_birth = request.json['year_birth']
    db.session.query(Questionnaire).filter(Questionnaire.id_questionnaire == id).update(
        {'name_questionnaire': name_questionnaire,
         'sex': sex, 'year_birth': year_birth})
    db.session.commit()
    return f'Questionnaire (id: {id}) updated!'


if __name__ == '__main__':
    app.run()
