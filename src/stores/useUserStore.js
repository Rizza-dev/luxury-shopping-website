import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  users : [],
  loading : false,
  checkingAuth : false,
  
  setUser: () => {},
}));
