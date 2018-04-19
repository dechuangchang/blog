import { combineReducers } from "redux";
import user from './user.js';
import counter from './counter.js';
const rootReducer = combineReducers({
    user,
    counter
});
export default rootReducer