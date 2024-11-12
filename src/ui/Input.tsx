import '../assets/styles/ui/Input.scss';
import rubleCurrency from '../assets/img/ruble.svg';

function Input({ disabled = false, type='text', value, onChange, invalid }) {
  return (
      <div className={invalid ? "input input-invalid" : "input"}>
        <input disabled={disabled} value={value} onChange={e => onChange(e.target.value)}  type={type} />
      </div>
  );
}

export default Input
