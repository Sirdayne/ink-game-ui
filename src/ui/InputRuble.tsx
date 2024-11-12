import '../assets/styles/ui/Input.scss';
import Input from './Input.tsx';

function InputRuble({ disabled = false, type='text', value, onChange, invalid }) {
  return (
      <Input value={value} type={type} onChange={onChange} disabled={disabled} invalid={invalid} />
  );
}

export default InputRuble
