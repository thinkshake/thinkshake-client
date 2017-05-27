/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

class ProfileCard extends React.Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
  };

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.fullname}
          subtitle={this.props.username}
          avatar={this.props.photo}
        />
      </Card>
    );
  }
}

export default ProfileCard;
