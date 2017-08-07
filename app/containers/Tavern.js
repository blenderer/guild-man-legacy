import { connect } from 'react-redux'

import Tavern from '../components/Tavern'

const mapStateToProps = (state, ownProps) => {
  return {
    heroes: state.tavern
  }
}

const TavernContainer = connect(
  mapStateToProps
)(Tavern);

export default TavernContainer
