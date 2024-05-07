import { create } from "zustand";

export const useQueueStore = create((set) => ({
  activeQueueId: -100,
  setActiveQueueId: (id) => set({ activeQueueId: id }),
}));

export const useQueue = () => useQueueStore((state) => state);
