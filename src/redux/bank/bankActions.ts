import { BankActionType } from './bankTypes';
import * as types from './bankTypes';

// action creators
export function depositAsync(value: number): types.DepositAsyncAction {
  return {
    type: BankActionType.DEPOSIT_ASYNC,
    payload: value,
  };
}

export function depositAsyncSuccess(value: number): types.DepositAsyncSuccessAction {
  return {
    type: BankActionType.DEPOSIT_ASYNC_SUCCESS,
    payload: value,
  };
}

// action type and state type (for reducer)
