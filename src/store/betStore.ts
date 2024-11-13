import { create } from 'zustand';

interface BetState {
    balance: number;
    setBalance: (bet: number) => void;
    bet: number;
    setBet: (bet: number) => void;
    increaseBet: () => void;
    decreaseBet: () => void;
    step: number;
    setStep: (step: number) => void;
}

export const useBetStore = create<BetState>()((set) => ({
    balance: 10000,
    setBalance: (balance: number) => set(() => ({ balance })),
    bet: 100,
    setBet: (bet: number) => set(() => ({ bet })),
    increaseBet: () => set((state) => {
        state.step++;
        if (state.bet + state.step < state.balance) {
            return { bet: state.bet + state.step };
        }
        if (state.bet + state.step > state.balance) {
            return { bet: state.balance };
        }
        return state;
    }),
    decreaseBet: () => set((state) => {
        state.step++;
        if (state.bet - state.step > 1) {
            return { bet: state.bet - state.step };
        }
        if (state.bet - state.step <= 1) {
            return { bet: 1 };
        }
        return state;
    }),
    step: 1,
    setStep: (step: number) => set(() => ({ step })),
}))
