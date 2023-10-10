import "../../styles/weather-app/weather-overview.css";
// import { ReactComponent as Logo } from "../../assets/wi-cloud-down.svg";
// import { ReactComponent as Cloudy } from "../../assets/wi-cloudy-gusts.svg";

const WeatherOverview = () => {
    return (
        <div className="weather-overview-wrapper">
            {/* <Logo /> */}
            <h1 className="current-temperature-text">
                12<span className="temperature-unit">°C</span>
            </h1>
            <p className="current-day">
                Monday, <span className="currrent-time">16:00</span>
            </p>
            <hr className="weather-overview-divider" />
            <span>
                {/* <Cloudy className="logo"/> */}
            </span>
        </div>
    );
};

export default WeatherOverview;
