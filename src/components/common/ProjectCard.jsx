/* @flow */

import React from "react";
import { hashHistory } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types'

import { projectCardStyle as style } from './projectCardStyle';

export default class ProjectCard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    topic: PropTypes.string,
    description: PropTypes.string,
  };
  static defaultProps = {
    showDetails: false
  };

  // TODO: タブに移動
  handleTouchTap() {
  hashHistory.push('/project')
  }

  render() {
    return (
      <div style={style.base}>
        <Card>
          <CardHeader
            title={this.props.title}
            subtitle={this.props.topic}
          />
          <CardMedia>
            <img alt="" src="images/sample.png" />
          </CardMedia>
          <CardTitle title={this.props.description} />
          <CardActions>
            <FlatButton label="go project" labelStyle={style.button} onTouchTap={()=>this.handleTouchTap()}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}
