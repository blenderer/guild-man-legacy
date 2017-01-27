'use strict';

const R = require('ramda');
const getRandomIntInclusive = require('../helpers/math').getRandomIntInclusive;

const GLOBAL_FAILURE_RATE = 0.08;
const GLOBAL_CHALLENGE_FAILURE_RATE = 0.5;

class Outcome {
  constructor(quest, party) {
    if (!this._passesGlobalFailure()) {
      this.success = false;
      return false;
    }

  }

  _resolveChallenge(quest) {

  }

  _passesGlobalFailure() {
    let instaFailRoll = getRandomIntInclusive(0, 100);

    if (instaFailRoll <= GLOBAL_FAILURE_RATE * 100) {
      return false;
    } else {
      return true;
    }
  }

  getResult() {
    return this.success;
  }
}

module.exports = Outcome;
