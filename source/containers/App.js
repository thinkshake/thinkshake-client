// Package
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Containers
import HeaderContainer from '../containers/HeaderContainer';
import LoginContainer from '../containers/LoginContainer';
// Reducers
import utilReducer from '../reducers/utilReducer';
// Saga
import rootSaga from '../sagas/rootSaga';

// UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleRoot } from 'radium';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { baseStyle } from '../styles/baseStyle';

injectTapEventPlugin();

const MADA = () => (
  <div>now constructing...</div>
);

const reducer = combineReducers({
  utilReducer,
  routing: routerReducer,
});
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware,
    logger,
  ),
);
sagaMiddleware.run(rootSaga);

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(baseStyle)}>
      <StyleRoot>
        <Router history={history}>
          <Route path="/" component={HeaderContainer}>
            <IndexRoute component={LoginContainer} />
          </Route>
        </Router>
      </StyleRoot>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('container')
);
