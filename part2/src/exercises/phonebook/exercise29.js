import { use, useState } from "react";

const Phonebook29 = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const existingPerson = persons.find(
      (person) => person.name === newName || person.number === newNumber
    );

    if (!existingPerson) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} or number ${newNumber} is already added to phonebook`);
    }
  };

  const handleInputNameChange = (e) => {
    const onlyLetters = e.target.value.replace(/[0-9]/g, "");
    setNewName(onlyLetters);
  };

  const handleInputNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleInputFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={filter} onChange={handleInputFilter} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Add a new</h2>
          name:{" "}
          <input value={newName} onChange={handleInputNameChange} type="text" />
        </div>

        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={handleInputNumberChange}
            type="number"
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.length > 0 ? (
          filteredPersons.map((person) => (
            <li key={person.name}>
              {person.name}: {person.number}
            </li>
          ))
        ) : (
          <li>No names found</li>
        )}
      </ul>
    </div>
  );
};

export default Phonebook29;
