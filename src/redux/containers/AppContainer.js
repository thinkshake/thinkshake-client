/* @flow */

import { connect } from 'react-redux';

import App from '../../components/layout/App';
import { actions as topicActions } from '../modules/topic';

const mapStateToProps = (state) => {

  return {
    // comment: state.comment,
    topics: {},
    projects: {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment(comment) {
      dispatch(topicActions.addComment(comment));
    },
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
