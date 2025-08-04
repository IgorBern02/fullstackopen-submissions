import { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Dataforcountries220 = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        setCountries(res.data);
      });
  }, []);

  useEffect(() => {
    if (!selectedCountry || !selectedCountry.capital) return;

    const capital = selectedCountry.capital[0];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`;

    axios
      .get(url)
      .then((res) => setWeather(res.data))
      .catch((err) => console.error("Error fetching weather data:", err));
  }, [selectedCountry]);

  const handleInputFilter = (e) => {
    setFilter(e.target.value);
    setSelectedCountry(null);
    setWeather(null);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    if (filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0]);
    }
  }, [filteredCountries]);

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

        {weather && (
          <div>
            <h3>Weather in {country.capital?.[0]}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>Wind speed: {weather.wind.speed} m/s</p>
          </div>
        )}
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

export default Dataforcountries220;
