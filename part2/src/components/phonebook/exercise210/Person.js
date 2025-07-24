const Persons = (props) => {
  if (props.persons.length === 0) {
    return <p>No names found</p>;
  }

  return (
    <ul>
      {props.persons.map((person) => (
        <li key={person.name}>
          {person.name}: {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
