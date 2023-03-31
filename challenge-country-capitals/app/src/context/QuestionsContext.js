import { createContext, useContext, useEffect, useState } from "react";
import {
  generateRandomIndex,
  getRandomChoices,
  resetOptions,
} from "../handlers/helperFunctions";
import data from "../data/capitals.json";
import { TimerContext } from "./TimerContext";

export const QuestionContext = createContext();
const QuestionContextProvider = ({ children }) => {
  const numberOfQuestions = 10;
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { resetTimer } = useContext(TimerContext);
  function raiseScore() {
    setScore((prev) => prev + 10);
  }
  const [countryName, setCountryName] = useState(
    () => data[generateRandomIndex(data)].name
  );

  const [rightAnswer, setRightAnswer] = useState(
    () => data.find((country) => country.name === countryName).capital
  );

  const [options, setOptions] = useState(() =>
    getRandomChoices(rightAnswer, data)
  );

  useEffect(() => {
    setRightAnswer(
      data.find((country) => country.name === countryName).capital
    );

    setCurrentQuestion((prev) => prev + 1);
  }, [countryName]);

  useEffect(() => {
    setOptions(getRandomChoices(rightAnswer, data));
  }, [rightAnswer]);

  const getNextQuestion = (e) => {
    if (currentQuestion === numberOfQuestions - 1) {
      e.target.disabled = true;
    }
    resetTimer();
    setCountryName(data[generateRandomIndex(data)].name);
    resetOptions();
  };

  const sharedValue = {
    countryName,
    getNextQuestion,
    rightAnswer,
    options,
    score,
    raiseScore,
    currentQuestion,
  };

  return (
    <QuestionContext.Provider value={sharedValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
