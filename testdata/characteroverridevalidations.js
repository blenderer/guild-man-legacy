import classes from "./classes";
import races from "./races";
import stats from "./stats";
import skills from "./skills";

let validations = {
  "level": (providedValue) => {
    return Number.isInteger(providedValue)
      && providedValue > 0
      && providedValue < 20;
  },
  "class": (providedValue) => {
    return typeof providedValue === 'string' && classes[providedValue];
  },
  "race": (providedValue) => {
    return typeof providedValue === 'string' && races[providedValue];
  },
  // "skills": (providedValue) => {
  //   if (!providedValue) {
  //     return false;
  //   }
  //
  //   for (var skill in providedValue) {
  //     if (!skills[skill]) {
  //       return false;
  //     }
  //     if (!Number.isInteger(providedValue[skill])) {
  //       return false;
  //     }
  //   };
  //
  //   return true;
  // },
  // "stats": (providedValue) => {
  //   if (!providedValue) {
  //     return false;
  //   }
  //
  //   for (var stat in providedValue) {
  //     if (!stats[stat]) {
  //       return false;
  //     }
  //     if (!Number.isInteger(providedValue[stat])) {
  //       return false;
  //     }
  //   };
  //
  //   return true;
  // },
  "name": (providedValue) => {
    return providedValue && typeof providedValue === 'string';
  },
  "potential": (providedValue) => {
    return Number.isInteger(providedValue);
  }
};

export default validations;
