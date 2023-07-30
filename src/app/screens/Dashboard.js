import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Forecast, SearchBar, TodaysHighlight, Weather } from "../components";
import { getWeatherFetch } from "../store/reducerActions/weatherSlice";
import { setLocation } from "../store/reducerActions/locationSlice";
import { getForecastFetch } from "../store/reducerActions/forecastSlice";
import { metaData } from "../utils";
import "./Dashboard.scss";

export function Dashboard() {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const forecastData = useSelector((state) => state.forecast.forecastData);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const payload = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      dispatch(setLocation(payload));
      dispatch(getWeatherFetch(payload));
      dispatch(getForecastFetch(payload));
    });
  }, [dispatch]);

  return (
    <div className="Dashboard">
      <h1>{metaData?.main_title}</h1>
      <SearchBar />
      {weatherData?.main && (
        <div className="body">
          <Weather />
          <TodaysHighlight />
        </div>
      )}
      {forecastData?.list?.length > 0 && (
        <div className="body">
          <Forecast />
        </div>
      )}
    </div>
  );
}
