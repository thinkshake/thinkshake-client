import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import utilReducer from './reducers/utilReducer';
// import rootSaga from './sagas/rootSaga';
import {rootSaga, utilReducer} from './modules/login';

const reducer = combineReducers({
  utilReducer,
  routing: routerReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);

// saga must run after createStore because of the following reason
// Uncaught Error: Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware
sagaMiddleware.run(rootSaga);

export default store;
