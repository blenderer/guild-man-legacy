import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

class CurrentQuests extends React.Component {

  static propTypes = {
    loginTwitter: PropTypes.func.isRequired
  }

  render () {
    return (
      <form>
        <RaisedButton onClick={this.props.loginTwitter} label="Login" primary={true} />
      </form>
    );
  }
}

export default CurrentQuests;
