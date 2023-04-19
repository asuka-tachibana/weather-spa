const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const API_KEY = process.env.WEATHER_API_KEY;

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
  
    try {
      const response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&units=M`);
      const weatherData = {
        temperature: response.data.data[0].temp,
        location: response.data.data[0].city_name,
        date: new Date(response.data.data[0].ts * 1000).toLocaleString(),
        sunset: new Date(response.data.data[0].sunset * 1000).toLocaleTimeString(),
        humidity: response.data.data[0].rh,
        pressure: response.data.data[0].pres,
        windSpeed: response.data.data[0].wind_spd,
        icon: response.data.data[0].weather.icon,
      };
  
      res.json(weatherData);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching weather data', error: error.message });
    }
  });  
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
