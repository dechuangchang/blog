import {NAVSHOW} from '../constants/index';
const navOpen = (state = true, action = {}) => {
    // console.log(action)
    
    switch (action.type) {
        case NAVSHOW:
        return !state;
        default: return state
    }
}
export default navOpen