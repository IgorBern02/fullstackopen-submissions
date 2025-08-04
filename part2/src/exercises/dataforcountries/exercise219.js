import { useEffect, useState } from "react";
import axios from "axios";

const Dataforcountries219 = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        setCountries(res.data);
      });
  }, []);

  const handleInputFilter = (e) => {
    setFilter(e.target.value);
    setSelectedCountry(null);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const handleShow = (country) => {
    setSelectedCountry(country);
  };

  const renderCountryDetails = (country) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital?.[0]}</p>
        <p>Area: {country.area} km²</p>
        <h3>Languages:</h3>
        <ul>
          {country.languages &&
            Object.values(country.languages).map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
        </ul>
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          width={150}
        />
      </div>
    );
  };

  return (
    <div>
      <div>
        Search countries: <input value={filter} onChange={handleInputFilter} />
      </div>

      {selectedCountry ? (
        renderCountryDetails(selectedCountry)
      ) : filteredCountries.length > 10 ? (
        <p>A lot of matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        renderCountryDetails(filteredCountries[0])
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}{" "}
              <button onClick={() => handleShow(country)}>show</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dataforcountries219;
