import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './Styles.css';

export function TodaysHighlight() {
    const weatherData = useSelector((state) => state.weather.weatherData);

    const [sunriseTime, setSunriseTime] = useState(null);
    const [sunsetTime, setSunsetTime] = useState(null);
    const [visibility, setVisibility] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);

    useEffect(() => {
        // ------- set sunrise time ---------
        const sunrise = new Date(weatherData?.sys?.sunrise * 1000);
        setSunriseTime(moment(sunrise).format('h:mm A'));

        // ------- set sunset time ---------
        const sunset = new Date(weatherData?.sys?.sunset * 1000);
        setSunsetTime(moment(sunset).format('h:mm A'));

        // ------- set visibility in km ----------
        let vis = weatherData?.visibility;
        vis = vis / 1000;
        setVisibility(vis + ' km');

        // ------- set wind speed in km/h ----------
        let ws = weatherData?.wind?.speed;
        ws = (ws * 3600) / 1000;
        setWindSpeed(ws)
    }, [weatherData]);

    const bottomData = [
        {
            title: "Humidity",
            value: weatherData?.main?.humidity + '%',
        },
        {
            title: "Visibility",
            value: visibility,
        },
        {
            title: "Feels like",
            value: weatherData?.main?.feels_like + '°C',
        },
    ];

    const BottomContainers = (props) => {
        const { title, value } = props;
        return (
            <div className='BottomContainersDiv'>
                <p className='BottomContainersDivTitle'>{title}</p>
                <p className='BottomContainersDivValue'>{value}</p>
            </div>
        );
    };


    return (
        <div className='todaysHighlight'>
            <p className='todaysHighlightTitle'>Today's Highlight </p>
            <div className='todaysHighlightBody'>
                <div className='windStatus'>
                    <p className='windStatusTitle'> Wind Status</p>
                    <p className='windStatusValue'> {`${windSpeed} km/h`}</p>
                </div>
                <div className='sunriseSunset'>
                    <p className='sunriseSunsetTitle'>Sunrise & Sunset</p>
                    <div className='sunriseSunsetBottomDiv'>
                        <div className='sunriseDiv'>
                            <p className='sunriseTitle'>Sunrise</p>
                            <p  className='sunriseValue'>{sunriseTime}</p>
                        </div>
                        <div className='sunsetDiv'>
                            <p  className='sunsetTitle'> Sunset</p>
                            <p  className='sunsetValue' >{sunsetTime}</p>
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