const Persons = (props) => {
  if (props.persons.length === 0) {
    return <p>No names found</p>;
  }

  return (
    <ul>
      {props.persons.map((person) => (
        <li key={person.name}>
          {person.name}: {person.number}
          <button
            style={{ marginLeft: "5px" }}
            onClick={() => props.remove(person.id)}
          >
            {" "}
            Delete{" "}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
