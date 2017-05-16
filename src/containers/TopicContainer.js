/* @flow */

import { connect } from "react-redux";

import TopicPage from "../components/pages/TopicPage";
import { topicAction } from "../redux/modules/topic";

const mapStateToProps = (state, ownProps) => {
  return {
    topic: state.topicReducer.map.get(ownProps.topicName),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TopicContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicPage);

export default TopicContainer;