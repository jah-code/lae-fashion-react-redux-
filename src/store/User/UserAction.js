import { createAction } from "../../utils/firebase/reducer";
import { USER_ACTION_TYPES } from "./UserTypes";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
