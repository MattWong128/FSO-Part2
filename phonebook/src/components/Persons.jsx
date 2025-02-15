import React from "react";
import Server from "../services/Server";
const Persons = ({ queryResult, handleDelete }) => {
  return (
    <div>
      {queryResult.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default Persons;
