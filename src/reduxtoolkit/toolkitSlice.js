import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        },
        toolkitPayload(state, action) {
            state.count = action.payload;
        }
    }
})


export default toolkitSlice.reducer

export const {increment, decrement, toolkitPayload} = toolkitSlice.actions