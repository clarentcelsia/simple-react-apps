// Here we gonna use one of middleware, Thunk.

// axios to fetch api
import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ---- STATE ---
const initState = {
    user: "user",
    counter:1000,
}

export const userAsync = createAsyncThunk(
    "counterRTKThunk/fetchUser",
    async(userID) => {
        const response = await axios.get(`https://reqres.in/api/users/${userID}`)
        return response.data.data;
    }
);

const CounterRTKSliceThunk = createSlice({
    // this name refers to attr in store.
    name: "counterRTKThunk",
    initialState: initState,
    reducers:{
        // Standard reducer logic w/ auto generated actiontypes per reducer
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

    // Reducer for additional action types and handle loading state as needed
    extraReducers: (builder) => {
        //here we gonna declare the reducer when the action is pending/fulfilled/rejected.
        builder
        .addCase(
            userAsync.pending,
            // reducer brings 2 parameters, state and action,
            // but we are not gonna use those params here, so I'll just attach an empty function/parm.
            () => {
                console.log("Loading...");
            }
        )
        .addCase(
            userAsync.fulfilled,
            (state, action) => {
                state.user = action.payload; 
            }
        )
        .addCase(
            userAsync.rejected,
            ()=>{
                console.log("Failed to get user data");
            }
        )
    },
});

// --- ACTION ---
// The value of the variables gotten from the 'reducer[action]' attr of slice.
export const { increment, decrement, reset, incrementSpec, decrementSpec } = CounterRTKSliceThunk.actions;

// ============================

// --- SELECTOR ---
// Same as redx before the use of toolkit, we gonna define the selector here.
// The selector will be referred to the attribute of the Counter -> {user, counter};
export const userSelector = (state) => state.counterRTKThunk.user;
export const counterSelector = (state) => state.counterRTKThunk.counter;


export default CounterRTKSliceThunk.reducer;

