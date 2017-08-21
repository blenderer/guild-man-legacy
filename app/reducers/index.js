import { ACTIVE_QUESTS_UPDATE, AUTH_UPDATE } from '../firebase';

import guild from '../../data/guild';
import RandomCharacter from '../../classes/RandomCharacter';

import { HIRE_TAVERN_HERO } from '../actions';

const actionHandlers = {
  [HIRE_TAVERN_HERO]: (state, action) => {
    return {
      ...state,
      guild: [action.payload, ...state.guild]
    };
  },
  [ACTIVE_QUESTS_UPDATE]: (state, action) => {
    return {
      ...state,
      activeQuests: action.updatedItems
    };
  },
  [AUTH_UPDATE] : (state, action) => {
    return {
      ...state,
      user: action.user
    };
  }
};

let adventurers = [];
for (var i = 0; i < 5; i++) {
  adventurers.push(new RandomCharacter());
}

const initialState = {
  activeQuests: [],
  user: null,
  guild,
  tavern: adventurers
};

export default (state = initialState, action) => {
  if (actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action);
  }

  return state;
}
