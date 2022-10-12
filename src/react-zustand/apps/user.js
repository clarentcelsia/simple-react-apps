import create from "zustand";
import axios from "axios";

const useUserStore = create((set)=>({
    //init
    user: {},
    userById: async(id)=>{
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        set({user: response.data.data});
    }
}));

// accessing store's states
export const selectUser = (state) => state.user;
export const selectUserById = (state) => state.userById; 

export default useUserStore;