import React from 'react';
import PropTypes from 'prop-types';

import HeroListItem from './Hero/ListItem';
import { List } from 'material-ui/List';

export default class Guild extends React.Component {

  static propTypes = {
    guild: PropTypes.array.isRequired
  };

  render () {
    const { guild } = this.props;

    return (
      <List>
        {
          guild.map((member, index) => {
            return (
              <HeroListItem hero={member} key={index} />
            );
          })
        }
      </List>
    );
  }
}
