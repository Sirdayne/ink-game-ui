import './assets/styles/App.scss';
import Main from './components/Main.tsx';
import Settings from './components/Settings.tsx';
import Modal from './ui/Modal.tsx';
import { useDialogStore } from './store/dialogStore.ts';

function App() {
    const  { settings: dialogSettings, maxBet: dialogMaxBet } = useDialogStore();

    return (
    <div className="app">
        <Main />
        {dialogSettings && <Settings />}
        {dialogMaxBet && <Modal />}
    </div>
    )
}

export default App
