import { USER_ACTION_TYPES } from "./UserTypes";
export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const UserReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
