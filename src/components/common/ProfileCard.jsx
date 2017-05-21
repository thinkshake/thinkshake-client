import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import PropTypes from 'prop-types'

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
