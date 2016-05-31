/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Home from './Home';
import Guild from './Guild';


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

  render() {

    return (
      <div>
        <AppBar
          title="Lewt"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleTouchTap}
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
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onTouchTap={this.handleRequestClose}
          />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <Router history={hashHistory}>
          <Route path="/" component={Home}/>
          <Route path="guild" component={Guild}/>
        </Router>


      </div>
    );
  }
}

export default Main;
