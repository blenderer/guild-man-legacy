import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'

import { loginTwitter } from '../firebase';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginTwitter
  }
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer
