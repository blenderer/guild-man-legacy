import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'

import QuestStartForm from './containers/QuestStartForm';
import LoginForm from './containers/LoginForm';
import CurrentQuests from './containers/CurrentQuests';
import Guild from './containers/Guild';
import Tavern from './containers/Tavern';

class App extends React.Component {
  renderLogin () {
    return (
      <LoginForm />
    );
  }

  renderApp () {
    return (
      <div>
        {/* <CurrentQuests />
        <QuestStartForm /> */}
        Current Guild:
        <Guild />

        Available Heroes in Tavern:
        <Tavern />
      </div>
    )
  }

  render () {
    let app = null;

    if (this.props.user) {
      app = this.renderApp();
    } else {
      app = this.renderLogin();
    }

    return (
      <MuiThemeProvider>
        {app}
      </MuiThemeProvider>
    );
  }
}

export default App;
