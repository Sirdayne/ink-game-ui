import '../assets/styles/ui/Select.scss';
import dropdownIcon from '../assets/img/dropdown.svg';
import dropdownUpIcon from '../assets/img/dropdownUp.svg';
import { useEffect, useState, useRef } from 'react';

function Select({ values, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        onChange(option);
    };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
      setIsOpen(false);
    }
  };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

    return (
        <div className="select" onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
            <div className="select-icon">
                {isOpen ? <img src={dropdownUpIcon} alt="Dropdown icon"/> : <img src={dropdownIcon} alt="Dropdown icon"/>}
            </div>
            <div className={isOpen ? 'select-header select-header-active' : 'select-header'}>
                {value.label}
            </div>
            {isOpen && (
                <ul className="select-list">
                    {values.map(option => (
                        <li
                            key={option.value.toString()}
                            className={value.value === option.value ? 'select-item select-item-active' : 'select-item'}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Select
