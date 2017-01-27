'use strict';

let GuildManApp = require('./classes/App');
let RandomCharacter = require('./classes/RandomCharacter');

let app;

let getGameState = Promise.reject('404');

getGameState.then(response => {
  app = new GuildManApp(response.gameState);
}).catch(error => {
  if (error === '404') {
    app = new GuildManApp();
    app.firstStart();
    app.run();
    console.log(app);


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
