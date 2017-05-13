/* @flow */

import React from "react";
import SwipeableViews from 'react-swipeable-views';
// Components
import TopPage from '../pages/TopPage';
import RecommendPage from '../pages/RecommendPage';
import TopicPage from '../pages/TopicPage';
// UI
import RaisedButton from 'material-ui/RaisedButton';
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
        >
          <Tab label="ホーム" value={0} />
          <Tab label="おすすめ" value={1} />
          <Tab label="社会" value={2} />
          <Tab label="政治" value={3} />
          <Tab label="スポーツ" value={4} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <TopPage />
          </div>
          <div style={style.slide}>
            <RecommendPage />
          </div>
          <div style={style.slide}>
            <TopicPage />
          </div>
          <div style={style.slide}>
            <TopicPage />
          </div>
          <div style={style.slide}>
            <TopicPage />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default HomePage;
