import React from "react";

const CountryResults = ({ queryResult }) => {
  if (queryResult.length > 10) return <div>{`Too many matches, results: ${queryResult.length}`}</div>;
  if (queryResult.length == 0) return <div>{` No matches, results: ${queryResult.length} `}</div>;
  return (
    <div>
      <ul>
        {queryResult.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryResults;
