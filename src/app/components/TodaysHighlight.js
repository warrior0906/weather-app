import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './styles/todaysHighlight.css';
import { metaData } from '../utils';

export function TodaysHighlight() {
    const city = useSelector((state) => state.location.city);
    const weatherData = useSelector((state) => state.weather.weatherData);
    const cityWeatherData = useSelector((state) => state.weather.cityWeatherData);

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(city ? cityWeatherData : weatherData);
    }, [city, weatherData, cityWeatherData]);

    const [sunriseTime, setSunriseTime] = useState(null);
    const [sunsetTime, setSunsetTime] = useState(null);
    const [visibility, setVisibility] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);

    useEffect(() => {
        // ------- set sunrise time ---------
        const sunrise = new Date(data?.sys?.sunrise * 1000);
        setSunriseTime(moment(sunrise).format('h:mm A'));

        // ------- set sunset time ---------
        const sunset = new Date(data?.sys?.sunset * 1000);
        setSunsetTime(moment(sunset).format('h:mm A'));

        // ------- set visibility in km ----------
        let vis = data?.visibility;
        vis = vis / 1000;
        setVisibility(vis);

        // ------- set wind speed in km/h ----------
        let ws = data?.wind?.speed;
        ws = (ws * 3600) / 1000;
        ws = Math.round(ws * 100) / 100;
        setWindSpeed(ws)
    }, [data]);

    const bottomData = [
        {
            title: metaData?.todays_highlight_humidity,
            value: data?.main?.humidity,
            suffix: metaData?.todays_highlight_humidity_unit,
        },
        {
            title: metaData?.todays_highlight_visibility,
            value: visibility,
            suffix: metaData?.todays_highlight_visibility_unit,
        },
        {
            title: metaData?.todays_highlight_feels_like,
            value: Math.round(data?.main?.feels_like) + metaData?.todays_highlight_degree_symbol,
        },
    ];

    const BottomContainers = (props) => {
        const { title, value, suffix } = props;
        return (
            <div className='BottomContainersDiv'>
                <p className='BottomContainersDivTitle'>{title}</p>
                <div className='BottomContainersDivValueContainer'>
                    <p className='BottomContainersDivValue'>{value}</p>
                    {suffix && <p className='BottomContainersDivSuffix'>{suffix}</p>}
                </div>
            </div>
        );
    };


    return (
        <>
            {data ?
                <div className='todaysHighlight'>
                    <p className='todaysHighlightTitle'>{metaData?.todays_highlight_title} </p>
                    <div className='todaysHighlightBody'>
                        <div className='windStatus'>
                            <p className='windStatusTitle'>{metaData?.todays_highlight_wind_status}</p>
                            <p className='windStatusValue'> {`${windSpeed} ${metaData?.todays_highlight_wind_speed_unit}`}</p>
                        </div>
                        <div className='sunriseSunset'>
                            <p className='sunriseSunsetTitle'>{metaData?.todays_highlight_sunrise_and_sunset}</p>
                            <div className='sunriseSunsetBottomDiv'>
                                <div className='sunriseDiv'>
                                    <p className='sunriseTitle'>{metaData?.todays_highlight_sunrise}</p>
                                    <p className='sunriseValue'>{sunriseTime}</p>
                                </div>
                                <div className='sunsetDiv'>
                                    <p className='sunsetTitle'>{metaData?.todays_highlight_sunset}</p>
                                    <p className='sunsetValue' >{sunsetTime}</p>
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
                                    suffix={e?.suffix}
                                />
                            )
                        }
                    </div>
                </div>
                : <div className='todaysHighlightLoading'>
                    <p>Loading....</p>
                </div>}
        </>
    );
};