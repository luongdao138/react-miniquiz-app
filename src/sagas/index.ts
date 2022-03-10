import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield console.log('Root saga runs!');
}

export default rootSaga;
