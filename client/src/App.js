import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Questionnaire from "./pages/Questionnaire";
import Question from "./pages/Question";
import Home from "./pages/Home";

function App() {

  return (
    <div>
      <Header />
      <Questionnaire />
      <Question />
      <Home />
    </div>
  );
}

export default App;
