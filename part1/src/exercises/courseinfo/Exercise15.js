import Header from "../../components/exercises15/Header";
import Content from "../../components/exercises15/Content";
import Total from "../../components/exercises15/Total";

const Exercise15 = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Exercise15;
