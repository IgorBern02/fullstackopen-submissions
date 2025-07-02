import Header from "../../components/exercises11/Header";
import Content from "../../components/exercises12/Content";
import Total from "../../components/exercises11/Total";

const Exercise12 = () => {
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
      <Content
        part1={part1}
        exercise1={exercises1}
        part2={part2}
        exercise2={exercises2}
        part3={part3}
        exercise3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default Exercise12;
