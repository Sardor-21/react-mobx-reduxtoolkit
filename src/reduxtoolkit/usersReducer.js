import {createSlice} from "@reduxjs/toolkit";

const usersReducer = createSlice({
    name: "users",
    initialState: {
        users: [],
        single_user: {}
    },
    reducers: {
        get_users(state, action) {
            state.users = action.payload
        },
        single_user(state, action) {
          state.single_user = action.payload
        }
    }
})


export default usersReducer.reducer
export const {get_users, single_user} = usersReducer.actions