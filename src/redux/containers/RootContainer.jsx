/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route } from 'react-router';
import PropTypes from 'prop-types'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { StyleRoot } from 'radium';

import NotFoundPage from '../../components/pages/NotFoundPage';
import AppContainer from './AppContainer';
import HomeContainer from './HomeContainer';
import ProjectContainer from './ProjectContainer';
import { baseStyle } from '../../components/styles/baseStyle';

injectTapEventPlugin();

class RootContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props: Object) {
    super(props);
  }

  // stateの更新時に全体がrerenderされることを防ぐ
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
              <Route path='/' component={AppContainer}>
                <IndexRoute component={HomeContainer}/>
                <Route path='/topic/:id' component={HomeContainer}/>
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

export default RootContainer;
