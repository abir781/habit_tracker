import React from 'react';
import Navbar from './Navbar';

const Banner = () => {
    return (
        <div className="bg-[url('/next.jpg')] min-h-screen bg-no-repeat bg-cover relative">

             <div className="absolute inset-0 bg-black/30"></div>

           

                <Navbar></Navbar>

             </div>

             

          
            
     
    );
};

export default Banner;