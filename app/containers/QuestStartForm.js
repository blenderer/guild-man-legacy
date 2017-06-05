import { connect } from 'react-redux'

import QuestStartForm from '../components/QuestStartForm';

const QuestStartFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestStartForm)

export default QuestStartFormContainer
