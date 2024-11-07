import { create } from 'zustand'

interface GameFieldState {
    left: boolean;
    right: boolean;
    setLeft: () => void;
    setRight: () => void;
}

export const useGameFieldStore = create<GameFieldState>()((set) => ({
    left: true,
    right: false,
    setLeft: () => set(() => ({ left: true, right: false })),
    setRight: () => set(() => ({ left: false, right: true })),
}))
