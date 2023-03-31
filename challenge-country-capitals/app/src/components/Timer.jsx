import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

function Timer() {
  //write code here
  const { timer } = useContext(TimerContext);
  return <h2>Hurry up {timer}</h2>;
}

export default Timer;
