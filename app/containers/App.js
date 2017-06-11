import { connect } from 'react-redux'

import App from '../App'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default LoginFormContainer
