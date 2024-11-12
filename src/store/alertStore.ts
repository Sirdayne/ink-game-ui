import { create } from 'zustand'

interface AlertState {
    alertValidation: boolean;
    openAlertValidation: () => void;
    closeAlertValidation: () => void;
}

export const useAlertStore = create<AlertState>()((set) => ({
    alertValidation: false,
    openAlertValidation: () => set(() => ({ alertValidation: true })),
    closeAlertValidation: () => set(() => ({ alertValidation: false })),
}))
