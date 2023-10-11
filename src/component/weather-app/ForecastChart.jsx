import { useEffect, useState } from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from "recharts";

import "../../styles/weather-app/forecast-chart.css";

const ForecastChart = ({ weatherForecast }) => {
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        var p = "";

        if (weatherForecast != null) {
            setForecastData([
                ...weatherForecast["forecastday"].map((element) => {
                    var dateStrings = element["date"].split("-");
                    return {
                        date: dateStrings[dateStrings.length - 1],
                        xaxis: dateStrings[dateStrings.length - 1],
                        yaxis: element["day"]["avgtemp_c"],
                    };
                }),
            ]);
        }
    }, [weatherForecast]);

    return (
        <ResponsiveContainer className="forecast-chart-wrapper" aspect={2.6}>
            <AreaChart data={forecastData} margin={0}>
                <CartesianGrid stroke="false" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip active="true" />
                <Area
                    type="monotone"
                    dataKey="yaxis"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ForecastChart;
