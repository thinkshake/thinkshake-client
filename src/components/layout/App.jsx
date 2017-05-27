/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <Header/>
        <div>
          { this.props.children }
        </div>
        <Footer onCommentEnterKey={this.props.addComment}/>
      </div>
    );
  }
}

export default App;
