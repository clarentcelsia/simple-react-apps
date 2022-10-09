// Here we're going to use redux-toolkit.
// Redux-toolkit is a utility to simplify some usecases like store, reducers, and other logic.
// Best for combining redux-reducers.

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "../features/CounterSlice.js";
import CounterSliceThunk from "../features/CounterSliceThunk.js";

// RTK Query
import { ColorAPI } from "../services/ColorAPI.js";

export const AppStore = configureStore({
    reducer:{
        // import CounterRTKSlice.reducer 
        counterRTK: counterSlice,

        // other reducers..
        counterRTKThunk: CounterSliceThunk,

        // Action -> RTK Query
        // note. using [] cause js doesnt support dot usage in object as key
        [ColorAPI.reducerPath]: ColorAPI.reducer,
    },
    // For advance setup -> caching, invalidation, polling data (controlling device waits for an external device to check for its readiness or state).
    // ...
    middleware: (getDefaultMiddleware)=>{
        // Concatenating the created endpoint with default.
        return getDefaultMiddleware().concat(ColorAPI.middleware);
    },
});