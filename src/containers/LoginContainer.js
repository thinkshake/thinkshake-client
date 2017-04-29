// Package
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
// Components
import Login from '../components/Login';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
