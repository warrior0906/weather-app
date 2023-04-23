import './Styles.css';
import { useSelector, useDispatch } from 'react-redux';

export function Weather() {
    const weatherData = useSelector((state) => state.weather.weatherData);

    return (
        <div
            className='weatherCard'
        >
            <p>
                {weatherData?.name}, {weatherData?.sys?.country}
            </p>
        </div>
    );
}