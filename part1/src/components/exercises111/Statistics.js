import Statisticsline from "../exercises111/Statisticline";

const Statistics = (props) => {
  return (
    <section>
      <h2>Statistics</h2>

      <table>
        <tr>
          <td>
            <Statisticsline text="Good" />
          </td>
          <td>
            <Statisticsline value={props.good} />
          </td>
        </tr>
        <tr>
          <td>
            <Statisticsline text="Neutral" />
          </td>
          <td>
            <Statisticsline value={props.neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <Statisticsline text="Bad" />
          </td>
          <td>
            <Statisticsline value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>
            <Statisticsline text="Total" />
          </td>
          <td>
            <Statisticsline value={props.total} />
          </td>
        </tr>
        <tr>
          <td>
            <Statisticsline text="Average" />
          </td>
          <td>
            <Statisticsline value={props.average} />
          </td>
        </tr>
        <tr>
          <td>
            <Statisticsline text="Percentage" />
          </td>
          <td>
            <Statisticsline value={props.percentage} />
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Statistics;
