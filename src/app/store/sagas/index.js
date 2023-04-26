import {fork, all} from 'redux-saga/effects';
import weatherSaga from './weatherSaga';
import forecastSaga from './forecastSaga';

export default function* rootSaga() {
  yield all([fork(weatherSaga), fork(forecastSaga)]);
}