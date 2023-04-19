const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const API_KEY = process.env.WEATHER_API_KEY;

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
  
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const weatherData = {
        temperature: response.data.main.temp,
        location: response.data.name,
        date: new Date(response.data.dt * 1000).toLocaleString(),
        sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString(),
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        windSpeed: response.data.wind.speed,
        icon: response.data.weather[0].icon,
      };
  
      res.json(weatherData);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching weather data', error: error.message });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
