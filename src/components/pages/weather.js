import React, { useState, useEffect } from "react";

function WeatherForecast() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "3db7ffb72c654328903140254232405";
  const LOCATION = "Indonesia";

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${LOCATION}&aqi=no`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div>
      <h2 className="weather-forecast-title">Weather Forecast - {LOCATION}</h2>
      <div className="weather-details">
        <div className="weather-info">
          <p className="weather-label">Temperature:</p>
          <p className="weather-value">{weatherData.current.temp_c}°C</p>
        </div>
        <div className="weather-info">
          <p className="weather-label">Condition:</p>
          <p className="weather-value">{weatherData.current.condition.text}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
