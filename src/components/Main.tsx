import './../assets/styles/Main.scss';
import Navigation from './Navigation.tsx';
import Bet from './Bet.tsx';
import GameContainer from './GameContainer.tsx';

function Main() {
  return (
      <div className="main">
          <Navigation />
          <GameContainer />
          <Bet />
      </div>
  )
}

export default Main
