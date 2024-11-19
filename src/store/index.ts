import { configureStore } from '@reduxjs/toolkit';
import gameFieldReducer, { GameFieldState } from './slices/gameFieldSlice';
import alertValidationSlice, { AlertValidationState } from './slices/alertValidationSlice';
import dialogSlice, { DialogState } from './slices/dialogSlice';
import betSlice, { BetState } from './slices/betSlice.ts';

export interface GlobalState {
  gameField: GameFieldState;
  alertValidation: AlertValidationState;
  dialog: DialogState;
  bet: BetState;
}

export const store = configureStore({
  reducer: {
    gameField: gameFieldReducer,
    alertValidation: alertValidationSlice,
    dialog: dialogSlice,
    bet: betSlice
  },
});

export default store;
