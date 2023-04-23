import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './Styles.css';

export function TodaysHighlight() {
    const weatherData = useSelector((state) => state.weather.weatherData);

    const [sunriseTime, setSunriseTime] = useState(null);
    const [sunsetTime, setSunsetTime] = useState(null);

    useEffect(() => {
        const sunrise = new Date(weatherData?.sys?.sunrise * 1000);
        setSunriseTime(moment(sunrise).format('h:mm A'));
        const sunset = new Date(weatherData?.sys?.sunset * 1000);
        setSunsetTime(moment(sunset).format('h:mm A'));
    }, [weatherData]);

    const bottomData = [
        {
            title: "Humidity",
            value: weatherData?.main?.humidity
        },
        {
            title: "Visibility",
            value: weatherData?.visibility
        },
        {
            title: "Feels like",
            value: weatherData?.main?.feels_like
        },
    ];

    const BottomContainers = (props) => {
        const { title, value } = props;
        return (
            <div className='BottomContainersDiv'>
                <p>{title}</p>
                <p>{value}</p>
            </div>
        );
    };


    return (
        <div className='todaysHighlight'>
            <p className='todaysHighlightTitle'>Today's Highlight </p>
            <div className='todaysHighlightBody'>
                <div className='windStatus'>
                    <p className='windStatusTitle'> Wind Status</p>
                    <p className='windStatusValue'> {weatherData?.wind?.speed}</p>
                </div>
                <div className='sunriseSunset'>
                    <p className='sunriseSunsetTitle'>Sunrise & Sunset</p>
                    <div className='sunriseSunsetBottomDiv'>
                        <div className='sunriseDiv'>
                            <p>Sunrise</p>
                            <p>{sunriseTime}</p>
                        </div>
                        <div className='sunsetDiv'>
                            <p> Sunset</p>
                            <p>{sunsetTime}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='todaysHighlightBottomDiv'>
                {
                    bottomData?.map((e) =>
                        <BottomContainers
                            title={e?.title}
                            value={e?.value}
                        />
                    )
                }
            </div>
        </div>
    );
};