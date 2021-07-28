import create from "zustand";
import { combine } from "zustand/middleware";

export const useCurrentState = create(
  combine(
    {
      state: 0,
    },
    (set) => ({
      setCurrentState: (state: number) => set({ state }),
    })
  )
);
