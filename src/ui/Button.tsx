import './../assets/styles/Button.scss';
import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    className: string;
}

function Button({ className = '', disabled = false, children, onClick }: ButtonProps) {
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

export default Button
