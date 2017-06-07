import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'

import QuestStartForm from './containers/QuestStartForm';
import CurrentQuests from './containers/CurrentQuests';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <CurrentQuests />
          <QuestStartForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
