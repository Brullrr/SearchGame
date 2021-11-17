import { useDispatch } from 'react-redux';
import { wellDoneSliceActions } from '../../../store/wellDoneSlice';
import { gameOngoingSliceActions } from '../../../store/gameOngoingSlice';
import classes from './WellDone.module.css';

const WellDone = () => {

    const dispatch = useDispatch();

    const goToLevelSelect = () => {
        dispatch(wellDoneSliceActions.turnOffWellDone());
        dispatch(gameOngoingSliceActions.turnOffGameOngoing());
    }
    return (
        <div className={classes.ModalBody}>
            <p>Well Done!</p>
            <p>You completed the game with a time of </p>
            <p>0:00</p>
            <button onClick={goToLevelSelect}>Continue?</button>
        </div>
    )
}

export default WellDone;