import "./App.css";
import Question from "./components/Question";
import QuestionCounter from "./components/QuestionCounter";
import Score from "./components/Score";
import Timer from "./components/Timer";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextProvider>
          <div className="flex">
            <Score />
            <QuestionCounter />
          </div>
          <Timer />
          <h2>country guessing game challenge </h2>
          <Question />
        </ContextProvider>
      </header>
    </div>
  );
}

export default App;
