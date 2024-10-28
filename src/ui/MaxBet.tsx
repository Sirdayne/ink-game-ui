import '../assets/styles/ui/MaxBet.scss';

function MaxBet({ disabled = false, onClick }) {
  return (
      <button onClick={onClick} disabled={disabled} className="max-bet">
          MAX
      </button>
  );
}

export default MaxBet
