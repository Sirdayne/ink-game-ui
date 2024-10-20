import './../assets/styles/Bet.scss';
import './../assets/styles/FormField.scss';
import balanceIcon from '../assets/img/balance.svg';
import Button from '../ui/Button.tsx';
import Volume from '../ui/Volume.tsx';
import MaxBet from '../ui/MaxBet.tsx';
import Input from '../ui/Input.tsx';
import Select from '../ui/Select.tsx';
import { useState } from 'react';

function Bet() {

    const [bet, setBet] = useState(1);
    const [row, setRow] = useState({ value: 8, label: '8' });
    const [risk, setRisk] = useState({ value: 1, label: 'Низкий' });
    const [balance, setBalance] = useState(1000);

    const playRound = () => {
        setBalance((prev) => prev - bet > 0 ? prev - bet : 0);
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

    const setMaxBet = () => {
        setBet(50);
    }

    return (
      <div className="bet">
          <div className="form-fields">
              <div className="form-field">
                  <div className="form-field-label">Ставка</div>
                  <Input value={bet} onChange={setBet}/>
              </div>
              <div className="form-field">
                  <div className="form-field-label"></div>
                  <Volume bet={bet} setBet={setBet}/>
              </div>
              <div className="form-field">
                  <div className="form-field-label"></div>
                  <MaxBet onClick={setMaxBet}/>
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

          <Button disabled={!balance} className="wallet-btn" onClick={playRound}>Ставка</Button>
      </div>
  )
}

export default Bet
