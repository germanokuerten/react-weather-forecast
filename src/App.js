import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";
import Title from "./components/Title"

function App() {
  const allWeatherData = weatherData.map((element, index) => {
    return (
      <>
      <WeatherForecast 
        img={element.img}
        conditions={element.conditions}
        time={element.time}
        key={index}
      />
      </>
    )
  })

  return (
    <div className="App">
      <Title/>
      <section>
      { allWeatherData }
      </section>
    </div>
  );
}

export default App;