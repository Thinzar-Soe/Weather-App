import React, { useState } from "react";

import Weather from "./Weather";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [City, setCity] = useState("");
  let [show, setShow] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setShow(City);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <Weather city={show} />
      <p>
        <a href="https://github.com/Thinzar-Soe/Week-6-Project.git">
          Open-source code
        </a>{" "}
        by Thinzar Soe
      </p>
    </div>
  );
}

export default App;
