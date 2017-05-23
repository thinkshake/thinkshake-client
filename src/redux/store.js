/* @flow */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import { topReducer } from './modules/top';
import { topicReducer } from './modules/topic';
import { projectReducer } from './modules/project';

const reducer = combineReducers({
  topReducer,
  topicReducer,  
  projectReducer,
  routing: routerReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(
    createLogger(),
  ),
);

export default store;
