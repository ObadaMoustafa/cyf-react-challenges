import "./App.css";
import Question from "./components/Question";
import QuestionCounter from "./components/QuestionCounter";
import Score from "./components/Score";
import Timer from "./components/Timer";
import QuestionContextProvider from "./context/QuestionsContext";
import TimerContextProvider from "./context/TimerContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimerContextProvider>
          <QuestionContextProvider>
            <div className="flex">
              <Score />
              <QuestionCounter />
            </div>
            <Timer />
            <h2>country guessing game challenge </h2>
            <Question />
          </QuestionContextProvider>
        </TimerContextProvider>
      </header>
    </div>
  );
}

export default App;
