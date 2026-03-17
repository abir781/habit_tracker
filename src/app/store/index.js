import { create } from "zustand";

export const useHabit= create((set)=>({
    light: false,
    showmodal:false,
    point:0,
    setpoint: (val) => set({ point: val }),
    showmodalonmiddle:()=> set((state)=>({showmodal: !state.showmodal})),
    darkandlightmaker: () => set((state) => ({ light: !state.light })),
    category: "",
   
    setCategory: (newCat) => set({ category: newCat }),
}))