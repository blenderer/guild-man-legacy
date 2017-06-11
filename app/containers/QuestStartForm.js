import { connect } from 'react-redux'

import QuestStartForm from '../components/QuestStartForm'

import { addQuest } from '../firebase';

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: addQuest
  }
}

const QuestStartFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestStartForm);

export default QuestStartFormContainer
