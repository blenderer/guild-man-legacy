import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import Home from './Home'; // Our custom react component
import Guild from './Guild'; // Our custom react component

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme();

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(

  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="guild" component={Guild}/>
      </Route>
    </Router>
  </MuiThemeProvider>
  , document.getElementById('app'));
