import { connect } from 'react-redux'

import QuestStartForm from '../components/QuestStartForm'

import { addQuest } from '../firebase';

const mapStateToProps = (state, ownProps) => {
  return {
    uid: state.user.uid
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submit: addQuest
  }
}

const QuestStartFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestStartForm);

export default QuestStartFormContainer
