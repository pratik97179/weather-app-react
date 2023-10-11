import { useRef } from "react";
import "../../styles/weather-app/header-bar.css";
import { click } from "@testing-library/user-event/dist/click";

const HeaderBar = ({searchHandler, weatherText }) => {
  const inputRef = useRef();

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
  const clickHandler = (event) => {
    event.preventDefault();
    searchHandler(inputRef.current.value);

    inputRef.current.value='';
  };

  return (
    <div className="header-bar-wrapper">
      <h3 className="weather-text">{weatherText}</h3>
      <input
        ref={inputRef}
        className="weather-search-bar"
        type="text"
        placeholder="🔍  Search location"
      />
      <button onClick={clickHandler}>Search</button>
      <div className="day-time">{getCurrentDayTime()}</div>
    </div>
  );
};

export default HeaderBar;
