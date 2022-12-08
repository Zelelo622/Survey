import { React, Component } from "react";
import { Routes, Route } from "react-router-dom";

import PageHome from '../components/Home/PageHome';

export default class Home extends Component {
  render() {
    return (
      <Routes>
        <Route path="/home" exact element={<PageHome />} />
      </Routes>
    );
  }
}
