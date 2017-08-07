import React from 'react';
import PropTypes from 'prop-types';

import TavernListItem from './Hero/TavernListItem';
import { List } from 'material-ui/List';

export default class Tavern extends React.Component {

  static propTypes = {
    heroes: PropTypes.array.isRequired
  };

  render () {
    const { heroes } = this.props;

    return (
      <List>
        {
          heroes.map((hero, index) => {
            return (
              <TavernListItem hero={hero} key={index} />
            );
          })
        }
      </List>
    );
  }
}
