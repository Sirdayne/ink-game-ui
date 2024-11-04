import '../assets/styles/components/Navigation.scss';
import backIcon from '../assets/img/back.svg';
import burgerIcon from '../assets/img/burger.svg';
import plinkoLogo from '../assets/img/plinko.svg';
import { useDialogStore } from '../store/dialogStore.ts';
import { useGameFieldStore } from '../store/gameFieldStore.ts';

function Navigation() {
    const { openSettings } = useDialogStore();
    const { right } = useGameFieldStore();

    return (
      <div className={right ? "navigation navigation-right" : "navigation"}>
          <div className="navigation-back">
              <img src={backIcon} alt="Back icon"/>
          </div>

          <div className="navigation-logo">
            <img src={plinkoLogo} alt="Game logo"/>
          </div>

          <div className="navigation-menu" onClick={() => openSettings()}>
            <img src={burgerIcon} alt="Burger menu"/>
          </div>
      </div>
    )

}

export default Navigation
