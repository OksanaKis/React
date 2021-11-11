import './App.css';
import React, {useState} from "react";

const api = {
  key: "c60621f6b01ac75d9cb4f8afef300fdc",
  base: "http://api.openweathermap.org/data/2.5/",
}

function App() {

  console.log('hhhhhhh');
  return (
    <div className={
      typeof weather.main != "undefined"
      ? (weather.main.temp < 3)
         ? "app cold"
         : (weather.main.temp < 18)
           ? "app warm"
           : "app hot"
       : "app"
     }>
      <main>
        <div className="search-box">
          <input 
          type="text" 
          className="search-bar"
          placeholder="Search"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
        <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
          {Math.round(weather.main.temp)}°C
          </div>
          <div className="humidity">Humidity {weather.main.humidity}%, Wind {weather.wind.speed}km/h</div>
          <div className="weather">{weather.weather[0].main}, {weather.weather[0].description}</div>
          <div className="icon">{icon}</div>
        </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
