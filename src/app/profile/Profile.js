"use client"
import { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';

const Profile = () => {
  const [rate,setrate] = useState([]);
  const isAnimationActive = true;

  const habitData = {
    habitName: "Exercise",
    userEmail: "abirhasan@example.com",
    startDate: "2026-02-01",
    weeklyCompletion: [
      { week: 1, completion: 57 },
      { week: 2, completion: 100 },
      { week: 3, completion: 57 },
      { week: 4, completion: 59 },
      { week: 5, completion: 77 }
    ]
  };

  useEffect(()=>{
    setrate(habitData.weeklyCompletion);
  },[]);

  return (
    <div className='max-w-11/12 mx-auto mt-[100px]'>

      <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>

        {/* LineChart */}
        <section className='w-full lg:w-[600px] h-[400px]'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={rate}
              margin={{ top:20, right:20, bottom:5, left:0 }}
            >
              <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="completion" stroke="purple" strokeWidth={2} name="Completion %" isAnimationActive={true} />
              <XAxis dataKey="week" />
              <YAxis />
              <Legend align="right" />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* PieChart */}
        <section className='w-full lg:w-[400px] h-[400px]'>
          <ResponsiveContainer width="100%" height="100%">
             <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'orange',
        }}
        data={[
          { name: 'Page A', uv: 590 },
          { name: 'Page B', uv: 590 },
          { name: 'Page C', uv: 868 },
        ]}
        dataKey="uv"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip defaultIndex={2} />
     
    </PieChart>
          </ResponsiveContainer>
        </section>

      </div>

    </div>
  );
};

export default Profile;