import { connect } from "react-redux";

import HomePage from "../components/pages/HomePage";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomeContainer;
