import { combineReducers } from "redux";
import user from './user.js';
import navshow from './navshow';
const rootReducer = combineReducers({
    user,
    navshow
});
export default rootReducer