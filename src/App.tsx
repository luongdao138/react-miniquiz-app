import { useEffect } from 'react';
import { BankActionType } from './redux/bank';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import postApi from './api/postApi';

const App = () => {
  const { counter, loading } = useAppSelector((state) => state.bank);
  const dispatch = useAppDispatch();

  useEffect(() => {
    postApi.getAll().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>Simple app</h1>
      <h2>Counter: {counter}</h2>
      <h4>{loading ? 'Loading' : 'Idle'}</h4>
      <button
        onClick={() => {
          dispatch({ type: BankActionType.DEPOSIT, payload: 1 });
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          dispatch({ type: BankActionType.WITHDRAW, payload: 1 });
        }}
      >
        Withdrawn
      </button>
      <button
        onClick={() => {
          dispatch({ type: BankActionType.BANKRUPT });
        }}
      >
        Bankrupt
      </button>

      <button
        onClick={() => {
          dispatch({ type: BankActionType.DEPOSIT_ASYNC, payload: 1 });
        }}
      >
        Deposit Async
      </button>
    </div>
  );
};

export default App;
