import '../assets/styles/components/GameContainer.scss';
import { useGameFieldStore } from '../store/gameFieldStore.ts';

function GameContainer() {
  const { right } = useGameFieldStore();

  return (
      <div className={right ? "game-container game-container-right" : "game-container"}>
          {/*<iframe src="https://plinko-test.surge.sh/" />*/}
      </div>
)

}

export default GameContainer
