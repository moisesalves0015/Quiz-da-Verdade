import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import Frases from "./components/Frases";

import PickCategory from "./components/PickCategory";

import "./App.css";


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">

      <h1 id="Titulo">Quiz da Verdade</h1>



      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
      <Frases></Frases>

    </div>
  );
}

export default App;
