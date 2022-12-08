from sqlalchemy import Column, ForeignKey, Identity, Integer, String
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class Questionnaire(Base):
    __tablename__ = 'questionnaire'

    id_questionnaire = Column(Integer, Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True)
    name_questionnaire = Column(String(100), nullable=False)
    sex = Column(String(30), nullable=False)
    year_birth = Column(Integer, nullable=False)

    question = relationship('Question', back_populates='questionnaire')
    result = relationship('Result', back_populates='questionnaire')


class Question(Base):
    __tablename__ = 'question'

    id_question = Column(Integer, Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True)
    formulation = Column(String(256), nullable=False)
    id_questionnaire = Column(ForeignKey('questionnaire.id_questionnaire'), nullable=False)

    questionnaire = relationship('Questionnaire', back_populates='question')
    answer = relationship('Answer', back_populates='question')


class Result(Base):
    __tablename__ = 'result'

    id_result = Column(Integer, Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True)
    yes_num = Column(Integer, nullable=True)
    no_num = Column(Integer, nullable=True)
    dknow_num = Column(Integer, nullable=True)
    id_questionnaire = Column(ForeignKey('questionnaire.id_questionnaire'), nullable=True)

    questionnaire = relationship('Questionnaire', back_populates='result')


class Answer(Base):
    __tablename__ = 'answer'

    id_answer = Column(Integer, Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True)
    answer_option = Column(String(100))
    id_question = Column(ForeignKey('question.id_question'))

    question = relationship('Question', back_populates='answer')
