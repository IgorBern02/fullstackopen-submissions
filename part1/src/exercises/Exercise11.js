import Header from "../components/exercises11/Header";
import Content from "../components/exercises11/Content";
import Total from "../components/exercises11/Total";

const Exercises11 = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const part1 = "Fundamentos da biblioteca React";
  const exercises1 = 10;
  const part2 = "Usando props para passar dados";
  const exercises2 = 7;
  const part3 = "Estado de um componente";
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
