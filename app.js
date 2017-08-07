const GuildManApp = require('./classes/App');
import RandomCharacter from './classes/RandomCharacter';

import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'
import reducer from './app/reducers';

import Firebase from './app/firebase';


import App from './app/containers/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


let app;

let getGameState = Promise.reject('404');

getGameState.then(response => {

  app = new GuildManApp(response.gameState);
}).catch(error => {
  if (error === '404') {
    // app = new GuildManApp();
    // app.firstStart();
    // app.run();


    // ON 'Quest accepted'
    // new timer() ?

    // ON 'Quest Concluded' (data.quest, data.party)
    // new Outcome(data.quest, data.party)
  }

});

// let adventurers = [];
// for (var i = 0; i < 5; i++) {
//   adventurers.push(new RandomCharacter());
// }
//
// console.log(adventurers);


const store = createStore(reducer);
Firebase(store);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));
