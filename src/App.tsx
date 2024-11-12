import './assets/styles/App.scss';
import Main from './components/Main.tsx';
import Settings from './components/Settings.tsx';
import Modal from './components/ModalMaxBet.tsx';
import { useDialogStore } from './store/dialogStore.ts';
import AlertValidation from './ui/AlertValidation.tsx';
import { useAlertStore } from './store/alertStore.ts';

function App() {
    const { settings: dialogSettings, maxBet: dialogMaxBet } = useDialogStore();
    const { alertValidation } = useAlertStore();

    return (
    <div className="app">
        <Main />
        {dialogSettings && <Settings />}
        {dialogMaxBet && <Modal />}
        {alertValidation && <AlertValidation />}
    </div>
    )
}

export default App
