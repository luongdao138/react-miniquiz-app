import { BankActionType } from './redux/bank';
import { useAppSelector, useAppDispatch } from './redux/hooks';

const App = () => {
  const counter = useAppSelector((state) => state.bank.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Simple app</h1>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          dispatch({ type: BankActionType.DEPOSIT, payload: 1 });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default App;
