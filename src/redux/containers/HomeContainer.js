/* @flow */

import { connect } from 'react-redux';

import HomePage from '../../components/pages/HomePage';
import { actions as topActions } from '../modules/top';

const mapStateToProps = (state) => {
  return {
    topics: {},
    projects: state.topReducer.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTop(userId: string) {
      dispatch(topActions.loadTop(userId));
    }
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomeContainer;
