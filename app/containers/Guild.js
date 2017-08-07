import { connect } from 'react-redux'

import Guild from '../components/Guild'

const mapStateToProps = (state, ownProps) => {
  return {
    guild: state.guild
  }
}

const GuildContainer = connect(
  mapStateToProps
)(Guild);

export default GuildContainer
