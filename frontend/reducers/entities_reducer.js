import { combineReducers } from "redux";

import users from "./users_reducer";
import businessesReducer from "./businesses_reducer";
import reviewsReducer from "./reviews_reducer";

export default combineReducers({
  users: users,
  businesses: businessesReducer,
  reviews: reviewsReducer,
});
