import { useContext } from "react";
import { QuestionContext } from "./context/QuestionsContext";

export const useScore = () => {
  const { score } = useContext(QuestionContext);
  return score;
};
