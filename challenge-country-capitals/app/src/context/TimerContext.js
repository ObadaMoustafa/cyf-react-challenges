import { createContext, useEffect, useState, useRef } from "react";
import { disableOptions } from "../handlers/helperFunctions";

export const TimerContext = createContext();
const TimerContextProvider = ({ children }) => {
  const [timer, setTimer] = useState(5);
  const [shouldCount, setShouldCount] = useState(true);
  const timerId = useRef();

  useEffect(() => {
    if (timer > 0 && shouldCount) {
      timerId.current = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    }

    if (timer <= 0) disableOptions();
    // eslint-disable-next-line
  }, [timer]);

  function resetTimer() {
    clearTimeout(timerId);
    setTimer((prev) => (prev === 5 ? 6 : 5));
    setShouldCount(true);
  }

  function stopTimer() {
    clearTimeout(timerId.current);
    setShouldCount(false);
  }

  const sharedValues = { timer, resetTimer, stopTimer };
  return (
    <TimerContext.Provider value={sharedValues}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
