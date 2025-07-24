import { useState } from "react";
import Filter from "../../components/phonebook/exercise210/Filter";
import PersonForm from "../../components/phonebook/exercise210/PersonForm";
import Persons from "../../components/phonebook/exercise210/Person";

const Phonebook210 = () => {
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
      <Filter
        text="filter shown with"
        value={filter}
        onChange={handleInputFilter}
      />
      <h3>Add a new</h3>

      <PersonForm
        onSubmit={handleSubmit}
        newName={newName}
        handleInputNameChange={handleInputNameChange}
        newNumber={newNumber}
        handleInputNumberChange={handleInputNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default Phonebook210;
