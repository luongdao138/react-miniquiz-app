// actions types
export enum BankActionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  BANKRUPT = 'bankrupt',
  DEPOSIT_ASYNC = 'deposit_async',
  DEPOSIT_ASYNC_SUCCESS = 'deposit_success',
}

// models

// actions
export interface DepositAction {
  type: BankActionType.DEPOSIT;
  payload: number;
}

export interface WidthdrawAtion {
  type: BankActionType.WITHDRAW;
  payload: number;
}

export interface BackruptAction {
  type: BankActionType.BANKRUPT;
}

export interface DepositAsyncAction {
  type: BankActionType.DEPOSIT_ASYNC;
  payload: number;
}
export interface DepositAsyncSuccessAction {
  type: BankActionType.DEPOSIT_ASYNC_SUCCESS;
  payload: number;
}

export type BankAction =
  | BackruptAction
  | WidthdrawAtion
  | DepositAction
  | DepositAsyncAction
  | DepositAsyncSuccessAction;

// state type
export interface BankState {
  counter: number;
  loading: boolean;
}
