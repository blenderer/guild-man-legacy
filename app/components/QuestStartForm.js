import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

class QuestStartForm extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      duration: ''
    }

    this.handleName = this.handleName.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleName (event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleDuration (event) {
    this.setState({
      duration: event.target.value * 1 || '',
    });
  }

  submit () {
    this.props.submit({
      questName: this.state.name,
      duration: this.state.duration,
      start: new Date().getTime(),
      uid: this.props.uid
    }).then(() => {
      this.setState({
        name: '',
        duration: ''
      });
    });
  }

  render () {
    return (
      <form>
        <TextField
          hintText="Name"
          value={this.state.name}
          onChange={this.handleName}
        /><br />
        <TextField
          hintText="Duration (ms)"
          value={this.state.duration}
          onChange={this.handleDuration}
        /><br />
        <RaisedButton onClick={this.submit} label="Add" primary={true} />

      </form>
    );
  }
}

export default QuestStartForm;
