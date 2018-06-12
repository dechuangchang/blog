import { combineReducers } from "redux";
import user from './user.js';
import navshow from './navshow';
import navid from './navclick';
const rootReducer = combineReducers({
    user,
    navshow,
    navid
});
export default rootReducer