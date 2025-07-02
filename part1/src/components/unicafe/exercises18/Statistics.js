const Statistics = (props) => {
  return (
    <section>
      <h2>Statistics</h2>
      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>Total: {props.total}</p>
        <p>Average: {props.average}</p>
        {props.total === 0 ? (
          <p>Percentage: 0.00%</p>
        ) : (
          <p>Percentage: {props.percentage} %</p>
        )}
      </div>
    </section>
  );
};

export default Statistics;
