import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  metaData,
  formatTime,
  changeSpeedUnit,
  todayHighlightBottomData,
} from "../utils";
import { WeatherInfo } from "../components";
import "./styles/todaysHighlight.scss";

export function TodaysHighlight() {
  const city = useSelector((state) => state.location.city);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const cityWeatherData = useSelector((state) => state.weather.cityWeatherData);

  const [data, setData] = useState(null);
  const [bottomData, setBottomData] = useState(null);
  const [sunriseTime, setSunriseTime] = useState(null);
  const [sunsetTime, setSunsetTime] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);

  useEffect(() => {
    setData(city ? cityWeatherData : weatherData);
  }, [city, weatherData, cityWeatherData]);

  useEffect(() => {
    setSunriseTime(formatTime(data?.sys?.sunrise, data?.timezone));
    setSunsetTime(formatTime(data?.sys?.sunset, data?.timezone));
    setWindSpeed(changeSpeedUnit(data?.wind?.speed));
    data && setBottomData(todayHighlightBottomData(data, city));
  }, [data, city]);

  return data ? (
    <div className="todaysHighlight">
      <p className="todaysHighlightTitle">
        {metaData?.todays_highlight_title}{" "}
      </p>
      <div className="todaysHighlightBody">
        <div className="topContainer">
          <p className="windStatusTitle">
            {metaData?.todays_highlight_wind_status}
          </p>
          <p className="windStatusValue">
            {" "}
            {`${windSpeed} ${metaData?.todays_highlight_wind_speed_unit}`}
          </p>
        </div>
        <div className="topContainer">
          <p className="sunriseSunsetTitle">
            {metaData?.todays_highlight_sunrise_and_sunset}
          </p>
          <div className="sunriseSunsetBottomDiv">
            <div className="sunriseDiv">
              <p className="sunriseTitle">
                {metaData?.todays_highlight_sunrise}
              </p>
              <p className="sunriseValue">{sunriseTime}</p>
            </div>
            <div className="sunsetDiv">
              <p className="sunsetTitle">{metaData?.todays_highlight_sunset}</p>
              <p className="sunsetValue">{sunsetTime}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="todaysHighlightBottomDiv">
        {bottomData ? (
          bottomData?.map((e) => <WeatherInfo data={e} key={e?.title} />)
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  ) : (
    <div className="todaysHighlightLoading">
      <p>Loading....</p>
    </div>
  );
}
