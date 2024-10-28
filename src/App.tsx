import './assets/styles/App.scss';
import Main from './components/Main.tsx';
import Settings from './components/Settings.tsx';
import { useState } from 'react';
import Modal from './ui/Modal.tsx';

function App() {
    const [openedSettings, setOpenedSettings] = useState(false);
    const [openedMaxBet, setOpenedMaxBet] = useState(true);

    return (
    <div className="app">
        <Main setOpenedSettings={setOpenedSettings} setOpenedModal={setOpenedMaxBet} />
        {openedSettings && <Settings setOpenedSettings={setOpenedSettings} />}
        {openedMaxBet && <Modal setOpenedModal={setOpenedMaxBet} />}
    </div>
    )
}

export default App
