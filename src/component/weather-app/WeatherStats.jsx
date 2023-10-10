import "../../styles/weather-app/weather-stats.css";
import WeatherStatsElement from "./WeatherStatsElement";

const WeatherStats = ({ uvIndex, visibility, feelsLike, precip }) => {
    return (
        <div className="weather-stats-wrapper">
            <WeatherStatsElement
                elementTitle="UV index"
                elementValue={uvIndex}
            />
            <WeatherStatsElement
                elementTitle="Visibility"
                elementValue={`${visibility} km`}
            />
            <WeatherStatsElement
                elementTitle="Feels like"
                elementValue={`${feelsLike} °C`}
            />
            <WeatherStatsElement
                elementTitle="Precipitation"
                elementValue={`${precip} mm`}
            />
        </div>
    );
};

export default WeatherStats;
