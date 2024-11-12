import { create } from 'zustand';

interface BetState {
    bet: number;
    setBet: (bet: number) => void;
    balance: number;
    setBalance: (bet: number) => void;
}

export const useBetStore = create<BetState>()((set) => ({
    bet: 100,
    setBet: (bet: number) => set(() => ({ bet })),
    balance: 10000,
    setBalance: (balance: number) => set(() => ({ balance })),
}))
