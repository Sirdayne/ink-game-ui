import '../assets/styles/ui/Modal.scss';
import Btn from '../ui/Btn.tsx';
import { useDialogStore } from '../store/dialogStore.ts';
import { useBetStore } from '../store/betStore.ts';

function ModalMaxBet() {
    const { closeMaxBet } = useDialogStore();
    const { setBet, balance } = useBetStore();

    const setMaxBet = () => {
      setBet(balance);
      closeMaxBet();
    }

    return (
      <div className="modal-overlay">
          <div className="modal modal-bet">
              <div className="modal-title">Максимальная ставка</div>
              <div className="modal-text">
                  Вы уверены что хотите активировать кнопку максимальной ставки?
              </div>
              <div className="modal-btns">
                 <Btn className="btn-outline modal-btn-cancel" onClick={() => closeMaxBet()}>Отмена</Btn>
                 <Btn onClick={() => setMaxBet()}>Активировать</Btn>
              </div>
          </div>
      </div>
    )
}

export default ModalMaxBet
