import '../assets/styles/components/Bet.scss';
import '../assets/styles/ui/FormField.scss';
import balanceIcon from '../assets/img/balance.svg';
import Button from '../ui/Button.tsx';
import Volume from './Volume.tsx';
import MaxBet from '../ui/MaxBet.tsx';
import InputRuble from '../ui/InputRuble.tsx';
import Select from '../ui/Select.tsx';
import { useState } from 'react';
import { useGameFieldStore } from '../store/gameFieldStore.ts';
import { useBetStore } from '../store/betStore.ts';
import { useAlertStore } from '../store/alertStore.ts';

function Bet() {
    const { right } = useGameFieldStore();
    const { balance, setBalance }= useBetStore();
    const { bet, setBet } = useBetStore();
    const { alertValidation, openAlertValidation, closeAlertValidation } = useAlertStore();
    const [row, setRow] = useState({ value: 8, label: '8' });
    const [risk, setRisk] = useState({ value: 1, label: 'Низкий' });

    const tryRound = () => {
        if (bet > balance || bet <= 0) {
            showAlertValidation();
        } else {
            playRound()
        }
    }

    const showAlertValidation = () => {
        openAlertValidation();
        setTimeout(() => closeAlertValidation(), 3000);
    }

    const playRound = () => {
        const newBalance = balance - bet;
        setBalance(newBalance);
        console.log('Send Bet: ', {
            bet, row: row.value, risk: risk.value
        })
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

    return (
        <div className={right ? "bet bet-right" : "bet"}>
            <div className="bet-container">
                <div>
                    <div className="wallet">
                        <div className="wallet-label">
                            <img className="wallet-label-icon" src={balanceIcon} alt="Balance icon"/>
                            <span className="wallet-label-text">Баланс</span>
                        </div>

                        <div className="wallet-balance">
                            <span className="wallet-balance-value">{balance}</span>
                            <span className="wallet-balance-currency">RUB</span>
                        </div>
                    </div>

                    <Button disabled={!balance} className="wallet-btn" onClick={tryRound}>Ставка</Button>
                </div>

                <div>
                    <div className="form-fields">
                        <div className="form-field">
                            <div className="form-field-label">Ставка</div>
                            <InputRuble value={bet} type="number" onChange={setBet} invalid={alertValidation} />
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
                            <Select values={rows} value={row} onChange={setRow}/>
                        </div>
                        <div className="form-field">
                            <div className="form-field-label">Риск</div>
                            <Select values={risks} value={risk} onChange={setRisk}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bet
