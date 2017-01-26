'use strict';

class Guild {
  constructor() {
    this.gold = 0;
    this.members = [];
    this.inventory = [];
    this.activeQuests = [];
  }
}

module.exports = Guild;
