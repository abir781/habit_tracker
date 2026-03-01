
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
                <ul className='flex gap-14 justify-center '>
                    <Link href="/">Home</Link>
                    <Link href="/habits">Habits</Link>
                    <Link href="/progress">Progress</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/signin">Signin</Link>
                    

                   

                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;