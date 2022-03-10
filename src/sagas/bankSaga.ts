import { depositAsyncSuccess } from '../redux/bank/bankActions';
import { DepositAsyncAction } from '../redux/bank/bankTypes';

import { all, takeEvery, takeLatest, delay, put } from 'redux-saga/effects';
import { BankActionType } from '../redux/bank';

function* handleDepositAsync(action: DepositAsyncAction) {
  console.log('Waiting 1s');
  // wait 1s
  yield delay(1000);

  console.log('Waiting done, dispatch action');

  // dispatch action success
  yield put(depositAsyncSuccess(action.payload));
}

function* watchDepositAsync() {
  yield takeLatest(BankActionType.DEPOSIT_ASYNC, handleDepositAsync);
}

function* bankSaga() {
  yield all([watchDepositAsync()]);
}

export default bankSaga;
