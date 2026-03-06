"use client"

import { Children, useEffect } from "react";

import { useAuth } from "./store/authstore";


import { useRouter } from "next/navigation";

const PrivateRoute = ({children}) => {
    const userzust = useAuth((state)=>state.user);
    const shouter = useRouter();

    useEffect(()=>{
        if(!userzust){
            shouter.push('/login')
        }
    },[userzust])

    return children;

  
};

export default PrivateRoute;