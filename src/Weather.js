import React, { useState } from "react";
import axios from "axios";

export default function App(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  function handleMessage(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    let showIcon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setIcon(showIcon);
  }
  if (props.city) {
    let appKey = "0dc40d3d7cda209ca40e77430c74cf57";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${appKey}&units=metric`;
    axios.get(url).then(handleMessage);
  }
  if (temperature) {
    return (
      <ul>
        <li>Temperature: {Math.round(temperature)}°C </li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}% </li>
        <li>Wind: {wind}km/h</li>
        <li>
          <img src={icon} />
        </li>
      </ul>
    );
  }
}
