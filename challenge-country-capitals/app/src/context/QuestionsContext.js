import { createContext, useEffect, useState } from "react";
import {
  generateRandomIndex,
  getRandomChoices,
  resetOptions,
} from "../handlers/helperFunctions";
import data from "../data/capitals.json";

export const QuestionContext = createContext();
const QuestionContextProvider = ({ children }) => {
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
  }, [countryName]);

  useEffect(() => {
    setOptions(getRandomChoices(rightAnswer, data));
  }, [rightAnswer]);

  const getNextQuestion = () => {
    setCountryName(data[generateRandomIndex(data)].name);
    resetOptions();
  };

  const sharedValue = { countryName, getNextQuestion, rightAnswer, options };

  return (
    <QuestionContext.Provider value={sharedValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
