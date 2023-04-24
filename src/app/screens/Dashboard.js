import React, { useEffect } from 'react';
import { SearchBar, TodaysHighlight, Weather } from '../components';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation, setWeatherData } from '../store/Reducer';
import { metaData, fetchLocation } from '../utils';


export function Dashboard() {

    const currentLocation = useSelector((state) => state.weather.currentLocation);
    const weatherData = useSelector((state) => state.weather.weatherData);

    const dispatch = useDispatch();
    
    useEffect(() => {
        fetchLocation(dispatch, setLocation);
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    dispatch(setWeatherData(result));
                    console.log('result==>>', result);
                });
        }
        currentLocation && fetchData();
        console.log('currentLocation', currentLocation);
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
