import Statisticsline from "./Statisticline";

const Statistics = (props) => {
  return (
    <section>
      <h2>Statistics</h2>
      <div>
        <Statisticsline text="Good" value={props.good} />
        <Statisticsline text="Neutral" value={props.neutral} />
        <Statisticsline text="Bad" value={props.bad} />
        <Statisticsline text="Total" value={props.total} />
        <Statisticsline text="Average" value={props.average} />
        {props.total === 0 ? (
          <p>Percentage: 0.00%</p>
        ) : (
          <p>
            <Statisticsline text="Percentage" value={props.percentage} />
          </p>
        )}
      </div>
    </section>
  );
};

export default Statistics;
