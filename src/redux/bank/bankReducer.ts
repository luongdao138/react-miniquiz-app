import { BankActionType } from './bankTypes';
import { BankAction, BankState } from './bankTypes';

const initialState: BankState = {
  counter: 0,
  loading: false,
};

const reducer = (state: BankState = initialState, action: BankAction): BankState => {
  switch (action.type) {
    case BankActionType.DEPOSIT:
      return { ...state, counter: state.counter + action.payload };
    case BankActionType.WITHDRAW:
      return { ...state, counter: state.counter - action.payload };
    case BankActionType.BANKRUPT:
      return { ...state, counter: 0 };
    case BankActionType.DEPOSIT_ASYNC:
      return { ...state, loading: true };
    case BankActionType.DEPOSIT_ASYNC_SUCCESS:
      return { ...state, loading: false, counter: state.counter + action.payload };

    default:
      return state;
  }
};

export default reducer;
