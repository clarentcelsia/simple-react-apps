// Implement Immer

/* Immer
    is used to handle immutable state to be as if "mutable-like" based on copy-on-write mechanism (a technique to implement a copy operation using spread operator).
    3 states in immer:
        - Current State: Actual state data,
        - Draft : All the changes will be applied to this state,
        - Next : This state is produced based on the mutations to the draft state. 
*/

import axios from "axios";

import produce from "immer";
import create from "zustand";

const useColorStore = create((set)=>({
    colors:[],
    getColors: async () => {
        const response = await axios.get("https://reqres.in/api/colors");
        // set state
        set(produce((draft)=>{
            draft.colors = response.data.data;
        }));
    }
}));

export const selectColors = (state) => state.colors;
export const selectGetColors = (state) => state.getColors;

export default useColorStore;