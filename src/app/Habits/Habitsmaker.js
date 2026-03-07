// "use client";
// import React, { useState } from 'react';
// import { useHabit } from '../store';
// import { toast } from 'react-toastify';

// const Habitsmaker = () => {
//      const lightzust = useHabit((state)=> state.light)
   
//     const setcategoryzust = useHabit((state)=> state.setCategory);

//     const [isActive, setIsActive] = useState(null);
//     // const categoryzust = useHabit((state)=> state.category);

//     const categories = [
//   "Health",
//   "Fitness",
//   "Study",
//   "Productivity",
//   "Mindfulness",
//   "Hobby"
// ];

// const redalert =(cat,index)=>{
//     setcategoryzust(cat);
//     setIsActive(index);
   
// }

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const habitname = e.target.habitname.value;
//   const frequency = e.target.frequency.value;
//   const category = useHabit.getState().category;

//   const newHabit = { habitname, category, frequency };
// try{

//     const res = await fetch('http://localhost:5000/habitscollection', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newHabit),
//   });

//      const data = await res.json();

//     if (res.ok) {
//       toast.success(data.message || "Habit saved successfully!");
//       e.target.reset();
//     } else {
//       toast.error(data.message || "Something went wrong!");
//     }

//     console.log('Saved habit:', data);


//   // POST request backend e


//   } catch (err) {
//     toast.error("Network error!");
//     console.error(err);
//   }
// };
//     return (
//       <div className={`min-h-screen rounded ${lightzust ? "bg-gradient-to-br from-[#f8fbff] via-[#eef6ff] to-[#e0f2fe] text-black" : "bg-gradient-to-br from-[#0b1419] via-[#13232d] to-[#1b3745] text-white"}`}>

//   <div className='flex justify-center items-center min-h-screen px-4'>

//     {/* Card Container */}
//     <div style={{
//       background: 'linear-gradient(160deg, #0f2a1e 0%, #0d1f1d 50%, #091518 100%)',
//       border: '1.5px solid rgba(21, 59, 56, 0.5)',
//       boxShadow: '0 0 60px rgba(21, 59, 56, 0.3), 0 0 20px rgba(14, 42, 42, 0.2)',
//       borderRadius: '24px',
//       padding: '40px 44px',
//       width: '100%',
//       maxWidth: '520px',
//     }}>

//       {/* Title */}
//       <h2 style={{
//         color: 'white',
//         fontSize: '20px',
//         fontWeight: '700',
//         letterSpacing: '0.06em',
//         marginBottom: '28px',
//         textAlign: 'center',
//         opacity: 0.9,
//       }}>
//         New Habit
//       </h2>

//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

//         {/* Input */}
//         <input
//           type="text"
//           placeholder="Habit name"
//           name='habitname'
//           required
//           style={{
//             background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
//             border: '1.5px solid rgba(21, 59, 56, 0.6)',
//             boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
//             borderRadius: '14px',
//             padding: '13px 18px',
//             color: 'white',
//             fontSize: '13px',
//             fontWeight: '600',
//             letterSpacing: '0.03em',
//             outline: 'none',
//             transition: 'all 0.25s ease',
//             width: '100%',
//           }}
//           onFocus={e => {
//             e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
//             e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
//             e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
//           }}
//           onBlur={e => {
//             e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
//             e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
//             e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
//           }}
//         />

//         {/* Category Label */}
//         <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '-8px' }}>
//           Category
//         </p>

