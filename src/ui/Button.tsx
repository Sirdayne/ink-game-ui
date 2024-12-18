import '../assets/styles/ui/Button.scss';
import { ReactNode } from 'react';

type ButtonProps = {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

function Button({ className = '', disabled = false, children, onClick }: ButtonProps) {
  return (
      <button
          onClick={onClick}
          disabled={disabled}
          className={`button ${className}`}
      >
          {children}
      </button>
  );
}

export default Button
