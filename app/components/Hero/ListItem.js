import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';

export default class HeroListItem extends React.Component {

  static propTypes = {
    hero: PropTypes.object.isRequired
  };

  render () {
    const { hero } = this.props;

    let primaryText = hero.name;
    let secondaryText = `Level ${hero.level} ${hero.race} ${hero.class}`;

    return (
      <ListItem primaryText={primaryText} secondaryText={secondaryText} />
    );
  }
}
