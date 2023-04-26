import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { metaData } from '../utils';
import './styles/weather.css';

export function Weather() {
    const city = useSelector((state) => state.location.city);
    const weatherData = useSelector((state) => state.weather.weatherData);
    const cityWeatherData = useSelector((state) => state.weather.cityWeatherData);

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(city ? cityWeatherData : weatherData);
    }, [city, weatherData, cityWeatherData]);

    return (
        <>
            {data
                ? <div className='weatherCard'>
                    <p className='temperature'>
                        {Math.round(data?.main?.temp) + metaData?.todays_highlight_temperature_unit}
                    </p>
                    <p className='weather'>
                        {data?.weather[0]?.main}
                    </p>
                    <p className='location'>
                        {data?.name}, {data?.sys?.country}
                    </p>
                    <p className='dateTime'>
                        {moment().format('MMMM Do YYYY, h:mm A')}
                    </p>
                </div >
                : <div className='weatherLoading'>
                    <p>Loading....</p>
                </div>}
        </>
    );
}