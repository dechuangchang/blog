import {NAVSHOW, GETUSER ,NAVID} from '../constants/index';

export const oNavShow = (otype) => {
    return {
        type:NAVSHOW
    }
}

export const oNavClickId = (item,genre) => {
    // console.log(navid,state,genre)
    return {
        type:NAVID,
        item:item,
        genre:genre,
        show:true
    }
}

export const getUser = () => {
    return {
        type:GETUSER,
        payload: axios.get("https://randomuser.me/api/")
    }
    // return dispatch => (
    //     dispatch({
    //         type:GETUSER,
    //         email:'获取中...'
    //     }),
    //     axios.get(
    //         "https://randomuser.me/acpi/"
    //     ).then(rep=>{
    //         dispatch({
    //             type:GETUSER,
    //             email:rep.data.results[0].email
    //         })
    //     })
    //     .catch((error)=>{
    //         dispatch({
    //             type:GETUSER,
    //             email:error.response.data
    //         })
    //     })
    // )
    
}