import React from 'react';
import PropTypes from 'prop-types';

import HeroListItem from './ListItem';
import { SocialPersonAdd } from 'material-ui/svg-icons';

export default class TavernListItem extends React.Component {

  static propTypes = {
    hero: PropTypes.object.isRequired
  };

  render () {
    let newProps = {
      ...this.props,
      rightIcon: (
        <SocialPersonAdd />
      )
    };

    return (
      <HeroListItem {...newProps} />
    );
  }
}
