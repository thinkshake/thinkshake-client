/* @flow */

import React from "react";
import SwipeableViews from 'react-swipeable-views';
// Components
import TopContainer from '../../containers/TopContainer';
import RecommendContainer from '../../containers/RecommendContainer';
import TopicContainer from '../../containers/TopicContainer';
// import TopPage from '../pages/TopPage';
// import RecommendPage from '../pages/RecommendPage';
// import TopicPage from '../pages/TopicPage';
// UI
import {Tabs, Tab} from 'material-ui/Tabs';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';
import { homeStyle as style } from '../styles/homeStyle';

class HomePage extends React.Component {
  state: Object;

  constructor(props: Object) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value: number) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          tabItemContainerStyle={m(style.tabItem)}
        >
          <Tab label="ホーム" value={0} style={m(style.tabItem)} />
          <Tab label="おすすめ" value={1} style={m(style.tabItem)} />
          <Tab label="社会" value={2} style={m(style.tabItem)} />
          <Tab label="政治" value={3} style={m(style.tabItem)} />
          <Tab label="スポーツ" value={4} style={m(style.tabItem)} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={m(style.slide)}>
            <TopContainer />
          </div>
          <div style={m(style.slide)}>
            <RecommendContainer />
          </div>
          <div style={m(style.slide)}>
            <TopicContainer topicName={'社会'} />
          </div>
          <div style={m(style.slide)}>
            <TopicContainer topicName={'政治'} />
          </div>
          <div style={m(style.slide)}>
            <TopicContainer topicName={'スポーツ'} />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default HomePage;
