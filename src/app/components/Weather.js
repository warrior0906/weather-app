import { useSelector } from 'react-redux';
import moment from 'moment';
import './Styles.css';

export function Weather() {
    const weatherData = useSelector((state) => state.weather.weatherData);

    return (
        <div className='weatherCard'>
            <p className='temperature'>
                {weatherData?.main?.temp}°C
            </p>
            <p className='weather'>
                {weatherData?.weather[0]?.main}
            </p>
            <p className='location'>
                {weatherData?.name}, {weatherData?.sys?.country}
            </p>
            <p className='dateTime'>
                {moment().format('MMMM Do YYYY, h:mm A')}
            </p>
        </div>
    );
}