//         {/* Category Buttons */}
//         <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
//           {categories.map((cat, index) => (
//             <button
//             type='button'
//             onClick={()=>redalert(cat,index)}
          
          
//               className={`relative rounded-full font-bold text-white `}
//               key={index}
//              style={{
//   width: '90px',
//   height: '90px',
//   fontSize: '12px',
//   border: '1.5px solid rgba(21, 59, 56, 0.6)',
//   boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
//   letterSpacing: '0.03em',
//   transition: 'all 0.25s ease',
//   cursor: 'pointer',
//   background: isActive === index
//     ? 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)'
//     : 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)'
// }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
//                 e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
//                 e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
//                 e.currentTarget.style.transform = 'scale(1.06)';
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
//                 e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
//                 e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Frequency Label + Select row */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//           <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//             Frequency
//           </p>
//           <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
//             <select
//               name='frequency'
//               style={{
//                 width: '100%',
//                 background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
//                 border: '1.5px solid rgba(21, 59, 56, 0.6)',
//                 boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
//                 borderRadius: '14px',
//                 padding: '13px 18px',
//                 color: 'white',
//                 fontSize: '13px',
//                 fontWeight: '600',
//                 letterSpacing: '0.03em',
//                 outline: 'none',
//                 transition: 'all 0.25s ease',
//                 cursor: 'pointer',
//                 appearance: 'none',
//                 WebkitAppearance: 'none',
//               }}
//               onFocus={e => {
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
//                 e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
//                 e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
//               }}
//               onBlur={e => {
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
//                 e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
//                 e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
//               }}
//             >
//               <option value="daily" style={{ background: '#153b38', color: 'white' }}>Daily</option>
//               <option value="weekly" style={{ background: '#153b38', color: 'white' }}>Weekly</option>
//             </select>
//             <span style={{
//               position: 'absolute',
//               right: '16px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               color: 'rgba(255,255,255,0.4)',
//               pointerEvents: 'none',
//               fontSize: '10px',
//             }}>▼</span>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
//             border: '1.5px solid rgba(21, 59, 56, 0.6)',
//             boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
//             borderRadius: '14px',
//             padding: '14px 28px',
//             color: 'white',
//             fontSize: '13px',
//             fontWeight: '700',
//             letterSpacing: '0.08em',
//             textTransform: 'uppercase',
//             outline: 'none',
//             cursor: 'pointer',
//             transition: 'all 0.25s ease',
//             marginTop: '4px',
//           }}
//           onMouseEnter={e => {
//             e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
//             e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
//             e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
//             e.currentTarget.style.transform = 'scale(1.02)';
//           }}
//           onMouseLeave={e => {
//             e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
//             e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
//             e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
//             e.currentTarget.style.transform = 'scale(1)';
//           }}
//           onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
//           onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
//         >
//           Add Habit
//         </button>

//       </form>
//     </div>
//   </div>
// </div>
//     );
// };

// export default Habitsmaker;


// "use client";
// import React, { useState } from 'react';
// import { useHabit } from '../store';
// import { toast } from 'react-toastify';

// const Habitsmaker = () => {
//      const lightzust = useHabit((state)=> state.light)
   
//     const setcategoryzust = useHabit((state)=> state.setCategory);

//     const [isActive, setIsActive] = useState(null);

//     const categories = [
//   "Health",
//   "Fitness",
//   "Study",
//   "Productivity",
//   "Mindfulness",
//   "Hobby"
// ];

// const redalert =(cat,index)=>{
//     setcategoryzust(cat);
//     setIsActive(index);
// }

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const habitname = e.target.habitname.value;
//   const frequency = e.target.frequency.value;
//   const category = useHabit.getState().category;

//   const newHabit = { habitname, category, frequency };
// try{

//     const res = await fetch('http://localhost:5000/habitscollection', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newHabit),
//   });

//      const data = await res.json();

//     if (res.ok) {
//       toast.success(data.message || "Habit saved successfully!");
//       e.target.reset();
//       setIsActive(null);
//     } else {
//       toast.error(data.message || "Something went wrong!");
//     }

//     console.log('Saved habit:', data);

//   } catch (err) {
//     toast.error("Network error!");
//     console.error(err);
//   }
// };
//     return (
//       <div className={`min-h-screen rounded ${lightzust ? "bg-gradient-to-br from-[#f8fbff] via-[#eef6ff] to-[#e0f2fe] text-black" : "bg-gradient-to-br from-[#0b1419] via-[#13232d] to-[#1b3745] text-white"}`}>

//   <div className='flex justify-center items-center min-h-screen px-4'>

//     <div style={{
//       background: 'linear-gradient(160deg, #0f2a1e 0%, #0d1f1d 50%, #091518 100%)',
//       border: '1.5px solid rgba(21, 59, 56, 0.5)',
//       boxShadow: '0 0 60px rgba(21, 59, 56, 0.3), 0 0 20px rgba(14, 42, 42, 0.2)',
//       borderRadius: '24px',
//       padding: '40px 44px',
//       width: '100%',
//       maxWidth: '520px',
//     }}>

//       <h2 style={{
//         color: 'white',
//         fontSize: '20px',
//         fontWeight: '700',
//         letterSpacing: '0.06em',
//         marginBottom: '28px',
//         textAlign: 'center',
//         opacity: 0.9,
//       }}>
//         New Habit
//       </h2>

//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

//         <input
//           type="text"
//           placeholder="Habit name"
//           name='habitname'
//           required
//           style={{
//             background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
//             border: '1.5px solid rgba(21, 59, 56, 0.6)',
//             boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
//             borderRadius: '14px',
//             padding: '13px 18px',
//             color: 'white',
//             fontSize: '13px',
//             fontWeight: '600',
//             letterSpacing: '0.03em',
//             outline: 'none',
//             transition: 'all 0.25s ease',
//             width: '100%',
//           }}
//           onFocus={e => {
//             e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
//             e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
//             e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
//           }}
//           onBlur={e => {
//             e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
//             e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
//             e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
//           }}
//         />

