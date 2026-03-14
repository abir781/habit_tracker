"use client"
import React, { useEffect } from 'react';
import { useAuth } from '../store/authstore';
import { useRouter } from 'next/navigation';
import AccessDenied from './announce/Accessdenied';

const Adminroute = ({children}) => {
    const router = useRouter();
     const userzust = useAuth((state)=>state.user);
 
    
 
     useEffect(()=>{
         if(userzust?.role !== 'admin'){
             router.push('/');
         }
     },[userzust,router])
     if(userzust?.role !== 'admin' ){
         return <AccessDenied></AccessDenied>
 
     }
     return children;
};

export default Adminroute;

// "use client"
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "../store/authstore";
// import AccessDenied from "./announce/Accessdenied";


// const Adminroute = ({ children }) => {
//     const router = useRouter();
//     const userzust = useAuth((state) => state.user);
//     const [showError, setShowError] = useState(false);

//     if (!userzust) return <div>Loading...</div>;

//     useEffect(() => {
//         if (userzust.role !== "admin") {
//             // Optional: redirect after few seconds, or just show error
//             setShowError(true);
//         }
//     }, [userzust]);

//     if (userzust.role !== "admin") return <AccessDenied></AccessDenied>;

//     return children;
// };

// export default Adminroute;