const counter = (state = 9, action = {}) => {
    // console.log(action)
    switch (action.type) {
        case 'IN':
        return state+1 ;
        case 'UN':
        return state-1 ;
        default: return state
    }
}
export default counter