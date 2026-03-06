'use client'; 
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useHabit } from './store';
import { useAuth } from './store/authstore';

const Navbar = () => {
       const restoreAuth = useAuth((state) => state.restore);
    
      useEffect(() => {
        restoreAuth(); // safe: browser API used inside useEffect
      }, []);
    const lightzust = useHabit((state)=> state.light)
    const darkandlightmakerzust = useHabit((state)=> state.darkandlightmaker)
     const userzust = useAuth((state)=>state.user);
        const setlogoutzust = useAuth((state)=> state.setlogout);

    const makeinverse=()=>{
        darkandlightmakerzust();
        console.log(lightzust);
    }

     const handlelogout=()=>{

        setlogoutzust();

    }
    return (
        <div className='top-14 absolute left-1/2 -translate-x-1/2 px-12 py-4 bg-[#30BA8F]/20 rounded-xl '>

            <div className='font-bold text-white  flex gap-22 items-center   '>
                <div>

                      <Image 
            src="/logoprt11.png"  // logo path
            alt="Logo"
            width={42}
            height={42}
          />

                </div>
                <ul className='flex gap-14 justify-center items-center '>
                    <Link href="/">Home</Link>
                    <Link href="/Habits">Habits</Link>
                    <Link href="/progress">Progress</Link>
                    <Link href="/profile">Profile</Link>
                    
                    <Link href="/signup">Signup</Link>

                      {
                        userzust ? <button onClick={handlelogout}>Logout</button> : <Link href="/login">Login</Link>
                    }


                    {
                        lightzust ?  <FaToggleOff onClick={makeinverse} size={30} />: <FaToggleOn onClick={makeinverse} size={30} />
                    }
               
                

                   

                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;