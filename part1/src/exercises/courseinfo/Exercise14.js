import Header from "../../components/courseinfo/exercises11/Header";
import Content from "../../components/courseinfo/exercises14/Content";
import Total from "../../components/courseinfo/exercises14/Total";

const Exercise14 = () => {
  const course = "Half Stack Application Development";
  const parts = [
    {
      name: "React Library Fundamentals",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Exercise14;
