/* @flow */

import React from "react";
// Components
import Image from '../common/Image';
import * as Icon from '../common/Icon';
import ProjectCard from '../common/ProjectCard';
// types
import type { Project } from '../../redux/models/Project';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';

export default class RecommendPage extends React.Component {

  renderList: Object[] = (projectList: Project[]) => projectList.map(
    project => {
      return <ProjectCard
                key={project.id}
                name={project.name}
                topic={project.topic}
                title={project.title}
                text={project.text}
            />;
    }
  )

  // renderList = (list) => console.log(list);

  render() {
    return (
      <div>
        {this.renderList(this.props.projectList)}
      </div>
    );
  }
}
