import '../assets/styles/Main.scss';
import Navigation from './Navigation.tsx';
import Bet from './Bet.tsx';
import GameContainer from './GameContainer.tsx';
import Honesty from './Honesty.tsx';

function Main() {
  return (
      <div className="main">
          <Navigation />
          <GameContainer/>
          <Bet />
          <Honesty />
      </div>
  )
}

export default Main
