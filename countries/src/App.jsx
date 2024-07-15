import { useState, useEffect } from "react";
import Server from "./Server";
import CountryResults from "./components/CountryResults";

let listOfAllCountries = [];

function App() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    Server.getAllCountries().then((list) => {
      listOfAllCountries = list;
      // console.log(listOfAllCountries);
    });
  }, []);

  const searchCountries = (query) => {
    const queryResult = listOfAllCountries.filter((name) => name.toLowerCase().includes(query.toLowerCase()));
    setCountries(queryResult);
  };
  const handleCountryChange = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
    searchCountries(event.target.value);
  };

  return (
    <div>
      <form action='submit'>
        Find a countries <input type='text' value={country} onChange={handleCountryChange} />
      </form>
      <CountryResults queryResult={countries} />
    </div>
  );
}

export default App;
