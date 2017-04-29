// Package
// import React, { PropTypes } from 'react';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
Header.propTypes = {};
