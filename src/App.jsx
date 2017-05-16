/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import AppContainer from './containers/AppContainer';

import store from './redux/store';

const history = syncHistoryWithStore(hashHistory, store);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <AppContainer store={store} history={history}/>,
  MOUNT_NODE
);
