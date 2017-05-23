/* @flow */

import React from "react";
import PropTypes from 'prop-types'

import ProjectCard from '../../common/ProjectCard';

// TODO: topic 以外にも表示するはず

class TopPage extends React.Component {
  // static propTypes = {
  //   title: PropTypes.string,
  //   type: PropTypes.string
  // };

  constructor(props: Object) {
    super(props);
  }

  /*renderList: Object[] = (projectList) => projectList.map(
    project => <ProjectCard
                title={project.title}
                topic={project.topic}
                description={project.description}
                photo={project.photo}/>
  )*/
  renderList = () => {
    return <div>
      <ProjectCard
        title={"title"}
        topic={"project.topic"}
        description={"project.description"}
      />
      <ProjectCard
        title={"title"}
        topic={"project.topic"}
        description={"project.description"}
      />
      <ProjectCard
        title={"title"}
        topic={"project.topic"}
        description={"project.description"}
      />
    </div>;
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default TopPage;
