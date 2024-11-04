import { create } from 'zustand'

interface GameFieldState {
    left: boolean;
    right: boolean;
}

export const useGameFieldStore = create<GameFieldState>()((set) => ({
    left: true,
    right: false,
    setLeft: () => set((state) => ({ left: true, right: false })),
    setRight: () => set(() => ({ left: false, right: true })),
}))
