import { combineReducers, createStore, applyMiddleware } from 'redux';
import { BankReducer } from './bank';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// create root reducers, combining all the features of the application
const rootReducer = combineReducers({ bank: BankReducer });

// middlewares
const middlewares = [sagaMiddleware];

// store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// run saga
sagaMiddleware.run(rootSaga);

// types
export type SystemState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
