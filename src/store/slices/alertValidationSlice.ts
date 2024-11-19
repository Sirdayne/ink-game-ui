import { createSlice } from '@reduxjs/toolkit';

export interface AlertValidationState {
    alertValidation: boolean;
}

const alertValidationSlice = createSlice({
    name: 'alertValidation',
    initialState: {
        alertValidation: false
    },
    reducers: {
        openAlertValidation: (state) => {
            state.alertValidation = true;
        },
        closeAlertValidation: (state) => {
            state.alertValidation = false;
        },
    },
});

export const { openAlertValidation, closeAlertValidation } = alertValidationSlice.actions;
export default alertValidationSlice.reducer;
