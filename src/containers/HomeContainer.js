/* @flow */

import { connect } from "react-redux";

import HomePage from "../components/pages/HomePage";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomeContainer;
