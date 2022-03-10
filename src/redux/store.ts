import { combineReducers, createStore } from 'redux';
import { BankReducer } from './bank';
// import { composeWithDevTools } from 'redux-devtools-extension'

// create root reducers, combining all the features of the application
const rootReducer = combineReducers({ bank: BankReducer });

const store = createStore(rootReducer);

export type SystemState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
