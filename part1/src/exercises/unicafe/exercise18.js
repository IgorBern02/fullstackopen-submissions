import { useState } from "react";
import Statistics from "../../components/exercises18/Statistics";

const Unicafe18 = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    const updateGood = good + 1;
    setGood(updateGood);
    setTotal(updateGood + neutral + bad);
  };

  const handleNeutral = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    setTotal(good + updateNeutral + bad);
  };

  const handleBad = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
    setTotal(good + neutral + updateBad);
  };

  const average = () => {
    const total = good + neutral + bad;
    return (total / 3).toFixed(2);
  };

  const percentage = (good / total) * 100;

  return (
    <div>
      <section>
        <h2>Give Feedback</h2>
        <div>
          <button onClick={handleGood}>Good</button>
          <button onClick={handleNeutral}>Neutral</button>
          <button onClick={handleBad}>Bad</button>
        </div>
      </section>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average()}
        percentage={percentage.toFixed(2)}
      />
    </div>
  );
};

export default Unicafe18;
