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
    });
  }, []);

  const searchCountries = (query) => {
    const queryResult = listOfAllCountries.filter((country) => {
      let countryName = country.name.common.toLowerCase();
      return countryName.includes(query.toLowerCase());
    });
    setCountries(queryResult);
  };
  const handleCountryChange = (event) => {
    event.preventDefault();
    const country = event.target.value;

    if (country == "") {
      setCountries(null);
      setCountry("");
      return;
    }
    setCountry(country);
    searchCountries(country);
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
