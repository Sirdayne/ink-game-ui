import './../assets/styles/Main.scss';
import Navigation from './Navigation.tsx';
import Bet from './Bet.tsx';
import settingIcon from '../assets/img/setting.svg';

function Main() {
  return (
      <div className="main">
          <div>
              <Navigation />
              <Bet />
          </div>

          <div className="main-setting">
              <img src={settingIcon} alt="Setting icon"/>
              <span>Честность</span>
          </div>
      </div>
  )

}

export default Main
