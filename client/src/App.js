import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Questionnaire from "./pages/Questionnaire";

function App() {

  return (
    <div>
      <Header />
      <Questionnaire />
    </div>
  );
}

export default App;
