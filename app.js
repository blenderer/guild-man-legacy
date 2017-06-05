const GuildManApp = require('./classes/App');
const RandomCharacter = require('./classes/RandomCharacter');
const firebase = require('firebase');

import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


import App from './app/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


let app;

const fb = firebase.initializeApp({
  apiKey: 'AIzaSyC06X1CKO5K1h3YInUCyjnzblE0q1lwxLQ',
  authDomain: 'guild-man.firebaseapp.com',
  databaseURL: 'https://guild-man.firebaseio.com',
  storageBucket: 'guild-man.appspot.com',
  messagingSenderId: '134513670784'
});

const db = fb.database();
const activeQuestsRef = db.ref('/activeQuests/');

let activeQuests = [];

activeQuestsRef.once('value').then((snapshot) => {
  activeQuests = snapshot.val();
  render(<App activeQuests={activeQuests}/>, document.getElementById('app'));
});

let getGameState = Promise.reject('404');

getGameState.then(response => {

  app = new GuildManApp(response.gameState);
}).catch(error => {
  if (error === '404') {
    app = new GuildManApp();
    app.firstStart();
    app.run();


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

render(<App activeQuests={activeQuests}/>, document.getElementById('app'));
