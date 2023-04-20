import React, { useState } from 'react';
import './App.css';

/**
 * Functional component for a weather app that allows users to search for a
 * city and get weather information.
 *
 * @returns {JSX.Element} The weather app UI with search bar, weather data, and error message.
 */
function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/weather/${city}`);
      const data = await response.json();

      if (response.status !== 200) {
        setError(data.message);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (err) {
      setError('Error fetching weather data. Please try again later.');
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-data">
          <h2>{weatherData.location}</h2>
          <p>{weatherData.date}</p>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Sunset: {weatherData.sunset}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Pressure: {weatherData.pressure} hPa</p>
          <p>Wind speed: {weatherData.windSpeed} m/s</p>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${weatherData.icon}.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;

