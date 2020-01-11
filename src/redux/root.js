import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import categoriesReducer from "./categories/categories.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   categories: categoriesReducer,
   shop: shopReducer
});

export default rootReducer;
