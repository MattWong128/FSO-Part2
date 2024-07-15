import { useState } from "react";

function App() {
  const [country, setCountry] = useState("");

  const handleCountryChange = (event) => {
    event.preventDefault();
    console.log(event.target);
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
