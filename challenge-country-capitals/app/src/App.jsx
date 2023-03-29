import "./App.css";
import Question from "./components/Question";
import QuestionContextProvider from "./context/QuestionsContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>country guessing game challenge </h2>
        <QuestionContextProvider>
          <Question />
        </QuestionContextProvider>
      </header>
    </div>
  );
}

export default App;
