'use strict';

let Guild = require('./Guild');
let Tavern = require('./Tavern');
let Outcome = require('./Outcome');

class GuildManApp {
  constructor(gameState = {}) {
    this.user;

    this.guild = new Guild(gameState.guild);
    this.tavern = new Tavern(gameState.tavern);
    this.level = gameState.level || 1;
  }

  firstStart() {
    this.tavern.refreshHires();
    this.tavern.refreshQuests();
    this.guild.gold += 100;

    // testing outcomes
    let quest = this.tavern.availableQuests[0];
    let party = this.tavern.charactersForHire.slice(0, 3); // temporary

    new Outcome(quest, party).getOutcome();
  }

  run() {
    //
  }
}

module.exports = GuildManApp;
