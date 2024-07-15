import React, { useState } from "react";

const CountryDetails = ({ country }) => {
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
};

const CountryResults = ({ queryResult }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  console.log(selectedCountries);
  if (!queryResult) return null;
  if (queryResult.length > 10) return <div>{`Too many matches, results: ${queryResult.length}`}</div>;
  if (queryResult.length == 0) return <div>{` No matches, results: ${queryResult.length} `}</div>;
  if (queryResult.length == 1) {
    return <CountryDetails country={queryResult[0]} />;
  }

  const handleShow = (country) => {
    if (!isCountrySelected(country)) {
      setSelectedCountries(selectedCountries.concat(country));
    } else {
      setSelectedCountries(selectedCountries.filter((c) => c.name.common != country.name.common));
    }
  };
  const isCountrySelected = (country) => selectedCountries.includes(country);
  return (
    <>
      {queryResult.map((country) => {
        const name = country.name.common;
        return (
          <li key={name}>
            {name} <button onClick={() => handleShow(country)}>{!isCountrySelected(country) ? "show" : "hide"}</button>
            {isCountrySelected(country) && <CountryDetails country={country} />}
          </li>
        );
      })}
    </>
  );
};

export default CountryResults;
