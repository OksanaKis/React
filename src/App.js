import './App.css';
import React, {useState} from "react";

const api = {
  key: "c60621f6b01ac75d9cb4f8afef300fdc",
  base: "http://api.openweathermap.org/data/2.5/",
}

function App() {

  const [query, setQuery] = useState('');
  console.log(query);
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState();

  const search = async (event) => {
    try {
    if (event.key === "Enter") {
      console.log(event.key);
      await  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
        // console.log(result.weather[0].icon);
        setIcon(<img src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} />);
      });
    }
  } catch (error) {
    // console.log(`Error: ${error.message}`);
    console.log(error.message);
  }
  }
  

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  
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
