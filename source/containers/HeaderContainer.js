// Package
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
// Components
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer ;
