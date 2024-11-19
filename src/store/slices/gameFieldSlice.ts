import { createSlice } from '@reduxjs/toolkit';

export interface GameFieldState {
    right: boolean;
}

const gameFieldSlice = createSlice({
    name: 'gameField',
    initialState: {
        right: false
    },
    reducers: {
        setLeft: (state) => {
            state.right = false;
        },
        setRight: (state) => {
            state.right = true;
        },
    },
});

export const { setLeft, setRight } = gameFieldSlice.actions;
export default gameFieldSlice.reducer;
