import {create} from "zustand";

export const useAuth = create((set)=>({
    user: null,
    token: null,

    setlogin: (userData,token) =>{

        localStorage.setItem("token",token);
        set({user: userData,token});

    },
        

    setlogout: ()=>{
        localStorage.removeItem("token");
        set({user: null, token: null});
    },
}));