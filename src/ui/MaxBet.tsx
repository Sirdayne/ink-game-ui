import '../assets/styles/ui/MaxBet.scss';
import { useBetStore } from '../store/betStore.ts';
import { useState } from 'react';
import { useDialogStore } from '../store/dialogStore.ts';

function MaxBet() {
  const { openMaxBet } = useDialogStore();
  const { balance, setBalance }= useBetStore();
  const { bet, setBet } = useBetStore();

  const [disabled, setDisabled] = useState(false);

  const toggleMaxBet = () => {
    if (balance === bet) {
      const defaultBet = 100;
      setBet(defaultBet);
    } else {
      openMaxBet();
    }
  }

  return (
      <button onClick={toggleMaxBet} disabled={disabled} className={balance === bet ? "max-bet max-bet-active" : "max-bet"}>
          MAX
      </button>
  );
}

export default MaxBet
