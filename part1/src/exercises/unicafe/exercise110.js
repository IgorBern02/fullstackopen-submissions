import { useState } from "react";
import Statistics from "../../components/exercises110/Statistics";
import Button from "../../components/exercises110/Button";

const Unicafe110 = (props) => {
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

  const percentage = total > 0 ? ((good / total) * 100).toFixed(2) + "%" : "0%";

  return (
    <div>
      <section>
        <h2>Give Feedback</h2>
        <div>
          <Button onClick={handleGood} text="Good" />
          <br></br>
          <Button onClick={handleNeutral} text="Neutral" />
          <br></br>
          <Button onClick={handleBad} text="Bad" />
        </div>
      </section>

      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average()}
          percentage={percentage}
        />
      )}
    </div>
  );
};

export default Unicafe110;
