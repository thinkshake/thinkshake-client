// Package
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, IndexRoute, Route, browserHistory, hashHistory } from 'react-router';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import NotFoundPage from './components/pages/NotFoundPage';
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
// Store
import store from './redux/store';
// UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleRoot } from 'radium';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { baseStyle } from './components/common/baseStyle';

injectTapEventPlugin();

// const MADA = () => (
//   <div>now constructing...</div>
// );

const history = syncHistoryWithStore(hashHistory, store);

const AppRoot = <Provider store={store}>
  <MuiThemeProvider muiTheme={getMuiTheme(baseStyle)}>
    <StyleRoot>
      <Router history={history}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={HomeContainer}/>
          <Route path='*' component={NotFoundPage}/>
        </Route>
      </Router>
    </StyleRoot>
  </MuiThemeProvider>
</Provider>;

ReactDOM.render(
  AppRoot,
  document.getElementById('root')
);
