'use strict';

class Roll  {
  constructor(diceSyntax) {
    this.diceRegex = /\d*d*\d+[\+\-\*]?/ig;
    this.dieRegex = /(\d*)(d*)(\d+)([\+\-\*]?)/i;
    this.rolls = [];

    this.dice = this.getDiceParts(diceSyntax);
    this.diceData = [];

    if (this.isValidDiceSyntax(this.dice)) {

      this.dice.forEach((die) => {
        this.diceData.push(this.getDieParts(die));
      });

      this.total = this.evaluate();
    }


  }

  getTotal() {
    return this.total;
  }

  getRolls() {
    return this.rolls;
  }

  evaluate() {

    let total = null;
    let operand = '';

    this.diceData.forEach((part) => {


      let thisPartsEvaluation = this.evaluatePart(part);

      if (total === null) {
        total = thisPartsEvaluation;
      } else if (operand === '+') {
        total += thisPartsEvaluation;
      } else if (operand === '*') {
        total *= thisPartsEvaluation;
      }

      operand = part[4];
    });


    return total;
  }

  isValidDiceSyntax(dice) {

    if (!dice) {
      return false;
    }

    if (dice[dice.length - 1].match(/[\+\-\*]/)) {
      return false;
    }

    return true;
  }

  getDiceParts(diceSyntax) {
    return diceSyntax.match(this.diceRegex);
  }

  getDieParts(dieSyntax) {
    return dieSyntax.match(this.dieRegex);
  }

  evaluatePart(part) {
    let multiplier = part[1];
    let d = part[2];
    let dieSize = part[3];

    if (!multiplier && !d && dieSize) {
      return dieSize*1;

    } else if (multiplier && d && dieSize) {

      let runningTotal = 0;

      for (var i=1; i<= multiplier*1; i++) {
        let roll = getRandomIntInclusive(1, dieSize*1);

        this.addRoll(dieSize, roll);

        runningTotal += roll;
      }

      return runningTotal;

    } else if (!multiplier && d && dieSize) {

      let roll = getRandomIntInclusive(1, dieSize*1);

      this.addRoll(dieSize, roll);

      return roll;
    }
  }

  addRoll(dieSize, result) {
    this.rolls.push({
      dice: `d${dieSize}`,
      result: result
    });
  }

}

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = Roll;
