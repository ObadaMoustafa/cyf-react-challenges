import { useContext } from "react";
import { QuestionContext } from "../context/QuestionsContext";

function QuestionCounter() {
  //write code here
  const { currentQuestion } = useContext(QuestionContext);

  return <h1>question {currentQuestion}/10</h1>;
}

export default QuestionCounter;
