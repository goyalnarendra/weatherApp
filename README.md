# WeatherApp

WeatherApp is a simple web application that provides weather information based on the city name entered by the user. It utilizes the OpenWeatherMap API to fetch real-time weather data.

## Features

- Input field to enter city name.
- Display of current weather conditions such as temperature, humidity, and weather description.
- Responsive design using Material Design Bootstrap for easy viewing on various devices.

## Technologies Used

- HTML
- JavaScript
- Material Design Bootstrap

## How to Use

1. Clone this repository to your local machine using `git clone https://github.com/goyalnarendra/weatherApp.git`.
2. Open `index.html` in your preferred web browser.
3. Enter the name of the city for which you want to check the weather and press Enter or click the "Get Weather" button.
4. The application will fetch weather data from OpenWeatherMap API and display it on the screen.

## API Usage

This project utilizes the [OpenWeatherMap API](https://openweathermap.org/) to retrieve weather data. You will need to sign up for an API key to use their services. Once you have obtained an API key, replace `YOUR_API_KEY` in `script.js` with your actual API key.

```javascript
const apiKey = 'YOUR_API_KEY';
```

## Acknowledgments
-OpenWeatherMap for providing the weather data API.
-Material Design Bootstrap for the responsive design components.
