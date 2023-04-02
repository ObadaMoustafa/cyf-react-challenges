import QuestionContextProvider from "./QuestionsContext";
import TimerContextProvider from "./TimerContext";

export const ContextProvider = ({ children }) => {
  return (
    <TimerContextProvider>
      <QuestionContextProvider>{children}</QuestionContextProvider>
    </TimerContextProvider>
  );
};
