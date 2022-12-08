import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import ListQuestionElement from "../components/Question_comp/ListQuestionElement";
import CreateQuestionElement from "../components/Question_comp/CreateQuestionElement";
import UpdateQuestionElement from "../components/Question_comp/UpdateQuestionElement";
import ListQuestionnaire from "../components/Question_comp/ListQuestionnaire"

export default class Question extends Component {
  render() {
    return (
      <Routes>
        <Route
          path="/question"
          exact
          element={<ListQuestionnaire />}
        />
        <Route
          path="/:name_questionnaire/list-question"
          exact
          element={<ListQuestionElement />}
        />
        <Route
          path="/:name_questionnaire/add-question"
          element={<CreateQuestionElement />}
        />
        <Route
          path="/:name_questionnaire/update-question/:id"
          element={<UpdateQuestionElement />}
        />
      </Routes>
    );
  }
}
