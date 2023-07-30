import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { metaData, temp, dayList, days } from '../utils';
import './styles/forecast.css';

export function Forecast() {
    const city = useSelector((state) => state.location.city);
    const _5daysForecast = useSelector((state) => state.forecast._5daysForecast);
    const _5daysCityForecast = useSelector((state) => state.forecast._5daysCityForecast);

    const [numOfDays, setNumOfDays] = useState(5);
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(city ? _5daysCityForecast : _5daysForecast);
        setNumOfDays(5);
    }, [city, _5daysForecast, _5daysCityForecast]);

    const WeatherForecast = (props) => {
        const { item } = props;
        const date = new Date(item?.dt_txt)
        return (
            <div className='renderWeatherForecast'>
                <p className='forecastWeather'>
                    {item?.weather[0]?.main}
                </p>
                <p className='forecastTemp'>
                    +{Math.round(item?.main?.temp_max - temp) + metaData?.todays_highlight_degree_symbol}
                    {/* /{Math.round(item?.main?.temp_min - temp) + metaData?.todays_highlight_degree_symbol} */}
                </p>
                <p className='forecastDate'>
                    {moment(new Date(item?.dt) * 1000).format('D MMMM')}
                </p>
                <p className='forecastDay'>
                    {days[date.getDay()]}
                </p>
            </div>
        );
    };

    return (
        <div className='forecast'>
            <div className='header'>
                <p className='heading'>{`${numOfDays} days forecast`}</p>
                <select
                    className='daySelect'
                    value={`${numOfDays} days`}
                    onChange={e => {
                        setNumOfDays(e.target.value.match(/\d+/)[0]);
                        const d = city ? _5daysCityForecast : _5daysForecast;
                        setData(d?.slice(0, e.target.value.match(/\d+/)[0]));
                    }}
                >
                    {dayList?.map((e) =>
                        <option key={e}>
                            {`${e} days`}
                        </option>
                    )}
                </select>
            </div>
            <div className='_5daysForecast'>
                {
                    data?.map((item) =>
                        <WeatherForecast item={item} />
                    )
                }
            </div>
        </div>
    );
}