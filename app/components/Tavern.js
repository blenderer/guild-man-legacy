import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import TavernListItem from './Hero/TavernListItem';
import { List } from 'material-ui/List';

export default class Tavern extends React.Component {

  static propTypes = {
    heroes: PropTypes.array.isRequired,
    hireTavernHero: PropTypes.func.isRequired
  };

  state = {
    open: false
  };

  constructor (props) {
    super(props);

    this.hire = this.hire.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose () {
    this.setState({
      open: false,
      hiring: null
    });
  }

  onItemClick (hero) {
    this.setState({
      open: true,
      hiring: hero
    });
  }

  hire () {
    this.props.hireTavernHero(this.state.hiring);
    this.handleClose();
  }

  render () {
    const { heroes } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Hire"
        primary={true}
        keyboardFocused={true}
        onClick={this.hire}
      />,
    ];

    return (
      <div>
        <List>
          {heroes.map((hero, index) => {
            return (
              <TavernListItem
                hero={hero}
                key={index}
                onClick={() => { this.onItemClick(hero) }}
              />
            )
          })}
        </List>
        <Dialog
          title="Hire this hero?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        </Dialog>
      </div>
    );
  }
}
