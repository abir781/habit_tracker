import { create } from "zustand";

export const useHabit= create((set)=>({
    light: false,
    darkandlightmaker: () => set((state) => ({ light: !state.light })),
}))