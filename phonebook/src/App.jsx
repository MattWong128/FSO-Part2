import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Server from "./services/Server";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  console.log("Current persons:", persons);

  const queryResult = persons.filter((person) => person.name.includes(search));

  useEffect(() => {
    Server.get().then((initialNumber) => {
      setPersons(initialNumber);
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
    Server.create(newPersonObj).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });

    console.log(persons);
    console.log("adding new persone: ", newPersonObj);
  };
  const deletePerson = (id) => {
    const name = persons.find((p) => p.id == id).name;
    if (window.confirm(`delete ${name}`)) {
      Server.del(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
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

      <Persons queryResult={queryResult} handleDelete={deletePerson} />
    </div>
  );
};

export default App;
