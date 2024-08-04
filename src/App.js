// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Add your CSS file for styling

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the country data from the API
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error('Error fetching the country data:', error);
      });
  }, []);

  // Filter countries based on the search term
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="countryGrid">
        {filteredCountries.map((country, index) => (
          <div key={index} className="countryCard">
            {console.log('effefefe', country.flags)}
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className="flagImage"
            />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
