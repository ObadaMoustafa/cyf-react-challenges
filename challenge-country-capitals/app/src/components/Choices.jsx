import { useContext } from "react";
import { QuestionContext } from "../context/QuestionsContext";
import OneChoice from "./OneChoice";

function Choices() {
  //write code here
  const { options, rightAnswer } = useContext(QuestionContext);

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
