import './../assets/styles/Settings.scss';
import closeIcon from '../assets/img/close.svg';
import infoIcon from '../assets/img/info.svg';
import rulesIcon from '../assets/img/rules.svg';
import apisGamesLogo from '../assets/img/apisGames.svg';
import SettingsSpoiler from '../ui/SettingsSpoiler.tsx';

function Settings({ setOpenedSettings }) {
  return (
      <div className="settings">
          <div className="settings-navigation">
              <div className="settings-navigation-close" onClick={() => setOpenedSettings(false)}>
                  <img src={closeIcon} alt="Settings close"/>
              </div>
          </div>
          <div className="settings-container">
              <div className="settings-title">Настройки</div>
              <SettingsSpoiler title="Информация об игре" icon={infoIcon}>
                  <div className="settings-under">
                      <div className="settings-under-title">Plinko</div>
                      <div className="settings-under-text">Игрок размещает ставку, устанавливает уровень сложности и назначает количество рядов, после начала игры раунда попирамиде “Plinko” запускается шарик, который в конечном счете попадает в ячейку с определенным коэффициентом. Цель игрока -шарик должен попасть в наиболее выгодную ячейку с крупным выигрышем</div>
                      <div className="settings-under-logo">
                          <img src={apisGamesLogo} alt="Apis Games Icon"/>
                          <span>v0.01</span>
                      </div>
                  </div>
              </SettingsSpoiler>
              <SettingsSpoiler title="Правила" icon={rulesIcon}>
                  <div className="settings-under">
                      <div className="settings-under-title">Правила</div>
                      <div className="settings-under-text">Тут будет информация по правилам
                      </div>
                      <div className="settings-under-logo">
                          <img src={apisGamesLogo} alt="Apis Games Icon"/>
                          <span>v0.01</span>
                      </div>
                  </div>
              </SettingsSpoiler>
          </div>
      </div>
  )
}

export default Settings
