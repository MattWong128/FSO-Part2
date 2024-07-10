import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 4162031111 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNewPerson = (event) => {
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
      <form onSubmit={addNewPerson}>
        <div>
          name:
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          Number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
        <div>
          <h2>Numbers</h2>

          {persons.map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
        </div>
      </form>
      <div>
        debug: name: {newName} <br></br>number: {newNumber}
      </div>
    </div>
  );
};

export default App;
