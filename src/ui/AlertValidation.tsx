import '../assets/styles/ui/AlertValidation.scss';
import alertTriangleIcon from '../assets/img/alertTriangle.svg';
import { useAlertStore } from '../store/alertStore.ts';

function AlertValidation() {
  const { closeAlertValidation } = useAlertStore();

    return (
      <div className="alert-validation" onClick={closeAlertValidation}>
        <img src={alertTriangleIcon} alt="Alert icon" />
        <div>
          Вы не можете делать ставку превышающую ваш баланс
        </div>
      </div>
    )
}

export default AlertValidation
