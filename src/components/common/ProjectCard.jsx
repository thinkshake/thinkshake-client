/* @flow */

import React from 'react';
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { projectCardStyle as style } from './projectCardStyle';

export default class ProjectCard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    topic: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  };
  // static defaultProps = {
  //   showDetails: false
  // };

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
            <img alt="" src={this.props.image} />
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
