'use strict';

let Guild = require('./Guild');
let Tavern = require('./Tavern');

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
  }

  run() {
    //
  }
}

module.exports = GuildManApp;
