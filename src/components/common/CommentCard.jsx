/* @flow */

import React from "react";
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { ListItem} from 'material-ui/List';
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar';

export default class CommentCard extends React.Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    children: PropTypes.object
    // children: PropTypes.array
  };

  // TODO: @username, link の写真

  render() {
    // TODO: 順番をname,comment,childrenの順番にする
    return (
      <ListItem secondaryText={this.props.comment} leftAvatar={<Avatar src={this.props.photo} />}>
        {this.props.fullname}
        {this.props.children}
      </ListItem>
    );
  }
}
