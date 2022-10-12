/* ZUSTAND
    Is an open-source state management lib using simplified flux principles.
    Flux is a Javascript architecture or pattern for UI which runs on a unidirectional data flow and has a centralized dispatcher. 
    It is useful when your project has dynamic data and you need to keep the data updated in an effective manner. 

    #https://blog.bitsrc.io/zustands-guide-to-simple-state-management-12c654c69990

    API based on hooks. Zustand uses an external store and provides some hooks to connect the external.
    Zustand is less boilerplate code than Redux.
*/

import create from "zustand"

// see. CounterSlice.js
// This "set" param replaces "state" in slice. Returns "state" and "action".

// This store is a hook that will be bound to your components.
export const useStore = create((set)=>({
    // init state
    counter: 1000,

    // action
    increment: () => set((state)=>({
        counter: state.counter + 1
    })),
    decrement: () => set((state)=>({
        counter: state.counter - 1
    })),
    reset: () => set((state)=>({
        counter: 0
    })),
    incrementByAmount: (amount) => set((state)=>({
        counter: state.counter + amount
    })),
    decrementByAmount: (amount) => set((state)=>({
        counter: state.counter - amount
    })),
}));


// Here we gonna declare selectors
// acessing the store state: { counter:1000, increment:.., decrement:.., ... }
export function selectCounter(state){return state.counter;}
export function selectIncrementAction(state){return state.increment;}
export function selectDecrementAction(state){return state.decrement;}
export function selectResetAction(state){return state.reset;}
export function selectIncrementByAmountAction(state){return state.incrementByAmount;}
export function selectDecrementByAmountAction(state){return state.decrementByAmount;}



