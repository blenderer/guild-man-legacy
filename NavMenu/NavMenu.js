/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import { Link, IndexLink } from 'react-router';
import MenuItem from 'material-ui/MenuItem';

class NavMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {

    return (
      <div>
        <MenuItem
          linkButton
          containerElement={<IndexLink to="/" />}
        >
          Home
        </MenuItem>
        <MenuItem
          linkButton
          containerElement={<Link to="/guild" />}
        >
          Guild
        </MenuItem>
      </div>
    );
  }
}

export default NavMenu;
