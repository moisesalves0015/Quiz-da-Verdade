import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Category from "../img/../img/undraw_educator_re_ju47.svg";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a um dos temas abaixo:</p>
      {quizState.questions.map((question) => (
        <button id="butcategoria"
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
