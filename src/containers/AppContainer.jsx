/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
// import { Router, IndexRoute, Route, browserHistory, hashHistory } from 'react-router';
import { Router, IndexRoute, Route } from 'react-router';
import PropTypes from 'prop-types'

import NotFoundPage from '../components/pages/NotFoundPage';
import MainContainer from './MainContainer';
import HomePage from '../components/pages/HomePage';
import ProjectContainer from './ProjectContainer'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleRoot } from 'radium';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { baseStyle } from '../components/styles/baseStyle';

injectTapEventPlugin();

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(baseStyle)}>
          <StyleRoot>
            <Router history={history}>
              <Route path='/' component={MainContainer}>
                <IndexRoute component={HomePage}/>
                <Route path='/project' component={ProjectContainer}/>
                <Route path='*' component={NotFoundPage}/>
              </Route>
            </Router>
          </StyleRoot>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default AppContainer;
