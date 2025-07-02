const Statistics = (props) => {
  return (
    <section>
      <h2>Statistics</h2>
      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>Total:{props.total}</p>
        <p>Average:{props.media}</p>
      </div>
    </section>
  );
};

export default Statistics;
