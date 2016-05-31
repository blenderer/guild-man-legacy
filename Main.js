/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  handleTitleTap() {
    hashHistory.push('/');
  }

  render() {

    return (
      <div>
        <AppBar
          title="Lewt"
          titleStyle={{
            "cursor": "pointer",
            "userSelect": "none"
          }}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleTouchTap}
          onTitleTouchTap={this.handleTitleTap}
        />
        <Drawer
         docked={false}
         onRequestChange={(open) => this.setState({
           open: open,
         })}
         open={this.state.open}
        >
          <AppBar
            title="Lewt"
            iconElementLeft={
              <IconButton onTouchTap={this.handleRequestClose}><NavigationClose /></IconButton>
            }
          />
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
        </Drawer>
        {this.props.children}

      </div>
    );
  }
}

export default Main;
