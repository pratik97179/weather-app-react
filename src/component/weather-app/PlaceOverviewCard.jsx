import "../../styles/weather-app/place-overview-card.css";
import dayImage from "../../assets/day.jpeg";
import nightImage from "../../assets/night.jpg";
import "../../styles/weather-app/shadow.css"
const PlaceOverviewCard = ({ placeName, currentTemperature, placeImage,realTime }) => {
    var overviewCardBackground = {
        backgroundImage: isDay() ? `url(${dayImage})` : `url(${nightImage})`,
        backgroundSize: "cover",
    };

    function isDay() {
        var date = new Date();
        var time = realTime?realTime:date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

        // if (time.substring(0, 2) > "06" && time.substring(0, 2) < "18") {
        //     return true;
        // }
        return true;
    }

    var fontColorStyle = {
        color: isDay() ? "#3b3535" : "#f4f2ec",
    };

    return (
        <div
            className="place-overview-card-wrapper shadow"
            style={overviewCardBackground}
        >
            <div className="place-temperature-wrapper ">
                <div className="place-name" style={fontColorStyle}>
                    {placeName}
                </div>
                <div
                    className="current-temperature"
                    style={fontColorStyle}
                >{`${currentTemperature}°C`}</div>
            </div>
            <img
                className="weather-icon"
                src={
                    placeImage ??
                    "https://media.istockphoto.com/id/969347974/photo/blank-bang-bang-inflatable-balloon-stick-3d-render-illustration.jpg?s=1024x1024&w=is&k=20&c=mflwxg8PC17MtqvPriSbaWzzBgmijBy7AmooAj8ETks="
                }
            />
        </div>
    );
};
export default PlaceOverviewCard;
