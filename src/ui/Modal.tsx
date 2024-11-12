import '../assets/styles/ui/Modal.scss';
import Btn from './Btn.tsx';
import { useDialogStore } from '../store/dialogStore.ts';

function Modal() {
    const { closeMaxBet } = useDialogStore();

    return (
      <div className="modal-overlay">
          <div className="modal modal-bet">
              <div className="modal-title">Модальное окно</div>
              <div className="modal-text">
                  Вы уверены?
              </div>
              <div className="modal-btns">
                 <Btn className="btn-outline modal-btn-cancel" onClick={() => closeMaxBet()}>Отмена</Btn>
                 <Btn onClick={() => closeMaxBet()}>Да</Btn>
              </div>
          </div>
      </div>
    )
}

export default Modal
