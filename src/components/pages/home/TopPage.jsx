/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../common/ProjectCard';

// TODO: topic 以外にも表示するはず

class TopPage extends React.Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
    // type: PropTypes.string
    loadTop: PropTypes.func,
  };

  constructor(props: Object) {
    super(props);
  }

  componentWillMount() {
    this.props.loadTop('userId');
  }

  renderList: Object[] = (projects) => projects.map(
    project => <ProjectCard
                key={project.id}
                title={project.title}
                topic={project.topic}
                description={project.description}
                image={project.image}
              />
  )

  render() {
    return (
      <div>
        {this.renderList(this.props.projects)}
      </div>
    );
  }
}

export default TopPage;
