import '../assets/styles/ui/Volume.scss';
import { useBetStore } from '../store/betStore.ts';

function Volume({ disabled = false }) {

    const { bet, setBet, balance } = useBetStore();

    const minusBet = () => {
        if (bet > 0) {
            const newBet = Number(bet) - 1;
            setBet(newBet);
        }
    }

    const plusBet = () => {
      const newBet = Number(bet) + 1;
      if (newBet <= balance) {
        setBet(newBet);
      }
    }

    return (
      <div className="volume">
          <button
              onClick={minusBet}
              disabled={disabled}
              className="volume-btn volume-btn-minus"
          >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Minus">
                      <path id="Vector"
                            d="M18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H18Z"
                            fill="#6F728D"/>
                  </g>
              </svg>
          </button>
          <button
              onClick={plusBet}
              disabled={disabled}
              className="volume-btn volume-btn-plus"
          >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Plus">
                      <path id="Vector" fillRule="evenodd" clipRule="evenodd"
                            d="M12 5C12.5523 5 13 5.44772 13 6L13 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18L11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11L11 6C11 5.44772 11.4477 5 12 5Z"
                            fill="#6F728D"/>
                  </g>
              </svg>
          </button>
      </div>
    );
}

export default Volume
