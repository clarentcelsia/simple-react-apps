// Loader 

import axios from "axios";
import produce from "immer";
import create from "zustand";

const useLoaderStore = create((set)=>({
    // this simple loader uses 3 states:
    // success, loading, error
    
    // init
    success: {},
    loading: false,
    error: null,

    fetchUserById: async (id) => {
        try {
            // loading state
            set(produce((draft)=>{
                draft.loading = true;
                console.log("loading...");
            }));

            const { data } = await axios.get(`https://reqres.in/api/users/${id}`);

            // set loading state false, and map the response
            set(produce((draft)=>{
                draft.loading = false;
                draft.success = data.data;
            }));
        } catch (error) {
            set(produce((draft)=>{
                draft.loading = false;
                draft.error = error;
            }));
        }
    },
}));

// selector
export const selectUser = (state) => state.success;
export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;
export const selectFetchUserById = (state) => state.fetchUserById;

export default useLoaderStore;