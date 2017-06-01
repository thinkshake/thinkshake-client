/* @flow */

import { connect } from 'react-redux';

import HomePage from '../../components/pages/HomePage';
import { actions as topActions } from '../modules/top';
import { actions as topicActions } from '../modules/topic';

const mapStateToProps = (state) => {
  return {
    comments: state.topicReducer.comments,
    projects: state.topReducer.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTop(userId: string) {
      dispatch(topActions.loadTop(userId));
    },

    loadComments(topicId: string) {
      dispatch(topicActions.loadComments(topicId));
    },
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomeContainer;
