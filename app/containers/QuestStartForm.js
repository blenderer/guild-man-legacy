import { connect } from 'react-redux'

import QuestStartForm from '../components/QuestStartForm'

import { addQuest } from '../firebase';

const mapStateToProps = (state, ownProps) => {
  return {
    bla: true
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (text, duration, start) => {
      addQuest(text, duration, start);
    }
  }
}

const QuestStartFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestStartForm);

export default QuestStartFormContainer
