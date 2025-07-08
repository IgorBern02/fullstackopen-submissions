import { useState } from "react";

const Phonebook26 = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
    };

    if (newName === setNewName) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
    }
  };

  const handleInputChance = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChance} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Phonebook26;
