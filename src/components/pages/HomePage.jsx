/* @flow */

import React from 'react';
import TabList from '../layout/TabList';
import TopPage from '../pages/home/TopPage';
import TopicPage from '../pages/home/TopicPage';

class HomePage extends React.Component {

  constructor(props: Object) {
    super(props);
  }

  render() {
    // TODO: /top/:id によって初期表示変更
    // TODO: topic の種類によって数が変化変化
    const types = { 1: 'social', 2: 'politics', 3: 'sports' };
    const topicPages = Object.keys(types).map((key) => {
      return <TopicPage key={types[key]} title={types[key]} theme={types[key]}/>;
    });
    const tabs = [<TopPage title='top' key='top'/>].concat(topicPages);

    return (
      <TabList>
        {tabs}
      </TabList>
    );

  }
}

export default HomePage;
