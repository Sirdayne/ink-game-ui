import '../assets/styles/ui/MaxBet.scss';
import { useBetStore } from '../store/betStore.ts';
import { useDialogStore } from '../store/dialogStore.ts';

function MaxBet() {
  const { openMaxBet } = useDialogStore();
  const { balance}= useBetStore();
  const { bet, setBet } = useBetStore();

  const toggleMaxBet = () => {
    if (balance === bet) {
      const defaultBet = 100;
      setBet(defaultBet);
    } else {
      openMaxBet();
    }
  }

  return (
      <button onClick={toggleMaxBet} className={balance === bet ? "max-bet max-bet-active" : "max-bet"}>
          MAX
      </button>
  );
}

export default MaxBet
