import '../assets/styles/ui/SettingsSpoiler.scss';
import spoilerDown from '../assets/img/spoilerDown.svg';
import spoilerUp from '../assets/img/spoilerUp.svg';
import { useState } from 'react';

function SettingsSpoiler({title, icon, children}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <div className={opened ? "settings-spoiler settings-spoiler-active" : "settings-spoiler"} onClick={() => setOpened(!opened)}>
                <div className="settings-spoiler-text">
                    <img src={icon} alt="Rules icon"/>
                    <span>{title}</span>
                </div>
                {opened ? <img src={spoilerUp} alt="Spoiler icon"/> : <img src={spoilerDown} alt="Spoiler icon"/>}
            </div>
            {opened && <div>{children}</div>}
        </>
    )
}

export default SettingsSpoiler
