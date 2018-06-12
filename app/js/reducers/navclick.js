import { NAVID } from '../constants/index';
let arr = [];

const navOpen = (
    state = {
        item: {
            name:'菜单1',
            id:0
        },
        navid: 0,
        addList:[],
        genre: 'left'
    },
    action = {}
) => {
    // console.log(action)
    switch (action.type) {
        case NAVID:
            arr.push(action.item)
            let newArr = uniqueArray(arr,'id')
            return {
                iTem: action.item,
                navid:action.item.id,
                genre: action.genre,
                show: action.show,
                addList: newArr
            };
        default: return state
    }
}
function uniqueArray(array, key){
    var result = [array[0]];
    for(var i = 1; i < array.length; i++){
        var item = array[i];
        var repeat = false;
        for (var j = 0; j < result.length; j++) {
            if (item[key] == result[j][key]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            result.push(item);
        }
    }
    return result;
}
export default navOpen