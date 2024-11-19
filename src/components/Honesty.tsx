import '../assets/styles/components/Honesty.scss';
import settingIcon from '../assets/img/setting.svg';
import { useSelector } from 'react-redux';
import { GlobalState } from '../store';

function Honesty() {
  const right = useSelector((state: GlobalState) => state.gameField.right);

  return (
      <div className={right ? "honesty-setting honesty-setting-right" : "honesty-setting"}>
          <img src={settingIcon} alt="Setting icon"/>
          <span>Честность</span>
      </div>
  )
}

export default Honesty
