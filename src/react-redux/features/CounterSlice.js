import { createSlice } from "@reduxjs/toolkit";

// ---- STATE ---
const initState = {
    user: "user",
    counter:1000,
}

const CounterRTKSlice = createSlice({
    // this name refers to attr in store.
    name: "counterRTK",
    initialState: initState,
    reducers:{
        increment(state){
            // state is immutable inside reducer.
            state.counter += 1;
        },
        decrement(state){
            state.counter -= 1;
        },
        reset(state){
            state.counter = 0;
        },
        incrementSpec(state, action) {
            state.counter += action.payload;
        },
        decrementSpec(state, action) {
            state.counter -= action.payload;
        },
    },
});

// --- ACTION ---
// The value of the variables gotten from the 'reducer[action]' attr of slice.
export const { increment, decrement, reset, incrementSpec, decrementSpec } = CounterRTKSlice.actions;

// ============================

// --- SELECTOR ---
// Same as redx before the use of toolkit, we gonna define the selector here.
// The selector will be referred to the attribute of the Counter -> {user, counter};
export const userSelector = (state) => state.counterRTK.user;
export const counterSelector = (state) => state.counterRTK.counter;


export default CounterRTKSlice.reducer;

