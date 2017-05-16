/* @flow */

import { connect } from "react-redux";

import RecommendPage from "../components/pages/RecommendPage";
import { recommendAction } from "../redux/modules/recommend";

const mapStateToProps = (state) => {
  return {
    projectList: state.recommendReducer.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const RecommendContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendPage);

export default RecommendContainer;