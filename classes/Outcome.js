'use strict';

const R = require('ramda');
const getRandomIntInclusive = require('../helpers/math').getRandomIntInclusive;

const GLOBAL_FAILURE_RATE = 0.08;
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

    this.negativeOutcomeOdds = 0;
    this.postitiveOutcomeOdds = 0;

    if (!this._passesGlobalFailure()) {
      this.outcome = OUTCOMES.GLOBAL_FAILURE;
      return false;
    }

    this._applyPartyOdds();
    this._applyQuestOdds();

    if (!this._passesQuest()) {
      this.outcome = OUTCOMES.PARTY_FAILURE;
      return false;
    }



    this.outcome = OUTCOMES.SUCCESS;
  }

  _applyPartyOdds() {
    this.postitiveOutcomeOdds += this.party.reduce((total, character) => {
      return total + character.level;
    }, 0);
  }

  _applyQuestOdds() {
    this.postitiveOutcomeOdds += this.quest.difficulty['+'];
    this.negativeOutcomeOdds += this.quest.difficulty['-'];
  }

  _passesGlobalFailure() {
    let instaFailRoll = getRandomIntInclusive(0, 100);

    if (instaFailRoll <= GLOBAL_FAILURE_RATE * 100) {
      return false;
    } else {
      return true;
    }
  }

  _passesQuest() {
    let outcomeTableDenominator = this.negativeOutcomeOdds + this.postitiveOutcomeOdds;
    let outcome = getRandomIntInclusive(1, outcomeTableDenominator);

    return outcome > this.negativeOutcomeOdds;
  }

  getOutcome() {
    return this.outcome;
  }
}

module.exports = Outcome;
