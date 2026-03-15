"use client"
import React, { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useAuth } from '../store/authstore';
import AccessDenied from '../admin/announce/Accessdenied';

const Godfatherroute = ({children}) => {
    const router = useRouter();
     const userzust = useAuth((state)=>state.user);
 
    
 
     useEffect(()=>{
         if(userzust?.role !== 'pocketowner'){
             router.push('/');
         }
     },[userzust,router])
     if(userzust?.role !== 'pocketowner' ){
         return <AccessDenied></AccessDenied>
 
     }
     return children;
};

export default Godfatherroute;
