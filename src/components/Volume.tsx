import '../assets/styles/ui/Volume.scss';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../store';
import { decreaseBet, increaseBet, setBet, setStep } from '../store/slices/betSlice.ts';

function Volume({ disabled = false }) {
    const intervalRef = useRef<any>(null);
    const dispatch = useDispatch();
    const bet = useSelector((state: GlobalState) => state.bet.bet);
    const balance = useSelector((state: GlobalState) => state.bet.balance);


    const minusBet = () => {
        if (bet > 0) {
            const newBet = Number(bet) - 1;
            dispatch(setBet(newBet));
        }
    }

    const plusBet = () => {
      const newBet = Number(bet) + 1;
      if (newBet <= balance) {
        dispatch(setBet(newBet));
      }
    }

    const startIncreasing = () => {
      intervalRef.current = setInterval(() => {
        dispatch(increaseBet());
      }, 100);
    };

  const startDecreasing = () => {
    intervalRef.current = setInterval(() => {
      dispatch(decreaseBet());
    }, 100);
  };

    const stopInterval = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      dispatch(setStep(1));
    };

    return (
      <div className="volume">
          <button
              onClick={minusBet}
              onMouseDown={startDecreasing}
              onMouseUp={stopInterval}
              onMouseLeave={stopInterval}
              disabled={disabled}
              className="volume-btn volume-btn-minus"
          >
            <div className="volume-btn-minus-line"></div>
          </button><button
        onClick={plusBet}
        onMouseDown={startIncreasing}
        onMouseUp={stopInterval}
        onMouseLeave={stopInterval}
        disabled={disabled}
        className="volume-btn volume-btn-plus"
      >
        <div className="volume-btn-plus-line"></div>
        <div className="volume-btn-plus-line-vertical"></div>
      </
          button>
      </div>
    );
}

export default Volume;
