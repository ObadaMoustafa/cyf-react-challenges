import { useContext } from "react";
import { QuestionContext } from "../context/QuestionsContext";
import OneChoice from "./OneChoice";

function Choices() {
  //write code here
  const { questionState } = useContext(QuestionContext);
  const { options, rightAnswer } = questionState.question;

  return (
    <>
      {options.map((country, i) => (
        <OneChoice
          key={i}
          capitalName={country}
          isCorrect={rightAnswer === country}
        />
      ))}
    </>
  );
}

export default Choices;
