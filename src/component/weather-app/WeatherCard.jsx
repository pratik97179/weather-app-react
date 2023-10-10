import React from "react";
import "../../styles/weather-app/weather-card.css";

function WeatherCard(props) {
    const cardClass = `card ${props.isLast ? "" : "right-margin"}`;
    return (
        <div className={cardClass}>
            <h1>{props.type}</h1>
            <div className="content">
                <h2>{props.action}</h2>
                <p>
                    <span className="span">200 </span>for next 4 hours{" "}
                </p>
            </div>
        </div>
    );
}

export default WeatherCard;
