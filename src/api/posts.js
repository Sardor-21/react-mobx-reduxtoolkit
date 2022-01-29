import axiosInstance from "./instance";
import {getPosts} from "../reduxtoolkit/postsReducer";

const get_posts = (dispatch) => {
    axiosInstance.get('posts', {
        params: {
        _limit: 10
        }
    }).then((res) => {
        dispatch(getPosts(res.data))
    }).catch((err) => {
        console.log(err)
    })
}

export {get_posts}