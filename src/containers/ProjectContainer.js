import { connect } from "react-redux";

import ProjectPage from "../components/pages/ProjectPage";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPage);

export default ProjectContainer;
