/* @flow */

// Package
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
// Components
import Login from '../components/pages/Login';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
