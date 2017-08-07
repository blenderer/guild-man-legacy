import { ACTIVE_QUESTS_UPDATE, AUTH_UPDATE } from '../firebase';

import guild from '../../data/guild';

const actionHandlers = {
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

const initialState = {
  activeQuests: [],
  user: null,
  guild
};

export default (state = initialState, action) => {
  if (actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action);
  }

  return state;
}
