import { createAction } from "../../utils/firebase/reducer";
import { CATEGORIES_ACTION_TYPE } from "./CategoryTypes";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
