import '../assets/styles/ui/Modal.scss';
import Btn from '../ui/Btn.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeMaxBet } from '../store/slices/dialogSlice.ts';
import { GlobalState } from '../store';
import { setBet } from '../store/slices/betSlice.ts';

function ModalMaxBet() {
    const dispatch = useDispatch();
  const balance = useSelector((state: GlobalState) => state.bet.balance);

    const setMaxBet = () => {
      dispatch(setBet(balance));
      dispatch(closeMaxBet());
    }

    return (
      <div className="modal-overlay">
          <div className="modal modal-bet">
              <div className="modal-title">Максимальная ставка</div>
              <div className="modal-text">
                  Вы уверены что хотите активировать кнопку максимальной ставки?
              </div>
              <div className="modal-btns">
                 <Btn className="btn-outline modal-btn-cancel" onClick={() => dispatch(closeMaxBet())}>Отмена</Btn>
                 <Btn onClick={() => setMaxBet()}>Активировать</Btn>
              </div>
          </div>
      </div>
    )
}

export default ModalMaxBet
