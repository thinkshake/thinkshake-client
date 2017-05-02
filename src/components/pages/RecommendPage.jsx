import React from "react";
// Components
import Image from '../common/Image';
import * as Icon from '../common/Icon';
import ProjectCard from '../common/ProjectCard';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';

export default class RecommendPage extends React.Component {
  render() {
    return (
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    );
  }
}
