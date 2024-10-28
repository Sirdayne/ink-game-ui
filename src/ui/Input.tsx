import '../assets/styles/ui/Input.scss';
import rubleCurrency from '../assets/img/ruble.svg';

function Input({ disabled = false, type='text', value, onChange }) {
  return (
      <div className="input">
        <input disabled={disabled} value={value} onChange={e => onChange(e.target.value)}  type={type} />
        <div className="input-icon">
          <img src={rubleCurrency} alt="Ruble icon"/>
        </div>
      </div>
  );
}

export default Input
