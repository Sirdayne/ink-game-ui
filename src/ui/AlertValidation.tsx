import '../assets/styles/ui/AlertValidation.scss';
import alertTriangleIcon from '../assets/img/alertTriangle.svg';
import { useDispatch } from 'react-redux';
import { closeAlertValidation } from '../store/slices/alertValidationSlice.ts';

function AlertValidation() {
    const dispatch = useDispatch();

    return (
      <div className="alert-validation" onClick={() => dispatch(closeAlertValidation())}>
        <img src={alertTriangleIcon} alt="Alert icon" />
        <div>
          Вы не можете делать ставку превышающую ваш баланс
        </div>
      </div>
    )
}

export default AlertValidation
