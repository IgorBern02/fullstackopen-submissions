import Header from "../../components/courseinfo/exercises11/Header";
import Content from "../../components/courseinfo/exercises11/Content";
import Total from "../../components/courseinfo/exercises11/Total";

const Exercises11 = () => {
  const course = "Half Stack Application Development";
  const part1 = "React Library Fundamentals";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <p>
        <Content part={part1} exercises={exercises1} />
      </p>
      <p>
        <Content part={part2} exercises={exercises2} />
      </p>
      <p>
        <Content part={part3} exercises={exercises3} />
      </p>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default Exercises11;
