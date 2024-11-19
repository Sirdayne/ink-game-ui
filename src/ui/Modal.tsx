import '../assets/styles/ui/Modal.scss';
import Btn from './Btn.tsx';
import { useDispatch } from 'react-redux';
import { closeMaxBet } from '../store/slices/dialogSlice.ts';

function Modal() {
    const dispatch = useDispatch();

    return (
      <div className="modal-overlay">
          <div className="modal modal-bet">
              <div className="modal-title">Модальное окно</div>
              <div className="modal-text">
                  Вы уверены?
              </div>
              <div className="modal-btns">
                 <Btn className="btn-outline modal-btn-cancel" onClick={() => dispatch(closeMaxBet())}>Отмена</Btn>
                 <Btn onClick={() => dispatch(closeMaxBet())}>Да</Btn>
              </div>
          </div>
      </div>
    )
}

export default Modal