//         <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '-8px' }}>
//           Category
//         </p>

//         <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
//           {categories.map((cat, index) => (
//             <button
//               type='button'
//               onClick={() => redalert(cat, index)}
//               className={`relative rounded-full font-bold text-white`}
//               key={index}
//               style={{
//                 width: '90px',
//                 height: '90px',
//                 fontSize: '12px',
//                 letterSpacing: '0.03em',
//                 transition: 'all 0.25s ease',
//                 cursor: 'pointer',
//                 // ✅ Active state React দিয়ে control হচ্ছে
//                 background: isActive === index
//                   ? 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)'
//                   : 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
//                 border: isActive === index
//                   ? '1.5px solid rgba(30, 74, 46, 0.9)'
//                   : '1.5px solid rgba(21, 59, 56, 0.6)',
//                 boxShadow: isActive === index
//                   ? '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)'
//                   : '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
//               }}
//               onMouseEnter={e => {
//                 // ✅ Active button এ hover effect আলাদা করার দরকার নেই
//                 if (isActive === index) return;
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
//                 e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
//                 e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
//                 e.currentTarget.style.transform = 'scale(1.06)';
//               }}
//               onMouseLeave={e => {
//                 // ✅ Active button হলে reset করবে না
//                 if (isActive === index) return;
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
//                 e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
//                 e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//           <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//             Frequency
//           </p>
//           <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
//             <select
//               name='frequency'
//               style={{
//                 width: '100%',
//                 background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
//                 border: '1.5px solid rgba(21, 59, 56, 0.6)',
//                 boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
//                 borderRadius: '14px',
//                 padding: '13px 18px',
//                 color: 'white',
//                 fontSize: '13px',
//                 fontWeight: '600',
//                 letterSpacing: '0.03em',
//                 outline: 'none',
//                 transition: 'all 0.25s ease',
//                 cursor: 'pointer',
//                 appearance: 'none',
//                 WebkitAppearance: 'none',
//               }}
//               onFocus={e => {
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
//                 e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
//                 e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
//               }}
//               onBlur={e => {
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
//                 e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
//                 e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
//               }}
//             >
//               <option value="daily" style={{ background: '#153b38', color: 'white' }}>Daily</option>
//               <option value="weekly" style={{ background: '#153b38', color: 'white' }}>Weekly</option>
//             </select>
//             <span style={{
//               position: 'absolute',
//               right: '16px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               color: 'rgba(255,255,255,0.4)',
//               pointerEvents: 'none',
//               fontSize: '10px',
//             }}>▼</span>
//           </div>
//         </div>

//         <button
//           type="submit"
//           style={{
//             background: 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
//             border: '1.5px solid rgba(21, 59, 56, 0.6)',
//             boxShadow: '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
//             borderRadius: '14px',
//             padding: '14px 28px',
//             color: 'white',
//             fontSize: '13px',
//             fontWeight: '700',
//             letterSpacing: '0.08em',
//             textTransform: 'uppercase',
//             outline: 'none',
//             cursor: 'pointer',
//             transition: 'all 0.25s ease',
//             marginTop: '4px',
//           }}
//           onMouseEnter={e => {
//             e.currentTarget.style.background = 'linear-gradient(135deg, #25603c 0%, #1a4d44 50%, #122f2f 100%)';
//             e.currentTarget.style.border = '1.5px solid rgba(30, 74, 46, 0.9)';
//             e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 59, 56, 0.7), 0 0 12px rgba(30, 74, 46, 0.5), inset 0 1px 0 rgba(255,255,255,0.10)';
//             e.currentTarget.style.transform = 'scale(1.02)';
//           }}
//           onMouseLeave={e => {
//             e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
//             e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
//             e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
//             e.currentTarget.style.transform = 'scale(1)';
//           }}
//           onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
//           onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
//         >
//           Add Habit
//         </button>

//       </form>
//     </div>
//   </div>
// </div>
//     );
// };

// export default Habitsmaker;


"use client";
import React, { useEffect, useState } from 'react';
import { useHabit } from '../store';
import { toast } from 'react-toastify';
import { useAuth } from '../store/authstore';

