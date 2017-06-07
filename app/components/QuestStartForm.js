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
    this.onClick = this.onClick.bind(this);
  }

  handleName (event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleDuration (event) {
    this.setState({
      duration: event.target.value,
    });
  }

  onClick () {
    this.props.onClick(this.state.name, this.state.duration);
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
        <RaisedButton onClick={this.onClick} label="Add" primary={true} />

      </form>
    );
  }
}

export default QuestStartForm;
