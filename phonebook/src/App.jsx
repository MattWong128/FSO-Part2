import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const queryResult = persons.filter((person) => person.name.includes(search));

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(persons.concat(response.data));
    });
  }, []);

  const handleFilterChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSetNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleSetNewNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const addNewPerson = (event) => {
    event.preventDefault();
    const doesNameExist = persons.some((person) => person.name === newName);
    if (doesNameExist) {
      alert(`${newName} is already added to the phone book`);
      return;
    }
    event.preventDefault();
    const newPersonObj = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newPersonObj));
    setNewName("");
    setNewNumber("");

    console.log(persons);
    console.log("adding new persone: ", newPersonObj);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery={search} onChange={handleFilterChange} />
      <h2>Add new</h2>

      <h2>Numbers</h2>
      <PersonForm
        onSubmit={addNewPerson}
        newName={newName}
        newNumber={newNumber}
        nameOnchange={handleSetNewName}
        numberOnChange={handleSetNewNumber}
      />
      <Persons queryResult={queryResult} />
    </div>
  );
};

export default App;