const Habitsmaker = () => {

   const restoreAuth = useAuth((state) => state.restore);

   const [datas,setdatas] = useState([]);



      
        useEffect(() => {
          restoreAuth(); // safe: browser API used inside useEffect
        }, []);

  const showmodalzust = useHabit((state)=>state.showmodal);
  const showmodalonmiddlezust = useHabit((state)=>state.showmodalonmiddle);
        
  const lightzust = useHabit((state) => state.light);
  const setcategoryzust = useHabit((state) => state.setCategory);
  const [isActive, setIsActive] = useState(null);
      const userzust = useAuth((state)=>state.user);
      const useremail= userzust?.email;

useEffect(() => {

  if(!useremail) return;
  console.log(useremail);

  fetch(`http://localhost:5000/habitscollection?email=${useremail}`)
    .then(res => res.json())
    .then(data => setdatas(data))

}, [useremail])

const modalworking =()=>{
  showmodalonmiddlezust();
}


      // useEffect(()=>{
      //   fetch('localhos')
      // })

   

      // console.log(userzust?.email);


  const categories = [
    { name: "Health", color: "#e74c3c", glow: "rgba(231, 76, 60, 0.6)" },
    { name: "Fitness", color: "#e67e22", glow: "rgba(230, 126, 34, 0.6)" },
    { name: "Study", color: "#3498db", glow: "rgba(52, 152, 219, 0.6)" },
    { name: "Productivity", color: "#9b59b6", glow: "rgba(155, 89, 182, 0.6)" },
    { name: "Mindfulness", color: "#1abc9c", glow: "rgba(26, 188, 156, 0.6)" },
    { name: "Hobby", color: "#f1c40f", glow: "rgba(241, 196, 15, 0.6)" },
  ];

  const redalert = (catName, index) => {
    setcategoryzust(catName);
    setIsActive(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const habitname = e.target.habitname.value;
    const frequency = e.target.frequency.value;
    const category = useHabit.getState().category;

    const newHabit = { habitname, category, frequency, useremail };

    try {
      const res = await fetch('http://localhost:5000/habitscollection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newHabit),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Habit saved successfully!");
        e.target.reset();
        setIsActive(null);
      } else {
        toast.error(data.message || "Something went wrong!");
      }

      console.log('Saved habit:', data);

    } catch (err) {
      toast.error("Network error!");
      console.error(err);
    }
  };

  return (
    <div className={`min-h-screen rounded ${lightzust ? "bg-gradient-to-br from-[#f8fbff] via-[#eef6ff] to-[#e0f2fe] text-black" : "bg-gradient-to-br from-[#0b1419] via-[#13232d] to-[#1b3745] text-white"}`}>

       <div className="   px-4 py-8   min-h-screen">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1800px] mx-auto mt-[140px]">
  {datas.map((habit) => (
    <div
      key={habit._id}
      style={{
        background: 'linear-gradient(160deg, #0f2a1e 0%, #0d1f1d 50%, #091518 100%)',
        border: '1.5px solid rgba(21, 59, 56, 0.5)',
        boxShadow: '0 0 60px rgba(21, 59, 56, 0.3), 0 0 20px rgba(14, 42, 42, 0.2)',
        borderRadius: '24px',
        padding: '36px 36px',
        width: '100%',
        minHeight: '260px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'linear-gradient(160deg, #1a4a30 0%, #153b38 50%, #0e2a2a 100%)';
        e.currentTarget.style.border = '1.5px solid rgba(30, 100, 80, 0.9)';
        e.currentTarget.style.boxShadow = '0 0 80px rgba(21, 120, 80, 0.5), 0 0 40px rgba(14, 80, 60, 0.4), 0 8px 32px rgba(0,0,0,0.4)';
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'linear-gradient(160deg, #0f2a1e 0%, #0d1f1d 50%, #091518 100%)';
        e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.5)';
        e.currentTarget.style.boxShadow = '0 0 60px rgba(21, 59, 56, 0.3), 0 0 20px rgba(14, 42, 42, 0.2)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      <h3
        style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: '800',
          letterSpacing: '0.04em',
          marginBottom: '16px',
          textAlign: 'left',
          opacity: 0.95,
        }}
      >
        {habit.habitname}
      </h3>

      <p
        style={{
          color: 'rgba(255,255,255,0.75)',
          fontSize: '16px',
          fontWeight: '700',
          marginBottom: '10px',
          textAlign: 'left',
        }}
      >
        Category: {habit.category}
      </p>

      <p
        style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: '15px',
          fontWeight: '600',
          textAlign: 'left',
        }}
      >
        Frequency: {habit.frequency}
      </p>
    </div>
  ))}
</div>

