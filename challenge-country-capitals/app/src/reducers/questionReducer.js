import data from "../data/capitals.json";
import { createAQuestion } from "../handlers/helperFunctions";
export const ACTIONS = {
  nextQuestion: "next question",
  rightAnswer: "right answer",
  resetTest: "restart quiz",
};

export const initialQuestionState = {
  score: 0,
  currentQuestion: 0,
  question: createAQuestion(data),
};

export const questionReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.nextQuestion:
      state.currentQuestion++;
      state.question = createAQuestion(data);
      break;

    case ACTIONS.rightAnswer:
      state.score += 10;
      break;

    case ACTIONS.resetTest:
      return initialQuestionState;

    default:
      throw new Error("didn't get any action");
  }
};
