"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import CountUp from 'react-countup';

const Looting = () => {
    const [showbooty, setshowbooty] = useState(false);
    const intervalRef = useRef(null); // interval preserve
    const audioRef = useRef(new Audio("/fry.mp3")); // single audio object

    const [amount,setamount] = useState(0);

    const getmoneybybooty = () => {
        const newState = !showbooty;
        setshowbooty(newState);

        if (newState==true) {
            // Start music loop
            audioRef.current.currentTime = 0;
            audioRef.current.play();

            intervalRef.current = setInterval(() => {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
                setamount(prev=>prev+500);
            }, 1750);
        } else {
            // Stop music loop
            clearInterval(intervalRef.current);
        }
    }

    return (
        <div className=''>

            <div className='flex gap-10 items-center  '>

                <div>

                     <div className="flex flex-col items-center min-h-screen">

            <div style={{ width: "55vw", height: "60vh", position: "relative", marginTop: "80px" }}>
                {showbooty && (
                    <Image
                        src="/abc.gif"
                        alt="Animated GIF"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                )}
            </div>

            <button
                onClick={getmoneybybooty}
                style={{
                    marginTop: "40px",
                    padding: "14px 28px",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#fff",
                    background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
               Earn Money by Booty (Meteorology)
            </button>
        </div>

                </div>

              <div className='flex flex-col items-center  min-h-screen '>

                  {/* <div className=' w-[700px] h-[450px] '>
    <Image 
      src="/lll.gif" 
      alt="Bank Image" 
      width={300} 
      height={250} 
      className="object-cover"
    />

  </div> */}

  <section className='flex flex-col items-center mt-[140px]'>

        <p className='text-[42px] font-extrabold text-red-500 animate-bounce'>Respectable Lady's</p>

   <div className='text-[42px] font-bold text-[#820000]'>
      Bank Balance: ${" "}
      <CountUp start={amount - 500 < 0 ? 0 : amount - 500} end={amount} duration={1.75} />
    </div>
  <div className=' w-[500px] h-[300px] '>
    <Image 
      src="/bank.jpg" 
      alt="Bank Image" 
      width={600} 
      height={450} 
      className="object-cover"
    />

  </div>

  </section>



 


</div>

            </div>

              
            
        </div>
       
    );
};

export default Looting;