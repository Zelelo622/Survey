import { React, Component } from "react";
import { Routes, Route } from "react-router-dom";

import PageHome from '../components/Home/PageHome';
import PageQuestionHome from '../components/Home/PageQuestionHome';

export default class Home extends Component {
  render() {
    return (
      <Routes>
        <Route path="/home" exact element={<PageHome />} />
        <Route path="/:name_questionnaire/survey" exact element={<PageQuestionHome />} />
      </Routes>
    );
  }
}
