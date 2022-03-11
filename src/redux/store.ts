import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // local storage

// middlewares
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';

// reducers
import { CategoryReducer } from './category';
import { ConfigReducer } from './config';
import { QuestionReducer } from './question';
import { StatsReducer } from './stats';

const sagaMiddleware = createSagaMiddleware();

// create root reducers, combining all the features of the application
const rootReducer = combineReducers({
  category: CategoryReducer,
  config: ConfigReducer,
  question: QuestionReducer,
  stats: StatsReducer,
});
const persistConfig = {
  key: 'quiz_app',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// middlewares
const middlewares = [sagaMiddleware, loggerMiddleware];

// store
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

// run saga
sagaMiddleware.run(rootSaga);

// types
export type SystemState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
