import "../../styles/weather-app/header-bar.css";

const HeaderBar = ({ weatherText }) => {
    function getCurrentDayTime() {
        const currentDate = new Date();
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const day = daysOfWeek[currentDate.getDay()];
        const time = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

        return `${day}, ${time}`;
    }

    return (
        <div className="header-bar-wrapper">
            <h3 className="weather-text">{weatherText}</h3>
            <input
                className="weather-search-bar"
                type="text"
                placeholder="🔍  Search location"
            />
            <div className="day-time">{getCurrentDayTime()}</div>
        </div>
    );
};

export default HeaderBar;
