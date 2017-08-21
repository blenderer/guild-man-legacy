import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';

export default class HeroListItem extends React.Component {

  static propTypes = {
    hero: PropTypes.object.isRequired
  };

  render () {
    const { hero, rightIcon, onClick } = this.props;

    let primaryText = hero.name;
    let secondaryText = `Level ${hero.level} ${hero.race} ${hero.class}`;

    return (
      <ListItem
        onClick={onClick}
        primaryText={primaryText}
        secondaryText={secondaryText}
        rightIcon={rightIcon}
      />
    );
  }
}
