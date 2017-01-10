'use strict';

let names = require("../testdata/names");
let classes = require("../testdata/classes");
let races = require("../testdata/races");
let skills = require("../testdata/skills");
let stats = require("../testdata/stats");
let defaultCharacterProps = require("../testdata/characterprops");
let characterOverrideValidations = require("../testdata/characteroverridevalidations");
let Roll = require("./Roll");

class RandomCharacter  {
  constructor(overrides = {}) {
    this.stats = {};
    this.name = null;
    this.level = null;
    this.class = null;
    this.race = null;


    if (!this.name) {
      let namePick = getRandomIntInclusive(0, names.length - 1);
      this.name = names[namePick];
    }

    if (!this.level) {
      this.level = 1;
    }

    if (!this.class) {
      let classArray = Object.keys(classes);
      let classPick = getRandomIntInclusive(0, classArray.length - 1);
      this.class = classArray[classPick];
    }

    if (!this.race) {
      let raceArray = Object.keys(races);
      let racePick = getRandomIntInclusive(0, raceArray.length - 1);
      this.race = raceArray[racePick];
    }

    // roll stats using 3d6 method
    for (var stat in stats) {
      this.stats[stat] = new Roll("3d6").total;
    }

    // apply overrides
    this.applyOverrides(overrides);
  }


  applyOverrides(overrides) {
    for (var prop in overrides) {

      if (characterOverrideValidations[prop]) {
        this[prop] = overrides[prop]
      }
    }
  }

}

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = RandomCharacter;
