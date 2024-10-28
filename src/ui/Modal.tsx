import '../assets/styles/ui/Modal.scss';
import Btn from './Btn.tsx';

function Settings({ setOpenedModal }) {
  return (
      <div className="modal-overlay">
          <div className="modal">
              <div className="modal-title">Максимальная ставка</div>
              <div className="modal-text">
                  Вы уверены что хотите активировать кнопку максимальной ставки?
              </div>
              <div className="modal-btns">
                 <Btn className="btn-outline" onClick={() => setOpenedModal(false)}>Отмена</Btn>
                 <Btn onClick={() => setOpenedModal(false)}>Активировать</Btn>
              </div>
          </div>
      </div>
  )
}

export default Settings
