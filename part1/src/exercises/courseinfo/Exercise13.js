import Header from "../../components/courseinfo/exercises11/Header";
import Content from "../../components/courseinfo/exercises13/Content";
import Total from "../../components/courseinfo/exercises11/Total";

const Exercise13 = () => {
  const course = {
    text: "Half Stack Application Development",
  };
  const part1 = {
    name: "React Library Fundamentals",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course.text} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default Exercise13;
