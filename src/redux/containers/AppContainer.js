/* @flow */

import { connect } from 'react-redux';

import App from '../../components/layout/App';
import { actions as topActions } from '../modules/top';

const mapStateToProps = (state) => {

  return {
    // comment: state.comment,
    topics: {},
    projects: {}
  };
};

const mapDispatchToProps = (dispatch,) => {
  return {
    addComment(comment) {
      dispatch(topActions.addComment(comment));
    },
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
