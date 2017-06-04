const GuildManApp = require('./classes/App');
const RandomCharacter = require('./classes/RandomCharacter');
const firebase = require('firebase');

let app;


const fb = firebase.initializeApp({
  apiKey: 'AIzaSyC06X1CKO5K1h3YInUCyjnzblE0q1lwxLQ',
  authDomain: 'guild-man.firebaseapp.com',
  databaseURL: 'https://guild-man.firebaseio.com',
  storageBucket: 'guild-man.appspot.com',
  messagingSenderId: '134513670784'
});

const db = fb.database();
const activeQuests = db.ref('/activeQuests/');

activeQuests.once('value').then((snapshot) => {
  console.log(snapshot.val());
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
