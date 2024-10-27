import './assets/styles/App.scss';
import Main from './components/Main.tsx';
import Settings from './components/Settings.tsx';
import { useState } from 'react';

function App() {
    const [openedSettings, setOpenedSettings] = useState(false);

    return (
    <div className="app">
        <Main setOpenedSettings={setOpenedSettings} />
        {openedSettings && <Settings setOpenedSettings={setOpenedSettings} />}
    </div>
    )
}

export default App
