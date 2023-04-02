import { createContext, useContext } from "react";
import { enableOptions } from "../handlers/helperFunctions";
import { TimerContext } from "./TimerContext";
import { useImmerReducer } from "use-immer";
import {
  ACTIONS,
  initialQuestionState,
  questionReducer,
} from "../reducers/questionReducer";

export const QuestionContext = createContext();
const QuestionContextProvider = ({ children }) => {
  const numberOfQuestions = 10;
  const [questionState, dispatch] = useImmerReducer(
    questionReducer,
    initialQuestionState
  );
  const { resetTimer } = useContext(TimerContext);
  function raiseScore() {
    dispatch({ type: ACTIONS.rightAnswer });
  }

  const getNextQuestion = (e) => {
    if (questionState.currentQuestion === numberOfQuestions - 1) {
      e.target.disabled = true;
    }
    resetTimer();
    dispatch({ type: ACTIONS.nextQuestion });
    enableOptions();
  };

  const sharedValue = {
    questionState,
    getNextQuestion,
    raiseScore,
  };

  return (
    <QuestionContext.Provider value={sharedValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
