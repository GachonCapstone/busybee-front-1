// @mui material components
import sunnyIcon from "assets/images/weather/sunny.png";
import rainIcon from "assets/images/weather/rain.png";
import cloudyIcon from "assets/images/weather/cloudy.png";
import snowIcon from "assets/images/weather/snow.png";
import sunCloudyIcon from "assets/images/weather/sun_cloudy.png";

// Material Dashboard 2 React components

import { useState, useEffect } from "react";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Weather() {
    const [currentTemp, setCurrentTemp] = useState(null);
    const [sky, setSky] = useState(null);
    const [pty, setPty] = useState(null);

    const getWeatherIcon = (sky, pty) => {
        if (pty === "1" || pty === "4") return rainIcon;
        if (pty === "3") return snowIcon;
        if (sky === "1") return sunnyIcon;
        if (sky === "3") return sunCloudyIcon;
        if (sky === "4") return cloudyIcon;
        return sunnyIcon;
    };

    const fetchUltraShortForecastData = async () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const baseDate = `${year}${month}${day}`;
        let hour = today.getHours();
        let minute = today.getMinutes();

        if (minute < 10) hour -= 1;
        if (hour < 0) hour = 23;

        const baseTime = `${hour < 10 ? "0" : ""}${hour}00`;
        const nx = 62, ny = 122;
        const serviceKey = process.env.REACT_APP_SERVICE_KEY;

        const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${serviceKey}&numOfRows=100&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.response.header.resultCode === "00") {
                const items = data.response.body.items.item;
                setCurrentTemp(items.find((item) => item.category === "T1H")?.obsrValue || "N/A");
                setSky(items.find((item) => item.category === "SKY")?.obsrValue || "1");
                setPty(items.find((item) => item.category === "PTY")?.obsrValue || "0");
            }
        } catch (err) {
            console.error("날씨 데이터를 불러오는 데 실패했습니다:", err);
        }
    };

    useEffect(() => {
        fetchUltraShortForecastData();
    }, []);

    return (
    <ComplexStatisticsCard
        color="success"
        icon={
        <img
            src={getWeatherIcon(sky, pty)}
            alt="weather"
            style={{ width: "24px", height: "24px", objectFit: "contain" }}
        />
        }
        title="날씨"
        count={currentTemp ? `${currentTemp}°C` : "로딩 중..."}
        percentage={{
        color: "success",
        amount: "",
        label: "기상청 기준 실시간",
        }}
    />
    );
}

export default Weather;