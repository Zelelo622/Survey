import React, { Component, useState } from 'react'

export default function SettingQuestion() {
  const listAns = {
      answerOpt: [
        {answerText: 'Да'},
        {answerText: 'Нет'},
        {answerText: 'Не могу ответить'}
      ]
    }
    const [currentQuestion, setCurrentQuestion] = useState(0);
}
