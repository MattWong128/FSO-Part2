import React from "react";

const Persons = ({ queryResult }) => {
  return (
    <div>
      {queryResult.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </div>
  );
};

export default Persons;
