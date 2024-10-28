import '../assets/styles/ui/Btn.scss';
import { ReactNode } from 'react';

type ButtonProps = {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

function Btn({ className = '', disabled = false, children, onClick }: ButtonProps) {
  return (
      <button
          onClick={onClick}
          disabled={disabled}
          className={`btn ${className}`}
      >
          {children}
      </button>
  );
}

export default Btn
