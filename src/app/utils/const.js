import { changeLengthUnit } from './common';

export const metaData = {
    main_title: 'Weather App',
    todays_highlight_title: "Today's Highlight",
    todays_highlight_wind_status: 'Wind Status',
    todays_highlight_wind_speed_unit: 'km/h',
    todays_highlight_sunrise_and_sunset: 'Sunrise & Sunset',
    todays_highlight_sunrise: 'Sunrise',
    todays_highlight_sunset: 'Sunset',
    todays_highlight_humidity: 'Humidity',
    todays_highlight_humidity_unit: '%',
    todays_highlight_visibility: 'Visibility',
    todays_highlight_visibility_unit: 'km',
    todays_highlight_feels_like: 'Feels like',
    todays_highlight_temperature_unit: '°C',
    todays_highlight_degree_symbol: '°',
    search_bar_placeholder: 'Search City',
};

export const todayHighlightBottomData = (data) => [
    {
        title: metaData?.todays_highlight_humidity,
        value: data?.main?.humidity,
        suffix: metaData?.todays_highlight_humidity_unit,
    },
    {
        title: metaData?.todays_highlight_visibility,
        value: changeLengthUnit(data?.visibility),
        suffix: metaData?.todays_highlight_visibility_unit,
    },
    {
        title: metaData?.todays_highlight_feels_like,
        value: Math.round(data?.main?.feels_like) + metaData?.todays_highlight_degree_symbol,
    },
];