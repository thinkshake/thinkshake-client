// Package
import React, { PropTypes } from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
Header.propTypes = {
};
