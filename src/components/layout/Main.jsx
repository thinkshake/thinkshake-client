import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}

export default Main;