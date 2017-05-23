/* @flow */

import { connect } from 'react-redux';

import HomePage from '../../components/pages/HomePage';

const mapStateToProps = (state) => {
  return {
    topics: {},
    projects: {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomeContainer;
