import { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard.jsx";
import "../../styles/weather-app/weather.css";
import HeaderBar from "./HeaderBar.jsx";
import PlaceOverviewCard from "./PlaceOverviewCard.jsx";
import "../../styles/weather-app/shadow.css"


import "../../styles/weather-app/weather.css";
import WeatherStats from "./WeatherStats.jsx";

const Weather = () => {
  const [forecast, setForecast] = useState({});
  const [searchkey,setsearchKey]=useState('Sri Lanka');

  const searchHandler=(item)=>{
    console.log(item);
    setsearchKey(item);
    
  }

  useEffect(() => {
    fetchWeather().then((result) => {
      setForecast(result);
      console.log(result);
    });
  }, [searchkey]);

  async function fetchWeather() {
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=711ba0ec77e3441bab3124346231409&q=${searchkey}&days=5&aqi=no&alerts=no`
      );
      let res = await response.json();
      return res;
    } catch (e) {
      console.log(e);
    }
  }

    return (
        <div className="body-card">
            <HeaderBar 
                searchHandler={searchHandler}
                weatherText={
                    forecast["current"] != null
                        ? forecast["current"]["condition"]["text"]
                        : "Loading..."
                }
            />
            <PlaceOverviewCard
                placeName={
                    forecast["location"] != null
                        ? `${forecast["location"]["name"]}, ${forecast["location"]["region"]}`
                        : "Loading..."
                }
                currentTemperature={
                    forecast["current"] != null
                        ? forecast["current"]["temp_c"]
                        : ""
                }
                placeImage={
                    forecast["current"] != null
                        ? forecast["current"]["condition"]["icon"]
                        : "https://images.unsplash.com/photo-1615485020471-b66207f5e3bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                }
            />
            <div className="weather-card">
                    <WeatherCard
                      type={"Temperature"}
                      action={forecast["current"] != null && `${forecast["current"]["temp_c"]}°C`}
                    />
                    <WeatherCard
                      type={"Wind Speed"}
                      action={
                        forecast["current"] != null && `${forecast["current"]["wind_kph"]} km/h`
                      }
                    />

                    <WeatherCard
                      type={"Humidity"}
                      action={
                        forecast["current"] != null && `${forecast["current"]["humidity"]} %`
                      }
                    />
                    <WeatherCard
                      type={"Pressure"}
                      isLast={true}
                      action={
                        forecast["current"] != null && `${forecast["current"]["pressure_in"]}mm`
                      }
                    />
                  </div>
            <WeatherStats
                uvIndex={
                    forecast["current"] != null ? forecast["current"]["uv"] : ""
                }
                visibility={
                    forecast["current"] != null
                        ? forecast["current"]["vis_km"]
                        : ""
                }
                feelsLike={
                    forecast["current"] != null
                        ? forecast["current"]["feelslike_c"]
                        : ""
                }
                precip={
                    forecast["current"] != null
                        ? forecast["current"]["precip_mm"]
                        : ""
                }
            />
        </div>
    );
};

export default Weather;
