import '../assets/styles/components/Settings.scss';
import closeIcon from '../assets/img/close.svg';
import infoIcon from '../assets/img/info.svg';
import rulesIcon from '../assets/img/rules.svg';
import gameFieldIcon from '../assets/img/gameField.svg';
import gameFieldCheckMarkIcon from '../assets/img/gameFieldCheckMark.svg';
import apisGamesLogo from '../assets/img/apisGames.svg';
import SettingsSpoilerId from '../ui/SettingsSpoilerId.tsx';
import { useDialogStore } from '../store/dialogStore.ts';
import { useEffect, useState } from 'react';
import { useGameFieldStore } from '../store/gameFieldStore.ts';
import SettingsItem from '../ui/SettingsItem.tsx';

function Settings() {
    const { closeSettings } = useDialogStore();
    const { setLeft, setRight, right, left } = useGameFieldStore();

    const [openedId, setOpenedId] = useState(0);
    const [isGameField, setIsGameField] = useState(window.matchMedia("(orientation: landscape)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(orientation: landscape)");
        const handleOrientation = (e) => {
            const landscape = e.matches;
            if (landscape) {
                setIsGameField(true);
            } else {
                setIsGameField(false);
            }
        };
        mediaQuery.addEventListener("change", handleOrientation);

        return () => {
            mediaQuery.removeEventListener("change", handleOrientation);
        };
    }, []);

    return (
      <div className={right ? "settings settings-right" : "settings"}>
          <div className="settings-navigation">
              <div className="settings-navigation-close" onClick={() => closeSettings()}>
                  <img src={closeIcon} alt="Settings close"/>
              </div>
          </div>
          <div className="settings-container">
              <div className="settings-title">Настройки</div>
              <SettingsSpoilerId title="Информация об игре" icon={infoIcon} id={1} openedId={openedId} setOpenedId={setOpenedId}>
                  <div className="settings-under">
                      <div className="settings-under-title">Plinko</div>
                      <div className="settings-under-text">Игрок размещает ставку, устанавливает уровень сложности и назначает количество рядов, после начала игры раунда попирамиде “Plinko” запускается шарик, который в конечном счете попадает в ячейку с определенным коэффициентом. Цель игрока -шарик должен попасть в наиболее выгодную ячейку с крупным выигрышем</div>
                      <div className="settings-under-logo">
                          <img src={apisGamesLogo} alt="Apis Games Icon"/>
                          <span>v0.01</span>
                      </div>
                  </div>
              </SettingsSpoilerId>
              <SettingsSpoilerId title="Правила" icon={rulesIcon} id={2} openedId={openedId} setOpenedId={setOpenedId}>
                  <div className="settings-under">
                      <div className="settings-under-title">Правила</div>
                      <div className="settings-under-text">Тут будет информация по правилам
                      </div>
                      <div className="settings-under-logo">
                          <img src={apisGamesLogo} alt="Apis Games Icon"/>
                          <span>v0.01</span>
                      </div>
                  </div>
              </SettingsSpoilerId>
              {isGameField && <SettingsItem title="Игровое поле" icon={gameFieldIcon}>
                  <div className="settings-under-game-interface">
                      <div className="settings-game-interface" onClick={setRight}>
                          <div className="settings-game-interface-text">Справа</div>
                          {right && <img src={gameFieldCheckMarkIcon} alt="Checkmark Icon" />}
                      </div>
                      <div className="settings-game-interface" onClick={setLeft}>
                          <div className="settings-game-interface-text">Слева</div>
                          {left && <img src={gameFieldCheckMarkIcon} alt="Checkmark Icon" />}
                      </div>
                  </div>
              </SettingsItem>}
          </div>
      </div>
    )
}

export default Settings
