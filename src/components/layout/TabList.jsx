/* @flow */

import React from "react";
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types'
// import { hashHistory } from 'react-router';

class TabList extends React.Component {
  static propTypes = {
    children: PropTypes.array.isRequired
  };
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

    // TODO: TABのリンク
    // hashHistory.push('/project')
  };

  render() {
    const tabs = this.props.children.map((child, i) => {
      return <Tab label={child.props.title} key={i} value={i}/>;
    });

    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          {tabs}
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          { this.props.children }
        </SwipeableViews>
      </div>
    );
  }
}

export default TabList;
