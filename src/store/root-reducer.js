import { combineReducers } from "redux";
import { UserReducer } from "./User/UserReducer";
import { CategoriesReducer } from "./Category/CategoryReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
});
