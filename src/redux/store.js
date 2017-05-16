/* @flow */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {rootSaga, utilReducer} from './modules/login';
import { topReducer } from './modules/top'
import { topicReducer } from './modules/topic'
import { recommendReducer } from './modules/recommend'

const reducer = combineReducers({
  topReducer,
  topicReducer,
  recommendReducer,
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
