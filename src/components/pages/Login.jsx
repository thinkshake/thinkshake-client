/* @flow */

// Package
// import React, { PropTypes } from 'react';
import React from 'react';

// UI
import TextField from 'material-ui/TextField';
// import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class Login extends React.Component {

  //local state
  state = {
    localEmail: '',
    localPassword: '',
    localUserName: '',
    toSignIn: false,
    buttonLabel: '新規登録はこちら',
  };
  changeLocalEmail = (event: Object) => {
    event.preventDefault();
    this.setState({ localEmail: event.target.value })
  };
  changeLocalPassword = (event: Object) => {
    event.preventDefault();
    this.setState({ localPassword: event.target.value })
  };
  changeLocalUserName = (event: Object) => {
    event.preventDefault();
    this.setState({ localUserName: event.target.value })
  };

  componentWillMount() {
  }

  handleLogin() {
  }

  handleSignIn() {
  }

  renderSubmit() {
    return <RaisedButton
      label={'ログイン'}
      primary={true}
      onTouchTap={() => this.handleLogin()}
    />;
  }

  handleError() {

  }

  switchToSignIn() {
    if (this.state.toSignIn) {
      this.setState({ toSignIn: false });
      this.setState({ buttonLabel: '新規登録はこちら' });
    } else {
      this.setState({ toSignIn: true });
      this.setState({ buttonLabel: '登録済みの方はこちら' });
    }
  }

  userNameField() {
    return this.state.toSignIn ?
      <TextField
        floatingLabelText="ユーザー名"
        value={this.state.localUserName}
        onChange={this.changeLocalUserName}
      />
      : <div></div>;
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Email"
          value={this.state.localEmail}
          onChange={this.changeLocalEmail}
        />
        <br />
        <TextField
          floatingLabelText="password"
          value={this.state.localPassword}
          onChange={this.changeLocalPassword}
        />
        <br />
        {this.userNameField()}
        <br />
        {this.handleError()}
        <br />
        {this.renderSubmit()}
        <br />
        <FlatButton
          label={this.state.buttonLabel}
          onTouchTap={() => this.switchToSignIn()}
        />
        <br />
      </div>
    );
  }
}
Login.propTypes = {};
