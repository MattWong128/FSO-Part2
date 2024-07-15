import React from "react";

const CountryResults = ({ queryResult }) => {
  if (!queryResult) return null;
  if (queryResult.length > 10) return <div>{`Too many matches, results: ${queryResult.length}`}</div>;
  if (queryResult.length == 0) return <div>{` No matches, results: ${queryResult.length} `}</div>;
  if (queryResult.length == 1) {
    const country = queryResult[0];
    const languages = Object.values(country.languages);
    return (
      <div>
        <h1>
          {country.flag} {country.name.common}
        </h1>
        <b>Languages</b>

        <ul>
          {languages.map((language, i) => (
            <li key={i}>{language}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      {queryResult.map((country) => {
        const name = country.name.common;
        return <li key={name}>{name}</li>;
      })}
    </>
  );
};

export default CountryResults;
