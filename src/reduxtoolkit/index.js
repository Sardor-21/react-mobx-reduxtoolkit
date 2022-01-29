import {combineReducers, configureStore} from "@reduxjs/toolkit"
import toolkitreducer from "./toolkitreducer";
import toolkitSlice from "./toolkitSlice";
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    users_reducer: usersReducer,
    posts_reducer: postsReducer
})

export const store = configureStore({
    reducer: rootReducer
})