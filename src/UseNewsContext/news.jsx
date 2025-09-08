import { create } from "zustand";


export const useNewsStore = create((set) => ({

  newses: [],

  addNews: (news) =>


    set((state) => ({
      newses: [...state.newses, news],

    })),



  removeNews: (id) =>


    set((state) => ({
      newses: state.newses.filter((u) => u.id !== id),

    })),



  updateNews: (updatedNews) =>

    set((state) => ({
        
      newses: state.newses.map((u) =>
        u.id === updatedNews.id ? updatedNews : u


      ),

    })),



}));
