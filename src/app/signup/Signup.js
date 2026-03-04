"use client";
import React from 'react';
import { useHabit } from '../store';

const Signup = () => {
     const lightzust = useHabit((state)=> state.light)
   
    const setcategoryzust = useHabit((state)=> state.setCategory);
    // const categoryzust = useHabit((state)=> state.category);

    const categories = [
  "Health",
  "Fitness",
  "Study",
  "Productivity",
  "Mindfulness",
  "Hobby"
];

  const handleSubmit = async (e) => {
  e.preventDefault();

  const habitname = e.target.habitname.value;
  const frequency = e.target.frequency.value;
  const category = useHabit.getState().category;

  const newHabit = { habitname, category, frequency };

  // POST request backend e
  const res = await fetch('http://localhost:5000/habitscollection', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newHabit),
  });

  const data = await res.json();
  console.log('Saved habit:', data);
};
    return (
      <div className={`min-h-screen rounded ${lightzust ? "bg-gradient-to-br from-[#f8fbff] via-[#eef6ff] to-[#e0f2fe] text-black" : "bg-gradient-to-br from-[#0b1419] via-[#13232d] to-[#1b3745] text-white"}`}>

  <div className='flex justify-center items-center min-h-screen px-4'>

    {/* Card Container */}
    <div style={{
      background: 'linear-gradient(160deg, #0f2a1e 0%, #0d1f1d 50%, #091518 100%)',
      border: '1.5px solid rgba(21, 59, 56, 0.5)',
      boxShadow: '0 0 60px rgba(21, 59, 56, 0.3), 0 0 20px rgba(14, 42, 42, 0.2)',
      borderRadius: '24px',
      padding: '40px 44px',
      width: '100%',
      maxWidth: '520px',
    }}>

      {/* Title */}
      <h2 style={{
        color: 'white',
        fontSize: '20px',
        fontWeight: '700',
        letterSpacing: '0.06em',
        marginBottom: '28px',
        textAlign: 'center',
        opacity: 0.9,
      }}>
        Sign Up
      </h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Input */}
        <input
          type="text"
          placeholder="Your Name"
          name='name'
          required
          style={{
            background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
            border: '1.5px solid rgba(21, 59, 56, 0.6)',
            boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
            borderRadius: '14px',
            padding: '13px 18px',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.03em',
            outline: 'none',
            transition: 'all 0.25s ease',
            width: '100%',
          }}
          onFocus={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
          }}
          onBlur={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
            e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
          }}
        />

        {/* Category Label */}
        {/* <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '-8px' }}>
          Category
        </p> */}

        {/* Category Buttons */}
    <input
          type="text"
          placeholder="Your Name"
          name='name'
          required
          style={{
            background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
            border: '1.5px solid rgba(21, 59, 56, 0.6)',
            boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
            borderRadius: '14px',
            padding: '13px 18px',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.03em',
            outline: 'none',
            transition: 'all 0.25s ease',
            width: '100%',
          }}
          onFocus={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
          }}
          onBlur={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
            e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
          }}
        />

        {/* Frequency Label + Select row */}
          <input
          type="text"
          placeholder="Your Name"
          name='name'
          required
          style={{
            background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
            border: '1.5px solid rgba(21, 59, 56, 0.6)',
            boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
            borderRadius: '14px',
            padding: '13px 18px',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.03em',
            outline: 'none',
            transition: 'all 0.25s ease',
            width: '100%',
          }}
          onFocus={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
          }}
          onBlur={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
            e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
          }}
        />


          <input
          type="text"
          placeholder="Your Name"
          name='name'
          required
          style={{
            background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
            border: '1.5px solid rgba(21, 59, 56, 0.6)',
            boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
            borderRadius: '14px',
            padding: '13px 18px',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.03em',
            outline: 'none',
            transition: 'all 0.25s ease',
            width: '100%',
          }}
          onFocus={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
          }}
          onBlur={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
            e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
          }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
            border: '1.5px solid rgba(21, 59, 56, 0.6)',
            boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
            borderRadius: '14px',
            padding: '14px 28px',
            color: 'white',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            outline: 'none',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            marginTop: '4px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
            e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
            e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
          onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
        >
          Crete Your Habittracker Account
        </button>

      </form>
    </div>
  </div>
</div>
    );
};

export default Signup;