import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

class QuestStartForm extends React.Component {

  render () {
    return (
      <form>
        <TextField
          hintText="Name"
        /><br />
        <TextField
          hintText="Duration (ms)"
        /><br />
        <RaisedButton label="Add" primary={true} />

      </form>
    );
  }
}

export default QuestStartForm;
