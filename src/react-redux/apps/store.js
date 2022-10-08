// Here we're going to use redux-toolkit.
// Redux-toolkit is a utility to simplify some usecases like store, reducers, and other logic.
// Best for combining redux-reducers.

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/CounterSlice.js";

export const AppStore = configureStore({
    reducer:{
        // import CounterRTKSlice.reducer 
        counterRTK: counterSlice,

        // other reducers..
    },
});