import { connect } from 'react-redux'

import Tavern from '../components/Tavern'
import { hireTavernHero } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    heroes: state.tavern
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // hireTavernHero: dispatch(hireTavernHero)
  };
}

const TavernContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tavern);

export default TavernContainer
