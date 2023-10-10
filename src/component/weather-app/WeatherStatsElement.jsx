import "../../styles/weather-app/weather-stats-element.css";

const WeatherStatsElement = ({ elementTitle, elementValue }) => {
    return (
        <div className="wrapper-with-border">
            <div className="title">{elementTitle}</div>
            <div className="value">{elementValue}</div>
        </div>
    );
};

export default WeatherStatsElement;
