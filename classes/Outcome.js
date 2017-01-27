'use strict';

const R = require('ramda');
const getRandomIntInclusive = require('../helpers/math').getRandomIntInclusive;

const GLOBAL_FAILURE_RATE = 0.08;
const GLOBAL_CHALLENGE_FAILURE_RATE = 0.5;

class Outcome {
  constructor(quest, party) {
    for (let x=0; x<20; x++) {
      let instaFailRoll = getRandomIntInclusive(0, 100);

      if (instaFailRoll <= GLOBAL_FAILURE_RATE * 100) {
        console.log('failed');
      } else {
        console.log('success!');
      }
    }


  }

  _resolveChallenge(quest) {

  }
}

module.exports = Outcome;
