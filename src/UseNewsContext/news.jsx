import { create } from "zustand";

export const useNewsStore = create((set) => ({
  newses: [],


  
  addNews: (news) =>
    set((state) => ({
      newses: [...state.newses, news],
    })),



  addBulkNews: (newsArray) =>
    set((state) => {
      const updatedNewses = [...state.newses];

      newsArray.forEach((newsItem) => {
        const index = updatedNewses.findIndex((n) => n.id === newsItem.id);

        if (index !== -1) {
          updatedNewses[index] = { ...updatedNewses[index], ...newsItem };
        } else {
          updatedNewses.push(newsItem);
        }
      });
      return { newses: updatedNewses };
    }),



  removeNews: (id) =>
    set((state) => ({
      newses: state.newses.filter((u) => u.id !== id),
    })),




}));

//updateNews: (updatedNews) => // set((state) => ({ // newses: state.newses.map((news) => // news.id === updatedNews.id ? { ...news, ...updatedNews } : news // ), // })),
