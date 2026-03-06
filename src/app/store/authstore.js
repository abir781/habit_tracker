import { create } from "zustand";

export const useAuth = create((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  // Login function
  setlogin: async (userData, token) => {
    try {
      set({ loading: true, error: null });

      // Save token and user in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      set({ user: userData, token, loading: false, error: null });
    } catch (err) {
      set({ error: err.message, user: null, token: null, loading: false });
    }
  },

  // Logout function
  setlogout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null, loading: false, error: null });
  },

  // Restore function → call on app mount or layout
  restore: () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      set({ token, user: JSON.parse(user) });
    }
  },
}));