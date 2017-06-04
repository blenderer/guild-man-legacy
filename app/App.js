import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <p> Hello React!</p>
          <RaisedButton label="Primary" primary={true} />
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
