import { connect } from 'react-redux'

import CurrentQuests from '../components/CurrentQuests'

const mapStateToProps = (state, ownProps) => {
  return {
    activeQuests: state.activeQuests
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const CurrentQuestsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentQuests);

export default CurrentQuestsContainer
