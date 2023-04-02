import { useContext } from "react";
import { QuestionContext } from "../context/QuestionsContext";
import { TimerContext } from "../context/TimerContext";
import { optionsClassName } from "../data/constants";
import { disableOptions } from "../handlers/helperFunctions";

function OneChoice({ capitalName, isCorrect }) {
  //write code here
  const { questionState, raiseScore } = useContext(QuestionContext);
  const rightAnswer = questionState.question.rightAnswer;
  const { stopTimer } = useContext(TimerContext);
  const style = {
    cursor: "pointer",
    display: "block",
    margin: " 5px auto",
    width: "50%",
    height: "35px",
    fontSize: "0.75em",
    color: "black",
  };

  const handleChoice = (e) => {
    stopTimer();
    const color = isCorrect ? "green" : "red";
    const options = disableOptions();
    // color the correct answer
    options.forEach((el) => {
      if (el.dataset.country === rightAnswer)
        el.style.backgroundColor = "green";
    });
    e.target.style.backgroundColor = color;

    // set score
    if (isCorrect) raiseScore();
  };

  return (
    <button
      style={style}
      onClick={handleChoice}
      className={optionsClassName}
      data-country={capitalName}
    >
      {capitalName}
    </button>
  );
}

export default OneChoice;
