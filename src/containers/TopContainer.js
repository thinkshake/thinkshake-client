/* @flow */

import { connect } from "react-redux";

import TopPage from "../components/pages/TopPage";
import { topAction } from "../redux/modules/top";

const mapStateToProps = (state) => {
  return {
    top: state.topReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TopContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPage);

export default TopContainer;
