import '../assets/styles/ui/MaxBet.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openMaxBet } from '../store/slices/dialogSlice.ts';
import { GlobalState } from '../store';
import { setBet } from '../store/slices/betSlice.ts';

function MaxBet() {
  const dispatch = useDispatch();
  const bet = useSelector((state: GlobalState) => state.bet.bet);
  const balance = useSelector((state: GlobalState) => state.bet.balance);

  const toggleMaxBet = () => {
    if (balance === bet) {
      const defaultBet = 100;
      dispatch(setBet(defaultBet));
    } else {
      dispatch(openMaxBet());
    }
  }

  return (
      <button onClick={toggleMaxBet} className={balance === bet ? "max-bet max-bet-active" : "max-bet"}>
          MAX
      </button>
  );
}

export default MaxBet
