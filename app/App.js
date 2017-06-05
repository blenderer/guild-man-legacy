import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'

import QuestStartForm from './components/QuestStartForm';
import CurrentQuests from './components/CurrentQuests';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <CurrentQuests activeQuests={this.props.activeQuests}  />
          <QuestStartForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
