/* @flow */

import React from "react";

class ServerErrorPage extends React.Component {
  render() {
    return (
      <div>
        <h1>500 - Server Error</h1>
        <p>I'm sorry, the servers occurred errors!</p>
      </div>
    );
  }
}

export default ServerErrorPage;