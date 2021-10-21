import './App.css';
import React, {useState} from "react";

const api = {
  key: "c60621f6b01ac75d9cb4f8afef300fdc",
  base: "http://api.openweathermap.org/data/2.5/",
}

function App() {



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
    <div className="App">
      <main>
        <div className="search-box">
          <input 
          type="text" 
          className="search-bar"
          placeholder="Search"
          value=""
          />
        </div>
        <div>
          <div>
            <div className="location-box">
            <div className="location"></div>
            <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
            <div className="temp"></div>
            <div className="humidity"></div>
            <div className="weather"></div>
            <div className="icon"></div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
