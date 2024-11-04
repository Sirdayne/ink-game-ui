import { create } from 'zustand'

interface DialogState {
    settings: boolean;
    maxBet: boolean;
    toggleSettings: () => void;
    openSettings: () => void;
    closeSettings: () => void;
    toggleMaxBet: () => void;
    openMaxBet: () => void;
    closeMaxBet: () => void;
}

export const useDialogStore = create<DialogState>()((set) => ({
    settings: false,
    maxBet: false,
    toggleSettings: () => set((state) => ({ settings: !state.settings })),
    openSettings: () => set(() => ({ settings: true })),
    closeSettings: () => set(() => ({ settings: false })),
    toggleMaxBet: () => set((state) => ({ maxBet: !state.maxBet })),
    openMaxBet: () => set(() => ({ maxBet: true })),
    closeMaxBet: () => set(() => ({ maxBet: false })),
}))
