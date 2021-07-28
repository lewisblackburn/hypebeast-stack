import create from "zustand";
import { combine } from "zustand/middleware";

export const useCurrentState = create(
  combine(
    {
      state: "initial" as string,
    },
    (set) => ({
      setCurrentState: (state: string) => set({ state }),
    })
  )
);
