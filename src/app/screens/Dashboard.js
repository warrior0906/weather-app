import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBar, TodaysHighlight, Weather } from '../components';
import { getWeatherFetch } from '../store/reducerActions/weatherSlice';
import { setLocation } from '../store/reducerActions/locationSlice';
import { metaData } from '../utils';
import './Dashboard.css';

export function Dashboard() {

    const weatherData = useSelector((state) => state.weather.weatherData);
    const dispatch = useDispatch();
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            const payload = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }
            dispatch(setLocation(payload));
            dispatch(getWeatherFetch(payload));
        });
    }, [dispatch]);

    return (
        <div className='Dashboard'>
            <p className='Heading'>
                {metaData?.main_title}
            </p>
            <SearchBar />
            {weatherData?.main &&
                <div className='body'>
                    <Weather />
                    <TodaysHighlight />
                </div>
            }
        </div>
    );
}
