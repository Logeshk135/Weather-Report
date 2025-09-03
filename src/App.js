import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState("");
  const [temp, settemp] = useState("");
  const [description, setdescription] = useState("");

  function handleCity(evt) {
    setcity(evt.target.value);
  }

  function getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd9c7e6a8edb14e0a036ce478a2e56ac&units=metric`
      )
      .then(function (Success) {
        console.log(Success.data);
        setweather(Success.data.weather[0].main);
        settemp(Success.data.main.temp);
        setdescription(Success.data.weather[0].description);
      })
      .catch(function (error) {
        console.error("Error fetching weather:", error);
        alert("City not found! Please enter a valid city.");
      });
  }

  return (
    <div className="container">
      <h2>Weather Report</h2>
      <p>I can give you a weather report about your city!</p>

      <input
        type="text"
        onChange={handleCity}
        placeholder="Enter your City Name"
        className="input"
      />
      <br />
      <button onClick={getWeather} className="button">
        Get Report
      </button>

      <div className="result">
        <p>
          <strong>Weather:</strong> {weather}
        </p>
        <p>
          <strong>Temperature:</strong> {temp} °C
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
    </div>
  );
}

export default App;
