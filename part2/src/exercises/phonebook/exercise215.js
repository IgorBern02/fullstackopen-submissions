import { useState, useEffect } from "react";
import Filter from "../../components/phonebook/exercise210/Filter";
import PersonForm from "../../components/phonebook/exercise210/PersonForm";
import Persons from "../../components/phonebook/exercise214/Person";
import noteService from "../../services/persons";

const Phonebook215 = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    noteService.get().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = persons.find(
      (person) => person.name === newName || person.number === newNumber
    );

    if (!existingPerson) {
      noteService.post(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    } else {
      const confirmUpdate = window.confirm(
        `${newName} is alredy adde to phonebook, replace the old number with a new one?`
      );

      if (confirmUpdate) {
        const updatePerson = { ...existingPerson, number: newNumber };

        noteService
          .put(existingPerson.id, updatePerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) =>
                p.id !== existingPerson.id ? p : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.error(error);
          });
      }
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

  const remove = (id) => {
    const person = persons.find((p) => p.id === id);
    if (!person) return;

    const confirm = window.confirm(`Delete ${person.name}?`);
    if (!confirm) return;

    noteService
      .remove(id)
      .then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      })
      .catch((error) => {
        console.log(
          `Information of ${person.name} has already been removed from server`
        );
        setPersons(persons.filter((p) => p.id !== id));
      });
  };

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
      <Persons persons={filteredPersons} remove={remove} />
    </div>
  );
};

export default Phonebook215;
