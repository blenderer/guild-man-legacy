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

    this._applyPartyOdds();
    this._applyQuestOdds();
    this._applyChallengeOdds();
    this._applyGlobalFailureOdds();

    if (!this._passesQuest()) {
      this.outcome = OUTCOMES.PARTY_FAILURE;
      return false;
    } else {
      this.outcome = OUTCOMES.SUCCESS;
      return true;
    }
  }

  _applyChallengeOdds() {
    let challengeAdvantage = 0;

    this.quest.challenges.forEach((challenge) => {

      // check the challenge's type
      if (challenge.type === 'match') {
        this.party.forEach((adventurer) => {
          const adventurerValue = adventurer[challenge.category];

          // check array for value
          if (Array.isArray(adventurerValue)) {
            if (R.contains(challenge.value, adventurerValue)) {
              challengeAdvantage += challenge.worth;
            }
          }
          // check string for value
          else if (typeof adventurerValue === 'string' || typeof adventurerValue === 'number') {
            if (challenge.value === adventurerValue) {
              challengeAdvantage += challenge.worth;
            }
          }
        });
      }
    });

    this.postitiveOutcomeOdds += challengeAdvantage;
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

  _applyGlobalFailureOdds() {
    let globalFailureOdds = this.quest.difficulty['+'] * GLOBAL_FAILURE_RATE;

    this.negativeOutcomeOdds += Math.ceil(globalFailureOdds);
  }

  _passesQuest() {
    let outcomeTableDenominator = this.negativeOutcomeOdds + this.postitiveOutcomeOdds;
    let outcome = getRandomIntInclusive(1, outcomeTableDenominator);

    // console.log(`
    //   positive outlier: ${this.postitiveOutcomeOdds},
    //   fail <= ${this.negativeOutcomeOdds},
    //   roll: ${outcome},
    //   outcome: ${outcome > this.negativeOutcomeOdds}
    // `);

    return outcome > this.negativeOutcomeOdds;
  }

  getOutcome() {
    return this.outcome;
  }
}

module.exports = Outcome;
