import { BankActionType } from './bankTypes';

interface DepositAction {
  type: BankActionType.DEPOSIT;
  payload: number;
}

interface WidthdrawAtion {
  type: BankActionType.WITHDRAW;
  payload: number;
}

interface BackruptAction {
  type: BankActionType.BANKRUPT;
}

export type BankAction = BackruptAction | WidthdrawAtion | DepositAction;

export interface BankState {
  counter: number;
}
