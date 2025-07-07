const Total = ({ course }) => {
  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises +
    course.parts[3].exercises;

  return <h4>Total of {total} exercises</h4>;
};

export default Total;
