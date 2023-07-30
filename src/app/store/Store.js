import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import WeatherSlice from './reducerActions/weatherSlice';
import LocationSlice from './reducerActions/locationSlice';
import ForecastSlice from './reducerActions/forecastSlice';

const sagaMiddle = createSagaMiddleware();

export const createStore = () => configureStore({
  reducer: {
    weather: WeatherSlice,
    location: LocationSlice,
    forecast: ForecastSlice
  },
  middleware: [sagaMiddle],
});

export const store = createStore();

sagaMiddle.run(rootSaga);
