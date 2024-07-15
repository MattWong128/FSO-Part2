import { useState, useEffect } from "react";
import Server from "./Server";

let listOfAllCountries = [];

function App() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState({});

  useEffect(() => {
    Server.getAllCountries().then((list) => {
      listOfAllCountries = list;
      console.log(listOfAllCountries);
    });
  }, []);

  const searchCountries = (query) => {};
  const handleCountryChange = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
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
