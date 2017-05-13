/* @flow */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// styles
import { mergeStyle as m } from '../styles/mergeStyle';
import { mainStyle as style } from '../styles/mainStyle';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={m(style.wrapper)}>
          { this.props.children }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;
