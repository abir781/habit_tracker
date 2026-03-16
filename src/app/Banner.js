"use client";
import React from 'react';
import Navbar from './Navbar';
import BlurIn from './Blurin';
import FadeInButton from './Fadeinbutton';
import { Archivo_Black } from 'next/font/google';
import { useAuth } from './store/authstore';
import { useHabit } from './store';


//   const bungee = Bungee({
//   subsets: ["latin"],
//   weight: ["400"],
// });

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
});


    

const Banner = () => {

  const userzust = useAuth((state)=>state.user);

    const tokenzust = useAuth((state)=>state.token);

    const pointzust = useHabit((state)=>state.point);

    console.log(userzust,tokenzust);


    return (
        <div className={`bg-[url('/next.jpg')] min-h-screen bg-no-repeat bg-cover relative ${archivo.className} tracking-wider`}>

             <div className="absolute inset-0 bg-black/20"></div>

           

                <Navbar></Navbar>

                <div className='flex justify-center'>

                  <p className='text-white '>{pointzust}</p>

                </div>

                


              

               

                        <div className='flex justify-center flex-col items-center min-h-screen '>

                          <BlurIn>

                                <p className='text-5xl mb-6 font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent'>
    Make Discipline Your Superpower.
  </p>
  <div className='max-w-[600px] text-center mb-6  mx-auto'>
  

         <p className='text-xl text-transform: uppercase font-bold text-cyan-200 '>
      Stay committed, track your streaks, and unlock your potential.
    </p>

   
   
  </div>
                            
                          </BlurIn>

                          <FadeInButton>

                                               


                          </FadeInButton>

                         

            
                         
 
 
</div>

                

          

   </div>

             

          
            
     
    );
};

export default Banner;