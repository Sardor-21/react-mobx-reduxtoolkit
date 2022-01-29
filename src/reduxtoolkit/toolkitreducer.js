import {createAction, createReducer} from "@reduxjs/toolkit";

const initialstate = {
    count: 0,
}

export const increment = createAction("INCREMENT")
export const decrement = createAction("DECREMENT")

export  default  createReducer(initialstate, {
    [increment]: (state) => {
        state.count  = state.count + 1
    },
    [decrement]: (state) => {
        state.count  = state.count - 1
    }
})