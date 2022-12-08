from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from server.models.models import Questionnaire, Question, Answer, Result

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:zelelo@localhost/survey'
db = SQLAlchemy(app)
db.session.commit()


# -------------------


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
    name_questionnaire = request.json['name_questionnaire']
    sex = request.json['sex']
    year_birth = request.json['year_birth']
    db.session.query(Questionnaire).filter(Questionnaire.id_questionnaire == id).update(
        {'name_questionnaire': name_questionnaire,
         'sex': sex, 'year_birth': year_birth})
    db.session.commit()
    return f'Questionnaire (id: {id}) updated!'


# -------------------


@app.route('/<name_questionnaire>/question', methods=['GET'])
def get_question(name_questionnaire):
    id_questionnaire = db.session.query(Questionnaire).filter(
        Questionnaire.name_questionnaire == name_questionnaire).first().id_questionnaire
    questionData = db.session.query(Question).filter(Question.id_questionnaire == id_questionnaire).all()
    question_list = []
    for question in questionData:
        curr_questionnaire = {'id_question': question.id_question,
                              'formulation': question.formulation,
                              'id_questionnaire': id_questionnaire}
        question_list.append(curr_questionnaire)
    return jsonify(question_list)


@app.route('/<name_questionnaire>/question/<id>', methods=['GET'])
def get_one_question(name_questionnaire, id):
    id_questionnaire = db.session.query(Questionnaire).filter(
        Questionnaire.name_questionnaire == name_questionnaire).first().id_questionnaire
    question = db.session.get(Question, id)
    curr_questionnaire = {'id_question': question.id_question,
                          'formulation': question.formulation,
                          'id_questionnaire': id_questionnaire}
    return jsonify(curr_questionnaire)


@app.route('/<name_questionnaire>/question', methods=['POST'])
def create_question(name_questionnaire):
    questionData = request.get_json()
    id_questionnaire = db.session.query(Questionnaire).filter(
        Questionnaire.name_questionnaire == name_questionnaire).first().id_questionnaire
    question = Question(formulation=questionData['formulation'], id_questionnaire=id_questionnaire)
    db.session.add(question)
    db.session.commit()
    return jsonify(questionData)


@app.route('/<name_questionnaire>/question/<id>', methods=['PUT'])
def update_question(name_questionnaire, id):
    formulation = request.json['formulation']
    id_questionnaire = db.session.query(Questionnaire).filter(
        Questionnaire.name_questionnaire == name_questionnaire).first().id_questionnaire
    # id_question = db.session.query(Question).filter(Question.id_question == id).first().id_question
    # questionData = db.session.get(Question, id_question)
    db.session.query(Question).filter(Question.id_question == id).update(
        {'formulation': formulation}
    )
    db.session.commit()
    return f'Questionnaire (id: {id_questionnaire}) : Question (id: {id}) update!'


@app.route('/<name_questionnaire>/question/<id>', methods=['DELETE'])
def delete_question(name_questionnaire, id):
    id_questionnaire = db.session.query(Questionnaire).filter(
        Questionnaire.name_questionnaire == name_questionnaire).first().id_questionnaire
    # id_question = db.session.query(Question).filter(Question.id_questionnaire == id_questionnaire).first().id_question

    questionData = db.session.get(Question, id)
    db.session.delete(questionData)
    db.session.commit()
    return f'Questionnaire (id: {id_questionnaire}) : Question (id: {id}) deleted!'


# -------------------
# Answer

@app.route('/<formulation>/answer', methods=['GET'])
def get_answer(formulation):
    id_question = db.session.query(Question).filter(
        Question.formulation == formulation).first().id_question

    answerData = db.session.query(Answer).filter(Answer.id_question == id_question).all()
    answer_list = []
    for answer in answerData:
        curr_answer = {'id_answer': answer.id_answer,
                       'answer_option': answer.answer_option,
                       'id_question': answer.id_question,
                       'id_result': answer.id_result
                       }
        answer_list.append(curr_answer)
    return jsonify(answer_list)


@app.route('/<formulation>/answer', methods=['POST'])
def create_answer(formulation):
    answerData = request.get_json()
    id_question = db.session.query(Question).filter(
        Question.formulation == formulation).first().id_question
    answer = Answer(answer_option=answerData['answer_option'], id_question=id_question, id_result=1)
    db.session.add(answer)
    db.session.commit()
    return jsonify(answerData)


@app.route('/<formulation>/answer/<id>', methods=['PUT'])
def update_answer(formulation, id):
    answer_option = request.json['answer_option']
    id_question = db.session.query(Question).filter(
        Question.formulation == formulation).first().id_question
    db.session.query(Answer).filter(Answer.id_answer == id).update(
        {'answer_option': answer_option}
    )
    db.session.commit()
    return f'Question (id: {id_question}) : Question (id: {id}) update!'


@app.route('/<formulation>/answer/<id>', methods=['DELETE'])
def delete_answer(formulation, id):
    id_question = db.session.query(Question).filter(
        Question.formulation == formulation).first().id_question
    answerData = db.session.get(Answer, id)
    db.session.delete(answerData)
    db.session.commit()
    return f'Question (id: {id_question}) : Question (id: {id}) deleted!'


@app.route('/<name_questionnaire>/result', methods=['POST'])
def create_result(name_questionnaire):
    resultData = request.get_json()
    id_questionnaire = db.session.query(Questionnaire).filter(
        Questionnaire.name_questionnaire == name_questionnaire).first().id_questionnaire
    result = Result(id_questionnaire=id_questionnaire)
    db.session.add(result)
    db.session.commit()
    return jsonify(resultData)


if __name__ == '__main__':
    app.run(debug=True)
