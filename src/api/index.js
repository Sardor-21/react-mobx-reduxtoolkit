import axiosInstance from "./instance";
import {get_users, single_user} from "../reduxtoolkit/usersReducer";


const getUsers = (dispatch) => {
    axiosInstance.get('users').then((res) => {
        dispatch(get_users(res.data))
    }).catch((err) => {
        console.log(err)
    })
}

const single_users = (dispatch , id) => {
    axiosInstance.get(`users/${id}`).then((res) => {
        dispatch(single_user(res.data))
    }).catch((err) => {
        console.log(err)
    })
}

export {getUsers, single_users}