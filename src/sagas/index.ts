import { all } from 'redux-saga/effects';
import categorySaga from './categorySaga';
import questionSaga from './questionSaga';

function* rootSaga() {
  yield all([categorySaga(), questionSaga()]);
}

export default rootSaga;
