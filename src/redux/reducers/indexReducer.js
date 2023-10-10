import { combineReducers } from "redux";
import UserReducer from "./userReducer";

const indexReducer = combineReducers({
  user: UserReducer,
});
export default indexReducer;
