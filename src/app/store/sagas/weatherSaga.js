import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getWeatherSuccess, getCityWeatherSuccess } from '../reducerActions/weatherSlice';

export default function* fetchCurrWeather() {
    yield all([
        takeEvery('weather/getWeatherFetch', weatherSaga),
        takeEvery('weather/getCityWeatherFetch', weatherCitySaga)
    ]);
}

function* weatherSaga(action) {
    const data = yield call(() => fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${action.payload.latitude}&lon=${action.payload.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    ));
    const formattedData = yield data.json();
    yield put(getWeatherSuccess(formattedData));
    console.log('weatherData', formattedData);
}

function* weatherCitySaga(action) {
    const data = yield call(() => fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=${action.payload}&appid=${process.env.REACT_APP_API_KEY}`
    ));
    const formattedData = yield data.json();
    yield put(getCityWeatherSuccess(formattedData));
    console.log('cityWeatherData', formattedData);
}