import { createSlice } from '@reduxjs/toolkit';

export interface BetState {
    balance: number;
    bet: number;
    step: number;
}

const betSlice = createSlice({
    name: 'bet',
    initialState: {
        balance: 10000,
        bet: 100,
        step: 1
    },
    reducers: {
        setBalance: (state, action) => {
            state.balance = action.payload;
        },
        setBet: (state, action) => {
            if (action.payload > 0) {
                state.bet = action.payload;
            } else {
                state.bet = 1
            }
        },
        increaseBet: (state) => {
            state.step += 1;
            const newBet = state.bet + state.step;
            state.bet = newBet <= state.balance ? newBet : state.balance;
        },
        decreaseBet: (state) => {
            state.step += 1;
            const newBet = state.bet - state.step;
            state.bet = newBet >= 1 ? newBet : 1;
        },
        setStep: (state, action) => {
            state.step = action.payload;
        },
    },
});

export const { setBalance, setBet, increaseBet, decreaseBet, setStep } = betSlice.actions;
export default betSlice.reducer;
