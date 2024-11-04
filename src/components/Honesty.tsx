import '../assets/styles/components/Honesty.scss';
import settingIcon from '../assets/img/setting.svg';
import { useGameFieldStore } from '../store/gameFieldStore.ts';

function Honesty() {
  const { right } = useGameFieldStore();

  return (
      <div className={right ? "honesty-setting honesty-setting-right" : "honesty-setting"}>
          <img src={settingIcon} alt="Setting icon"/>
          <span>Честность</span>
      </div>
  )
}

export default Honesty
