import { useContext } from "react";
import { QuestionContext } from "../context/QuestionsContext";

export const useScore = () => {
  const { questionState } = useContext(QuestionContext);
  return questionState.score;
};
