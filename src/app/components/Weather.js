import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { LocationOnOutlined, TodayOutlined } from "@mui/icons-material";
import { metaData, temp, IconSize, IconColor } from "../utils";
import "./styles/weather.scss";

export function Weather() {
  const city = useSelector((state) => state.location.city);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const cityWeatherData = useSelector((state) => state.weather.cityWeatherData);

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(city ? cityWeatherData : weatherData);
  }, [city, weatherData, cityWeatherData]);

  return data ? (
    <div className="weatherCard">
      <p className="temperature">
        {Math.round(data?.main?.temp - (city ? temp : 0)) +
          metaData?.todays_highlight_temperature_unit}
      </p>
      <p className="weather">{data?.weather[0]?.main}</p>
      <div className="wrapper">
        <LocationOnOutlined color={IconColor} fontSize={IconSize.small} />
        <p className="location">
          {data?.name}, {data?.sys?.country}
        </p>
      </div>
      <div className="wrapper">
        <TodayOutlined color={IconColor} fontSize={IconSize.small} />
        <p className="dateTime">
          {moment(new Date(data?.dt) * 1000).format("MMMM Do YYYY, h:mm A")}
        </p>
      </div>
    </div>
  ) : (
    <div className="weatherLoading">
      <p>Loading....</p>
    </div>
  );
}
