import { useContext } from "react";
import Choices from "./Choices";
import NextBtn from "./NextBtn";
import { QuestionContext } from "../context/QuestionsContext";

function Question() {
  //write code here
  const { questionState, getNextQuestion } = useContext(QuestionContext);
  const countryName = questionState.question.countryName;

  return (
    <>
      <h1>What is the capital of {countryName} ?</h1>
      <Choices />
      <NextBtn onclick={getNextQuestion} />
    </>
  );
}

export default Question;
