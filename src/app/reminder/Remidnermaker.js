"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/authstore';
import { useRouter } from 'next/navigation';

const Remidnermaker = () => {

    const [timenow, settimenow] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [runner, setrunner] = useState(0);

    
   
    const restoreAuth = useAuth((state) => state.restore);

    const [datas, setdatas] = useState([]);

    const router = useRouter();

     useEffect(() => {
              restoreAuth(); // safe: browser API used inside useEffect
            }, []);


            const userzust = useAuth((state)=>state.user);
             const useremail = userzust?.email;
    

    let today = new Date();

    // Update current time and show notification
    useEffect(()=>{
       calculate();
    },[useremail])

    const calculate =()=>{

       const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');   // 0–23
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timeString = `${hours}:${minutes}`
        settimenow(timeString);

        if(hours > 8 && hours < 12){
            setShowNotification(true);
            // 10 seconds later hide
            setTimeout(() => setShowNotification(false), 10000);
            // refecth();
        }

    }

    // Fetch user habits
    useEffect(() => {
        if(!useremail) return;
        fetch(`http://localhost:5000/habitscollection?email=${useremail}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setdatas(data);
        });
    }, [useremail])

    const makeithappen =()=>{

      calculate();
    
     
    }

    // const refecth =(useremail)=>{

    //       fetch(`http://localhost:5000/habitscollection?email=${useremail}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setdatas(data);
    //     });

    // }
    
    return (
        <div>
            {showNotification && (
                <div className="fixed inset-0 flex items-center justify-center z-50" style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(8px)",
                }}>
                    <style>{`
                        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

                        @keyframes slideUp {
                            from { opacity: 0; transform: translateY(40px) scale(0.95); }
                            to { opacity: 1; transform: translateY(0) scale(1); }
                        }
                        @keyframes pulse-ring {
                            0% { transform: scale(0.8); opacity: 1; }
                            100% { transform: scale(1.6); opacity: 0; }
                        }
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-6px); }
                        }
                        @keyframes shimmer {
                            0% { background-position: -200% center; }
                            100% { background-position: 200% center; }
                        }
                        .habit-card {
                            font-family: 'DM Sans', sans-serif;
                            background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
                            border: 1px solid rgba(255,200,60,0.25);
                            border-radius: 28px;
                            padding: 60px 50px 50px; /* increased height */
                            width: 450px; /* increased width */
                            max-width: 90%; /* responsive */
                            position: relative;
                            overflow: hidden;
                            animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                            box-shadow: 0 0 0 1px rgba(255,220,100,0.2), 0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(255,180,50,0.15);
                        }
                        .habit-icon-wrap {
                            position: relative;
                            animation: float 3s ease-in-out infinite;
                        }
                        .habit-icon-wrap::before {
                            content: '';
                            position: absolute;
                            inset: -4px;
                            border-radius: 50%;
                            background: rgba(255,200,60,0.4);
                            animation: pulse-ring 1.5s ease-out infinite;
                        }
                        .habit-shimmer {
                            background: linear-gradient(90deg, #ffd700, #fff8dc, #ffb347, #fff8dc, #ffd700);
                            background-size: 200% auto;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: shimmer 3s linear infinite;
                            font-family: 'Playfair Display', serif;
                            font-size: 26px;
                            text-align: center;
                            margin: 0 0 10px;
                        }
                        .habit-done-btn:hover {
                            transform: scale(1.02);
                            box-shadow: 0 6px 24px rgba(255,140,0,0.5) !important;
                        }
                        .habit-snooze-btn:hover {
                            background: rgba(255,255,255,0.1) !important;
                        }
                    `}</style>

                    <div className="habit-card">
                        {/* Background decoration */}
                        <div style={{
                            position: "absolute", top: "-40px", right: "-40px",
                            width: "180px", height: "180px",
                            background: "radial-gradient(circle, rgba(255,180,50,0.12) 0%, transparent 70%)",
                            borderRadius: "50%", pointerEvents: "none"
                        }} />
                        <div style={{
                            position: "absolute", bottom: "-60px", left: "-30px",
                            width: "160px", height: "160px",
                            background: "radial-gradient(circle, rgba(100,150,255,0.08) 0%, transparent 70%)",
                            borderRadius: "50%", pointerEvents: "none"
                        }} />

                        {/* Icon */}
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                            <div className="habit-icon-wrap">
                                <div style={{
                                    width: "64px", height: "64px",
                                    background: "linear-gradient(135deg, #ffd700, #ff8c00)",
                                    borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "28px",
                                    boxShadow: "0 8px 24px rgba(255,160,30,0.4)"
                                }}>⏰</div>
                            </div>
                        </div>

                        {/* Label */}
                        <div style={{
                            textAlign: "center", marginBottom: "6px",
                            fontSize: "11px", fontWeight: "500",
                            letterSpacing: "3px", textTransform: "uppercase",
                            color: "rgba(255,200,60,0.7)"
                        }}>Daily Reminder</div>

                        {/* Title */}
                        <h2 className="habit-shimmer">Time for your habit!</h2>

                        {/* Habits list */}
                        {datas.map((singledata, index) => {
                            const todayString = new Date().toISOString().split('T')[0];
                            const isCompletedToday = singledata.completedDates?.includes(todayString);

                            return (
                                <div key={index}>
                                    {isCompletedToday==false && (
                                        <div>
                                            <p className='text-white'>{singledata.habitname} need to complete</p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}

                        {/* Subtitle */}
                        <p style={{
                            color: "rgba(200,210,240,0.7)",
                            textAlign: "center", fontSize: "14px",
                            fontWeight: "300", lineHeight: 1.6,
                            margin: "0 0 24px",
                        }}>
                            Small steps lead to big changes. <br />You've got this! 🌟
                        </p>
                    </div>

                    
                </div>
            )}
            <div className='min-h-screen flex justify-center items-center'>
              <button
  onClick={makeithappen}
  style={{
    padding: "12px 28px",
    background: "linear-gradient(135deg, #FFD700, #FF8C00)",
    color: "white",
    fontWeight: "600",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(255,160,30,0.4)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={e => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 12px 36px rgba(255,140,0,0.5)";
  }}
  onMouseLeave={e => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 8px 24px rgba(255,160,30,0.4)";
  }}
>
   show me to complete the habit
</button>

<button onClick={() => router.push('/')}>Back to Home</button>

            </div>
           
        </div>
    );
};

export default Remidnermaker;