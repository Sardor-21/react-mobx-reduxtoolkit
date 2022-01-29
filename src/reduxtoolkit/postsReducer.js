import {createSlice} from "@reduxjs/toolkit";

const postsReducer = createSlice({
    name: "posts",
    initialState: {
        posts: []
    },
    reducers: {
        getPosts(state, action) {
            state.posts = action.payload
        }
    }
})

export default postsReducer.reducer

export const {getPosts} = postsReducer.actions