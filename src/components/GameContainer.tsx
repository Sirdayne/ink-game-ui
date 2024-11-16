import '../assets/styles/components/GameContainer.scss';
import { useGameFieldStore } from '../store/gameFieldStore.ts';

function GameContainer() {
  const { right } = useGameFieldStore();
  const gameIframeUrl = import.meta.env.VITE_IFRAME_URL;

  return (
    <div className={right ? "game-container game-container-right" : "game-container"}>
      <iframe
        id="gameIframe"
        src={gameIframeUrl}
        allow="fullscreen; autoplay;"
        allowFullScreen
      />
    </div>
  );


}

export default GameContainer
