import { useState, useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { all } from "axios";

const Counter_feetbacks = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let sumFead = good + neutral + bad;

  function countTotalFeedback() {
    let positiveStatistic = parseFloat((100 / sumFead) * good) || 0;
    if (positiveStatistic == parseInt(positiveStatistic)) {
      return positiveStatistic;
    } else {
      return positiveStatistic.toFixed(1);
    }
    // positiveStatistic = parseFloat((100/sumFead)*good).toFixed(1)||0;
    // return positiveStatistic;
  }

  return (
    <div className="counter">
      <h1>Please leave feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <br />
      {(sumFead > 0 && (
        <div>
          <h2>Statisic</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <h3 className="positive_FeadBack">
            Positive feedback: {countTotalFeedback()}%
          </h3>
        </div>
      )) || <p>There is not feedback</p>}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Counter_feetbacks />
    </div>
  );
}

export default App;
