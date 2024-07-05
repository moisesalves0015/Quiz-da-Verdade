import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";
import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="questaoCont">
      <div id="videoCon">
        {currentQuestion.Video && (
          <div className="video-container">
            <iframe id="video"
              width="100%"
              height="200px"
              src={`https://www.youtube.com/embed/${currentQuestion.Video}`}
              title={currentQuestion.VideoTitulo}
              frameBorder="0"
              allowFullScreen
            />
            <h2 id="videoTitulo">{currentQuestion.VideoTitulo}</h2>
          </div>
        )}

        {currentQuestion.Paragrafo && (
          <p id="videoDescricao">{currentQuestion.Paragrafo}</p>
        )}


      </div>
      <div id="materialCon">
        {currentQuestion.images && (
          <div className="image-gallery">
            {currentQuestion.images.map((src, index) => (
              <img key={index} src={src} alt={`Imagem ${index + 1}`} className="question-image" />
            ))}
          </div>
        )}
      </div>
      <div id="question">
        <p>
          Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
        </p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
          {currentQuestion.options.map((option) => (
            <Option
              option={option}
              key={option}
              answer={currentQuestion.answer}
              selectOption={() => onSelectOption(option)}
              hide={quizState.optionToHide === option ? "hide" : null}
            />
          ))}
        </div>
        {!quizState.answerSelected && !quizState.help && (
          <>
            {/* Seção para dicas ou ajuda, se necessário */}
          </>
        )}
        {!quizState.answerSelected && quizState.help === "tip" && (
          <p>{currentQuestion.tip}</p>
        )}
        {quizState.answerSelected && (
          <p id="return">{currentQuestion.Return}</p>
        )}
        {quizState.answerSelected && (
          <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
          </button>
        )}

      </div>
    </div>
  );
};

export default Question;
