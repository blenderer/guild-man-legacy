import React from 'react';
import { Link, IndexLink } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import routes from '../routing/routes';

class NavMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {

    let menuItems = routes.map((route) => {
      return (
        <MenuItem
          linkButton
          containerElement={<IndexLink to={route.path} />}
          key={route.routeName}
        >
          {route.prettyName}
        </MenuItem>
      );
    });

    return (
      <div>
        {menuItems}
      </div>
    );
  }
}

export default NavMenu;
