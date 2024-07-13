import React from "react";

const Persons = ({ queryResult }) => {
  return (
    <div>
      {queryResult.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
