/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route } from 'react-router';
import PropTypes from 'prop-types'

import NotFoundPage from '../components/pages/NotFoundPage';
import AppContainer from './AppContainer';
import HomeContainer from './HomeContainer';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleRoot } from 'radium';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { baseStyle } from '../components/styles.bk/baseStyle';

injectTapEventPlugin();

class RootContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props: Object) {
    super(props);
  }

  // TODO: return false は何か良いことがある？
  // shouldComponentUpdate() {
  //   return false
  // }

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <StyleRoot>
            <Router history={history}>
              <Route path='/' component={AppContainer}>
                <IndexRoute component={HomeContainer}/>
                <Route path='/topic/:id' component={HomeContainer}/>
                <Route path='*' component={NotFoundPage}/>
              </Route>
            </Router>
          </StyleRoot>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default RootContainer;
