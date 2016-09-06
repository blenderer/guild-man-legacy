'use strict';

import names from "../testdata/names";
import classes from "../testdata/classes";
import races from "../testdata/races";
import skills from "../testdata/skills";
import stats from "../testdata/stats";
import defaultCharacterProps from "../testdata/characterprops";
import characterOverrideValidations from "../testdata/characteroverridevalidations";

class RandomCharacter  {
  constructor(overrides = {}) {
    this.overrides = overrides;

    // apply overrides
    this.applyOverrides();


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


  }


  applyOverrides() {
    for (var prop in this.overrides) {
      if (characterOverrideValidations[prop]) {
        this[prop] = this.overrides[prop]
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

export default RandomCharacter;
