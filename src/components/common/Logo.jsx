/* @flow */

import React from 'react';
import PropTypes from 'prop-types'

class Logo extends React.Component {
  static propTypes = {
    alt: PropTypes.string
  };

  render() {
    return (
      <img alt={this.props.alt} src='./logo.png' />
    );
  }
}

export default Logo;
