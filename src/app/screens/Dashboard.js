import React, { useEffect } from 'react';
import { SearchBar, TodaysHighlight, Weather } from '../components';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherFetch } from '../store/reducerActions/weatherSlice';
import { setLocation } from '../store/reducerActions/locationSlice';
import { metaData, fetchLocation } from '../utils';


export function Dashboard() {

    const currentLocation = useSelector((state) => state.location.currentLocation);
    const weatherData = useSelector((state) => state.weather.weatherData);

    const dispatch = useDispatch();
    
    useEffect(() => {
        fetchLocation(dispatch, setLocation);
    }, [dispatch]);

    useEffect(() => {
        const fetchData = () => {
            const payload = {
                latitude: currentLocation?.latitude,
                longitude: currentLocation?.longitude,
            }
            dispatch(getWeatherFetch(payload));
        }
        currentLocation && fetchData();
    }, [currentLocation, dispatch]);

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
