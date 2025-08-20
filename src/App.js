import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    name: "",
    temp: "",
    description: "",
  });

  const handleReport = () => {
    if (city.trim() === "") {
      alert("Please enter a city name!");
      return;
    }

    // 🔹 Dummy data (store pannuradhu only)
    setWeatherData({
      name: city,
      temp: "30°C",
      description: "Clear Sky",
    });

    setCity(""); // clear input
  };

  return (
    <div className="container">
      <h2>Weather Report</h2>
      <p>I can give you a weather report about your city !</p>

      <input
        type="text"
        placeholder="Enter your City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input"
      /><br></br>
      <button onClick={handleReport} className="button">
        Get Report
      </button>

      <div className="result">
        <p><strong>Weather:</strong> {weatherData.name}</p>
        <p><strong>Temperature:</strong> {weatherData.temp}</p>
        <p><strong>Description:</strong> {weatherData.description}</p>
      </div>
    </div>
  );
}

export default App;
