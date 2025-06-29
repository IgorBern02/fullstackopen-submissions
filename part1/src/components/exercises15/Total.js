const Total = ({ course }) => {
  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;

  return <p>Total exercises: {total}</p>;
};

export default Total;
