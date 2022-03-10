import { all } from 'redux-saga/effects';
import bankSaga from './bankSaga';

function* rootSaga() {
  yield all([bankSaga()]);
}

export default rootSaga;
