'use strict';

let RandomCharacter = require('./RandomCharacter');

const FOR_HIRE_LIMIT = 10;

class Tavern {
  constructor(level) {
    this.charactersForHire = [];
    this.availableQuests = [];
    this.level = level;
  }

  refreshHires() {

    for (let i = 0; i < FOR_HIRE_LIMIT; i++) {
      this.charactersForHire.push(new RandomCharacter());
    }

    return this.charactersForHire;
  }

  refreshQuests() {

    return this.availableQuests;
  }
}

module.exports = Tavern;
