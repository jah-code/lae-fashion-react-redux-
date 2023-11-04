import { combineReducers } from "redux";
import { UserReducer } from "./User/UserReducer";
import { CategoriesReducer } from "./Category/CategoryReducer";
import { CartReducer } from "./Cart/CartReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
});
