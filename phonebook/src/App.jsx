import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewPerson = (event) => {
    const doesNameExist = persons.some((person) => person.name === newName);
    if (doesNameExist) {
      alert(`${newName} is already added to the phone book`);
      return;
    }
    event.preventDefault();
    const newPersonObj = {
      name: newName,
    };
    setPersons(persons.concat(newPersonObj));
    setNewName("");

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
          <button type='submit'>add</button>
        </div>
        <div>
          {persons.map((person) => (
            <p key={person.name}>{person.name}</p>
          ))}
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
