import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
    Area,
} from "recharts";

const ForecastChart = ({ weatherForecast }) => {
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        var p = "";

        if (weatherForecast != null) {
            var p = [
                ...weatherForecast["forecastday"].map((element) => {
                    var dateStrings = element["date"].split("-");
                    return {
                        date: dateStrings[dateStrings.length - 1],
                        xaxis: element["day"]["avgtemp_c"],
                        yaxis: dateStrings.pop(),
                    };
                }),
            ];
            console.log(p);
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
        <AreaChart
            width={500}
            height={300}
            data={forecastData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid stroke="false" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip active="true"/>
            <Area
                type="monotone"
                dataKey="yaxis"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
        </AreaChart>
    );
};

export default ForecastChart;
