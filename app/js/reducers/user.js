import { GETUSER_PENDING, GETUSER_FULFILLED, GETUSER_REJECTED } from '../constants/index';
let init = {
    error: false,
    content: '请点击按钮'
}
const getuser = (state = init, action = {}) => {
    switch (action.type) {
        case GETUSER_FULFILLED:
            return {
                error: false,
                content: action.payload.data.results[0].email
            };
        case GETUSER_PENDING:
            return {
                error: false,
                content: '请求中>=>———————>'
            };
        case GETUSER_REJECTED:
            return {
                error: true,
                content: action.payload.response.data
            };
        default: return state
    }
}
export default getuser

