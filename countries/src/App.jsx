import { useState, useEffect } from "react";
import Server from "./Server";

let listOfAllCountries = [];

function App() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    Server.getAllCountries().then((list) => {
      listOfAllCountries = list;
      // console.log(listOfAllCountries);
    });
  }, []);

  const searchCountries = (query) => {
    const queryResult = listOfAllCountries.filter((name) => name.includes(query));
    if (queryResult.length > 10) return <div>{`Too many matches, results: ${queryResult.length}`}</div>;
    if (queryResult.length == 0) return <div>{` No matches, results: ${queryResult.length} `}</div>;
    return (
      <div>
        <ul>
          {queryResult.map((country, i) => (
            <li key={i}>{country}</li>
          ))}
        </ul>
      </div>
    );
  };
  const handleCountryChange = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
    console.log("------", searchCountries(event.target.value));
  };

  return (
    <div>
      <form action='submit'>
        Find a countries <input type='text' value={country} onChange={handleCountryChange} />
      </form>
      <p>{country}</p>
    </div>
  );
}

export default App;
