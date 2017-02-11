'use strict';

const R = require('ramda');
const getRandomIntInclusive = require('../helpers/math').getRandomIntInclusive;

const GLOBAL_FAILURE_RATE = 0.5;
const GLOBAL_CHALLENGE_FAILURE_RATE = 0.45;

const OUTCOMES = {
  GLOBAL_FAILURE: {
    successful: false,
    reason: 'Global Failure'
  },
  PARTY_FAILURE: {
    successful: false,
    reason: 'Party Failure'
  },
  SUCCESS: {
    successful: true,
    reason: 'Party Success'
  }
};


class Outcome {
  constructor(quest, party) {
    this.quest = quest;
    this.party = party;

    if (!this._passesGlobalFailure()) {
      this.outcome = OUTCOMES.GLOBAL_FAILURE;
      return false;
    }

    if (!this._passesQuest()) {
      this.outcome = OUTCOMES.PARTY_FAILURE;
      return false;
    }

    this.outcome = OUTCOMES.SUCCESS;
  }

  _passesQuest() {
    let partyPower = this.party.reduce((total, character) => {
      return total + character.level;
    }, 0);

    let postitiveTotal = partyPower + this.quest.difficulty['+'];
    let negativeTotal = this.quest.difficulty['-'];

    let outcomeTableDenominator = postitiveTotal + negativeTotal;
    let outcome = getRandomIntInclusive(1, outcomeTableDenominator);

    return outcome > negativeTotal;
  }

  _passesGlobalFailure() {
    let instaFailRoll = getRandomIntInclusive(0, 100);

    if (instaFailRoll <= GLOBAL_FAILURE_RATE * 100) {
      return false;
    } else {
      return true;
    }
  }

  getOutcome() {
    return this.outcome;
  }
}

module.exports = Outcome;
