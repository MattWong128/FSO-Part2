import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const queryResult = persons.filter((person) => person.name.includes(search));

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
      Filter shown with
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Add new</h2>
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

          {queryResult.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))}
        </div>
      </form>
      <div>
        {/* debug: name: {newName} <br></br>number: {newNumber} search: {search} */}
      </div>
    </div>
  );
};

export default App;
