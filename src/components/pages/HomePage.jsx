/* @flow */

import React from 'react';
import PropTypes from 'prop-types'

import TabList from '../layout/TabList';
import TopPage from '../pages/home/TopPage';
import TopicPage from '../pages/home/TopicPage';

class HomePage extends React.Component {

  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    projects: PropTypes.arrayOf(PropTypes.object),
    loadTop: PropTypes.func,
    loadComments: PropTypes.func,
  };

  constructor(props: Object) {
    super(props);
  }

  render() {
    // TODO: /top/:id によって初期表示変更
    // TODO: topic の種類によって数が変化変化
    const types = { 1: 'social', 2: 'politics', 3: 'sports' };
    const topicPages = Object.keys(types).map((key) => {
      return <TopicPage
              key={types[key]}
              title={types[key]}
              theme={types[key]}
              comments={this.props.comments}
              loadComments={this.props.loadComments}
             />;
    });
    const tabs = [<TopPage
                    key='top'
                    title='top'
                    projects={this.props.projects}
                    loadTop={this.props.loadTop} />].concat(topicPages);

    return (
      <TabList>
        {tabs}
      </TabList>
    );

  }
}

export default HomePage;
