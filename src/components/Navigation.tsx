import '../assets/styles/components/Navigation.scss';
import backIcon from '../assets/img/back.svg';
import burgerIcon from '../assets/img/burger.svg';
import plinkoLogo from '../assets/img/plinko.svg';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../store';
import { openSettings } from '../store/slices/dialogSlice.ts';

function Navigation() {
    const right = useSelector((state: GlobalState) => state.gameField.right);
    const dispatch = useDispatch();

    return (
      <div className={right ? "navigation navigation-right" : "navigation"}>
          <div className="navigation-back">
              <img src={backIcon} alt="Back icon"/>
          </div>

          <div className="navigation-logo">
            <img src={plinkoLogo} alt="Game logo"/>
          </div>

          <div className="navigation-menu" onClick={() => dispatch(openSettings())}>
            <img src={burgerIcon} alt="Burger menu"/>
          </div>
      </div>
    )

}

export default Navigation
