import { create } from "zustand";

type DropdownProps = {
  showValue: number;
  setShow10: () => void;
  setShow30: () => void;
  setShow50: () => void;
};

export const DropdownState = create<DropdownProps>((set) => ({
  showValue: 10,
  setShow10: () => set((state) => ({ showValue: (state.showValue = 10) })),
  setShow30: () => set((state) => ({ showValue: (state.showValue = 30) })),
  setShow50: () => set((state) => ({ showValue: (state.showValue = 50) })),
}));
