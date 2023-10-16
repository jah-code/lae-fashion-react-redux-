import { createAction } from "../../utils/firebase/reducer";
import { CATEGORIES_ACTION_TYPE } from "./CategoryTypes";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
