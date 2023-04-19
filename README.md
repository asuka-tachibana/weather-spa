# Weather App

A simple full-stack weather application built using React, Node.js, and Express that fetches and displays weather information for a specified city using the Weatherbit API.

## Features

- Search for weather information by city name
- Displays temperature, location, date, sunset time, humidity, pressure, wind speed, and weather icons
- Responsive and user-friendly interface

## Getting Started

Follow these steps to set up and run the Weather App locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)

### Installation

1. Clone the repository:

   ```git clone https://github.com/yourusername/weather-app.git```

2. Change into the 'weather-app' directory:

   ```cd weather-app```

3. Install the server dependencies:
   ```cd server```
   ```npm install```

4. Create a `.env` file in the `server` folder and add your Weatherbit API key:
   ```WEATHERBIT_API_KEY=your_api_key_here```
   Replace `your_api_key_here` with your actual Weatherbit API key.

5. Install the client dependencies:
   ```cd ../client```
   ```npn install```

### Running the App

1. Start the server:
   ```cd ../server```
   ```node index.js```
   You should see the output `Server is running on port 3001` (or the port number you specified) in the terminal.

2. In a separate terminal, start the client:
   ```cd ../client```
   ```npm start```

This command should automatically open your default web browser to `http://localhost:3000`. If it doesn't, you can manually navigate to the URL.

3. Use the app by entering a city name in the search field and pressing `Enter`. The app will display weather information for the specified city.

## Deployment

To deploy the Weather App, follow the standard deployment procedures for a React and Node.js application. You can use platforms like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) for the front-end and [Heroku](https://www.heroku.com/) for the back-end.

## License

This project is open-source and available under the MIT License. See the `LICENSE` file for more information.
