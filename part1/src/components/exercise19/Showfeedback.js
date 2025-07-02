// import Statistics from "../exercises18/Statistics";

const Showfeedback = (props) => {
  if (props.total.length === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total:{props.total}</p>
      <p>Average:{props.media}</p>
    </div>
  );
};

export default Showfeedback;
