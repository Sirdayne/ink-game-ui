import '../assets/styles/components/GameContainer.scss';
import { useSelector } from 'react-redux';
import { GlobalState } from '../store';

function GameContainer() {
  const right = useSelector((state: GlobalState) => state.gameField.right);
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
