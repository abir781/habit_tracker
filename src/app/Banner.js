"use client";
import React from 'react';
import Navbar from './Navbar';
import BlurIn from './Blurin';
import FadeInButton from './Fadeinbutton';

const Banner = () => {
    
    return (
        <div className="bg-[url('/next.jpg')] min-h-screen bg-no-repeat bg-cover relative">

             <div className="absolute inset-0 bg-black/20"></div>

           

                <Navbar></Navbar>


              

               

                        <div className='flex justify-center flex-col items-center min-h-screen'>

                          <BlurIn>

                                <p className='text-5xl mb-4 font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent'>
    Make Discipline Your Superpower.
  </p>
  <div className='max-w-[600px] text-center mb-4'>
  

         <p className='text-xl text-transform: uppercase font-bold text-cyan-200'>
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