import React from 'react';
import PropTypes from 'prop-types';

class Quest extends React.Component {

  static propTypes = {
    questName: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props);

    this.state = {
      remainingSeconds: this.getRemainingSeconds()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    setInterval(this.tick, 1000);
  }

  tick () {
    this.setState({
      remainingSeconds: this.getRemainingSeconds()
    });
  }

  getRemainingSeconds () {
    return Math.floor(
      (
        (this.props.start + this.props.duration)
        - new Date().getTime()) / 1000
    );
  }

  render () {
    return (
      <li>
        {this.props.questName}: {this.state.remainingSeconds}
      </li>
    );
  }
}

export default Quest;
