import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import weatherReducer from './reducerActions/weatherSlice';
import rootSaga from './sagas';

const sagaMiddle = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: [sagaMiddle],
});
sagaMiddle.run(rootSaga);
