import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import ListQuestionnaireElement from "../components/Questionnaire_comp/ListQuestionnaireElement";
import CreateQuestionnaireElement from "../components/Questionnaire_comp/CreateQuestionnaireElement";
import ViewQuestionnaireElement from "../components/Questionnaire_comp/ViewQuestionnaireElement";
import UpdateQuestionnaireElement from "../components/Questionnaire_comp/UpdateQuestionnaireElement";

export default class Questionnaire extends Component {
  render() {
    return (
      <Routes>
        <Route
          path="/questionnaire"
          exact
          element={<ListQuestionnaireElement />}
        />
        <Route
          path="/add-questionnaire/:id"
          element={<CreateQuestionnaireElement />}
        />
        <Route
          path="/view-questionnaire/:id"
          element={<ViewQuestionnaireElement />}
        />
        <Route
          path="/update-questionnaire/:id"
          element={<UpdateQuestionnaireElement />}
        />
      </Routes>
    );
  }
}
