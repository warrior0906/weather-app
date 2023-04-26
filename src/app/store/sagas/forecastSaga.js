import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getForecastSuccess } from '../reducerActions/forecastSlice';

export default function* weatherForecast() {
    yield all([takeEvery('forecast/getForecastFetch', forecastSaga)]);
}

function* forecastSaga(action) {
    const data = yield call(() => fetch(
        `${process.env.REACT_APP_API_URL}/forecast?lat=${action.payload.latitude}&lon=${action.payload.longitude}&appid=${process.env.REACT_APP_FORECAST_API_KEY}`
    ));
    const formattedData = yield data.json();
    yield put(getForecastSuccess(formattedData));
    console.log('forecastData', formattedData);
}