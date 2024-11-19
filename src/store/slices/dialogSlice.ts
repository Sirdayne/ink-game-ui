import { createSlice } from '@reduxjs/toolkit';

export interface DialogState {
    settings: boolean;
    maxBet: boolean;
}

const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        settings: false,
        maxBet: false
    },
    reducers: {
        openSettings: (state) => {
            state.settings = true;
        },
        closeSettings: (state) => {
            state.settings = false;
        },
        openMaxBet: (state) => {
            state.maxBet = true;
        },
        closeMaxBet: (state) => {
            state.maxBet = false;
        },
        toggleMaxBet: (state) => {
            state.maxBet = !state.maxBet;
        },
    },
});

export const { openSettings, closeSettings, openMaxBet, closeMaxBet, toggleMaxBet } = dialogSlice.actions;
export default dialogSlice.reducer;
