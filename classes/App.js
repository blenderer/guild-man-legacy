'use strict';

let Guild = require('./Guild');
let Tavern = require('./Tavern');

class GuildManApp {
  constructor() {
    this.user;

    this.guild = new Guild();
    this.tavern = new Tavern();

    this.activeQuests = [];
  }
}

module.exports = GuildManApp;
