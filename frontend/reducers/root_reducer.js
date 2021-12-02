import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import entities from "./entities_reducer";
import businesses from "./businesses_reducer";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  businesses,
});

export default rootReducer;
