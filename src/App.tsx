import './assets/styles/App.scss';
import Main from './components/Main.tsx';
import Settings from './components/Settings.tsx';
import Modal from './components/ModalMaxBet.tsx';
import AlertValidation from './ui/AlertValidation.tsx';
import { useSelector } from 'react-redux';
import { GlobalState } from './store';

function App() {
    const alertValidation = useSelector((state: GlobalState) => state.alertValidation.alertValidation);
    const dialogSettings = useSelector((state: GlobalState) => state.dialog.settings);
    const dialogMaxBet = useSelector((state: GlobalState) => state.dialog.maxBet);

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
