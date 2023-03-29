import { useContext } from "react";
import { QuestionContext } from "../context/QuestionsContext";
import { optionsClassName } from "../data/constants";

function OneChoice({ capitalName, isCorrect }) {
  //write code here
  const { rightAnswer } = useContext(QuestionContext);
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
    const color = isCorrect ? "green" : "red";
    const options = document.querySelectorAll(`.${optionsClassName}`);
    // color the correct answer
    options.forEach((el) => {
      el.disabled = true;
      el.dataset.country === rightAnswer
        ? (el.style.backgroundColor = "green")
        : (el.style.backgroundColor = "black");
    });
    e.target.style.backgroundColor = color;
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
