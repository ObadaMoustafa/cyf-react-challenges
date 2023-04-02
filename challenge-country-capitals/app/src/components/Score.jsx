import { useScore } from "../hooks/useScore";

function Score() {
  //write code here
  const score = useScore();
  return <h1>Your score {score}</h1>;
}

export default Score;