<button
onClick={modalworking}
className='block mx-auto mt-7'
  style={{
    background: 'linear-gradient(160deg, #0f2a1e 0%, #0d1f1d 50%, #091518 100%)',
    border: '1.5px solid rgba(21, 59, 56, 0.5)',
    boxShadow: '0 0 60px rgba(21, 59, 56, 0.3), 0 0 20px rgba(14, 42, 42, 0.2)',
    borderRadius: '24px',
    padding: '16px 40px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.background = 'linear-gradient(160deg, #1a4a30 0%, #153b38 50%, #0e2a2a 100%)';
    e.currentTarget.style.border = '1.5px solid rgba(30, 100, 80, 0.9)';
    e.currentTarget.style.boxShadow = '0 0 80px rgba(21, 120, 80, 0.5), 0 0 40px rgba(14, 80, 60, 0.4), 0 8px 32px rgba(0,0,0,0.4)';
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = 'linear-gradient(160deg, #0f2a1e 0%, #0d1f1d 50%, #091518 100%)';
    e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.5)';
    e.currentTarget.style.boxShadow = '0 0 60px rgba(21, 59, 56, 0.3), 0 0 20px rgba(14, 42, 42, 0.2)';
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
  }}
  onMouseDown={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(0.98)'; }}
  onMouseUp={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'; }}
>
  Click to Add Habit
</button>
    </div>


    <div className={`fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur ${showmodalzust ? 'block':'hidden'}`}>

    <div onClick={modalworking} className='absolute top-4 right-4 cursor-pointer'>
      <p className='font-bold text-white text-2xl'>X</p>
    </div>

          <div className='flex justify-center items-center min-h-screen px-4 '>

        <div style={{
          background: 'linear-gradient(160deg, #0f2a1e 0%, #0d1f1d 50%, #091518 100%)',
          border: '1.5px solid rgba(21, 59, 56, 0.5)',
          boxShadow: '0 0 60px rgba(21, 59, 56, 0.3), 0 0 20px rgba(14, 42, 42, 0.2)',
          borderRadius: '24px',
          padding: '40px 44px',
          width: '100%',
          maxWidth: '520px',
        }}>

          <h2 style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: '700',
            letterSpacing: '0.06em',
            marginBottom: '28px',
            textAlign: 'center',
            opacity: 0.9,
          }}>
            New Habit
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <input
              type="text"
              placeholder="Habit name"
              name='habitname'
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

            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '-8px' }}>
              Category
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map((cat, index) => (
                <button
                  type='button'
                  onClick={() => redalert(cat.name, index)}
                  className='relative rounded-full font-bold text-white'
                  key={index}
                  style={{
                    width: '90px',
                    height: '90px',
                    fontSize: '12px',
                    letterSpacing: '0.03em',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                    background: isActive === index
                      ? `linear-gradient(135deg, ${cat.color}cc 0%, ${cat.color}99 100%)`
                      : 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)',
                    border: isActive === index
                      ? `2px solid ${cat.color}`
                      : '1.5px solid rgba(21, 59, 56, 0.6)',
                    boxShadow: isActive === index
                      ? `0 0 30px ${cat.glow}, 0 0 12px ${cat.glow}, inset 0 1px 0 rgba(255,255,255,0.15)`
                      : '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
                    transform: isActive === index ? 'scale(1.08)' : 'scale(1)',
                  }}
                  onMouseEnter={e => {
                    if (isActive === index) return;
                    e.currentTarget.style.background = `linear-gradient(135deg, ${cat.color}55 0%, ${cat.color}33 100%)`;
                    e.currentTarget.style.border = `1.5px solid ${cat.color}99`;
                    e.currentTarget.style.boxShadow = `0 0 24px ${cat.glow}, 0 0 8px ${cat.glow}`;
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={e => {
                    if (isActive === index) return;
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1e4a2e 0%, #153b38 50%, #0e2a2a 100%)';
                    e.currentTarget.style.border = '1.5px solid rgba(21, 59, 56, 0.6)';
                    e.currentTarget.style.boxShadow = '0 0 18px rgba(21, 59, 56, 0.4), 0 0 6px rgba(30, 74, 46, 0.3), inset 0 1px 0 rgba(255,255,255,0.07)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Frequency
              </p>
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <select
                  name='frequency'
                  style={{
                    width: '100%',
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
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
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
                >
                  <option value="daily" style={{ background: '#153b38', color: 'white' }}>Daily</option>
                  <option value="weekly" style={{ background: '#153b38', color: 'white' }}>Weekly</option>
                </select>
                <span style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(255,255,255,0.4)',
                  pointerEvents: 'none',
                  fontSize: '10px',
                }}>▼</span>
              </div>
            </div>

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
              Add Habit
            </button>

          </form>
        </div>
      </div>

    </div>

     
    </div>
  );
};

export default Habitsmaker;