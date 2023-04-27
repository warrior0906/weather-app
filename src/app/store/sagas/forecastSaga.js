import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getForecastSuccess, getCityForecastSuccess, getCityForecastFailure } from '../reducerActions/forecastSlice';

export default function* weatherForecast() {
    yield all([
        takeEvery('forecast/getForecastFetch', forecastSaga),
        takeEvery('forecast/getCityForecastFetch', forecastCitySaga)
    ]);
}

function* forecastSaga(action) {
    const data = yield call(() => fetch(
        `${process.env.REACT_APP_API_URL}/forecast?lat=${action.payload.latitude}&lon=${action.payload.longitude}&appid=${process.env.REACT_APP_FORECAST_API_KEY}`
    ));
    const formattedData = yield data.json();
    yield put(getForecastSuccess(formattedData));
    console.log('forecastData', formattedData);
}

function* forecastCitySaga(action) {
    try {
        const response = yield call(() => fetch(
            `${process.env.REACT_APP_API_URL}/forecast?q=${action.payload}&appid=${process.env.REACT_APP_FORECAST_API_KEY}`
        ));
        if (response.status >= 200 && response.status < 300) {
            const formattedData = yield response.json();
            yield put(getCityForecastSuccess(formattedData));
            console.log('cityForecastData', formattedData);
        } else {
            yield put(getCityForecastFailure());
            console.log('cityForecastData error response', response);
        }
    } catch(err) {
        yield put(getCityForecastFailure());
        console.log('cityForecastData errrr', err);
    }
}