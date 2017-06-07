import { ACTIVE_QUESTS_UPDATE } from '../firebase';

const actionHandlers = {
  [ACTIVE_QUESTS_UPDATE]: (state, action) => {
    return {
      ...state,
      activeQuests: action.updatedItems
    };
  }
};

const initialState = {
  activeQuests: []
};

export default (state = initialState, action) => {
  if (actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action);
  }

  return state;
}
