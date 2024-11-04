import '../assets/styles/ui/Select.scss';
import dropdownIcon from '../assets/img/dropdown.svg';
import dropdownUpIcon from '../assets/img/dropdownUp.svg';
import { useState } from 'react';

function Select({ values, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="select">
            <div className="select-icon">
                {isOpen ? <img src={dropdownUpIcon} alt="Dropdown icon"/> : <img src={dropdownIcon} alt="Dropdown icon"/>}
            </div>
            <div className={isOpen ? 'select-header select-header-active' : 'select-header'} onClick={() => setIsOpen(!isOpen)}>
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
