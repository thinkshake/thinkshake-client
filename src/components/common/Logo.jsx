/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

@Radium
class Logo extends React.Component {
  static propTypes = {
    alt: PropTypes.string,
    style: PropTypes.object
  };

  render() {
    return (
      <img alt={this.props.alt} style={this.props.style} src='src/components/common/logo.png' />
    );
  }
}

export default Logo;