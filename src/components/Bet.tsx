import '../assets/styles/components/Bet.scss';
import '../assets/styles/ui/FormField.scss';
import balanceIcon from '../assets/img/balance.svg';
import Button from '../ui/Button.tsx';
import Volume from './Volume.tsx';
import MaxBet from '../ui/MaxBet.tsx';
import InputRuble from '../ui/InputRuble.tsx';
import Select from '../ui/Select.tsx';
import { useState } from 'react';
import { sendBetMessage, sendRiskMessage, sendRowMessage } from '../uitls/events.ts';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../store';
import { closeAlertValidation, openAlertValidation } from '../store/slices/alertValidationSlice.ts';
import { setBalance, setBet } from '../store/slices/betSlice.ts';

function Bet() {
    const dispatch = useDispatch();
    const right = useSelector((state: GlobalState) => state.gameField.right);
    const bet = useSelector((state: GlobalState) => state.bet.bet);
    const balance = useSelector((state: GlobalState) => state.bet.balance);
    const alertValidation = useSelector((state: GlobalState) => state.alertValidation.alertValidation);
    const [row, setRow] = useState({ value: 8, label: '8' });
    const [risk, setRisk] = useState({ value: 1, label: 'Низкий' });

    const tryRound = () => {
        if (bet > balance || bet <= 0) {
            showAlertValidation();
        } else {
            sendBetMessage();
            playRound();
        }
    }

    const showAlertValidation = () => {
        dispatch(openAlertValidation());
        setTimeout(() => dispatch(closeAlertValidation()), 3000);
    }

    const playRound = () => {
        const newBalance = balance - bet;
        dispatch(setBalance(newBalance));
    }

    const rows = [
        { value: 8, label: '8' },
        { value: 10, label: '10' },
        { value: 12, label: '12' },
        { value: 14, label: '14' },
        { value: 16, label: '16' },
    ]

    const risks = [
        { value: 1, label: 'Низкий' },
        { value: 2, label: 'Средний' },
        { value: 3, label: 'Высокий' }
    ]

    const changeRow = (option) => {
        sendRowMessage(option.value);
        setRow(option);
    }

    const changeRisk = (option) => {
        sendRiskMessage(option.label);
        setRisk(option);
    }

    const handleChange = (value) => {
        dispatch(setBet(Number(value)));
    };

    return (
        <div className={right ? "bet bet-right" : "bet"}>
            <div className="bet-container">
                <div>
                    <div className="wallet">
                        <div className="wallet-label">
                            <img className="wallet-label-icon" src={balanceIcon} alt="Balance icon" />
                            <span className="wallet-label-text">Баланс</span>
                        </div>

                        <div className="wallet-balance">
                            <span className="wallet-balance-value">{balance}</span>
                            <span className="wallet-balance-currency">RUB</span>
                        </div>
                    </div>

                    <Button disabled={false} className="wallet-btn" onClick={tryRound}>Ставка</Button>
                </div>

                <div>
                    <div className="form-fields">
                        <div className="form-field">
                            <div className="form-field-label">Ставка</div>
                            <InputRuble value={bet} type="number" onChange={handleChange} invalid={alertValidation} />
                        </div>
                        <div className="form-field-extra">
                            <Volume />
                        </div>
                        <div className="form-field-extra">
                            <MaxBet />
                        </div>
                    </div>

                    <div className="form-fields">
                        <div className="form-field">
                            <div className="form-field-label">Ряды</div>
                            <Select values={rows} value={row} onChange={changeRow} />
                        </div>
                        <div className="form-field">
                            <div className="form-field-label">Риск</div>
                            <Select values={risks} value={risk} onChange={changeRisk} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bet
