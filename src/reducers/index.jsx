import { combineReducers } from "redux";
import arraysReducer from "./arraysReducer.jsx";
import loadReducer from "./loadReducer.jsx";
import statusReducer from "./statusReducer.jsx";
import valuesReducer from "./valuesReducer.jsx";

const allReducers = combineReducers({
  arrays: arraysReducer,
  load: loadReducer,
  status: statusReducer,
  values: valuesReducer,
});

export default allReducers;
