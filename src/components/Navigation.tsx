import './../assets/styles/Navigation.scss';
import backIcon from '../assets/img/back.svg';
import burgerIcon from '../assets/img/burger.svg';
import plinkoLogo from '../assets/img/plinko.svg';

function Navigation({ setOpenedSettings }) {
  return (
      <div className="navigation">
          <div className="navigation-back">
              <img src={backIcon} alt="Back icon"/>
          </div>

          <div className="navigation-logo">
            <img src={plinkoLogo} alt="Game logo"/>
          </div>

          <div className="navigation-menu" onClick={() => setOpenedSettings(true)}>
            <img src={burgerIcon} alt="Burger menu"/>
          </div>
      </div>
  )

}

export default Navigation
