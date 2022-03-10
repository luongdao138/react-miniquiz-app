import { BankActionType } from './bankTypes';
import { BankAction, BankState } from './bankActions';

const initialState: BankState = {
  counter: 0,
};

const reducer = (state: BankState = initialState, action: BankAction) => {
  switch (action.type) {
    case BankActionType.DEPOSIT:
      return { ...state, counter: state.counter + action.payload };
    case BankActionType.WITHDRAW:
      return { ...state, counter: state.counter - action.payload };
    case BankActionType.BANKRUPT:
      return { ...state, counter: 0 };

    default:
      return state;
  }
};

export default reducer;
