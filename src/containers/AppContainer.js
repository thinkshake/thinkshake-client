/* @flow */

import { connect } from 'react-redux';

import App from '../components/layout/App';
import { actions } from '../redux/modules/app';

const mapStateToProps = (state) => {
  console.log(state);

  return {
    // comment: state.comment,
    topics: {},
    projects: {}
  };
};

const mapDispatchToProps = (dispatch,) => {
  return {
    addComment(comment) {
      dispatch(actions.addComment(comment));
    },
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
