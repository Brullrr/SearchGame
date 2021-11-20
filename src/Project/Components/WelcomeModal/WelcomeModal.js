import classes from './WelcomeModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FirstTimeStateSliceActions } from "../../../store/FirstTimeSlice";
import { backdropSliceActions } from "../../../store/backdropSlice";
import { playerNameSliceActions } from '../../../store/playerNameSlice';

const WelcomeModal = () => {
    const dispatch = useDispatch();
    

    const playerName = useSelector(state => state.playerNameSlice.playerName)
    const changePlayerNameHandler = (name) => {
        dispatch(playerNameSliceActions.changePlayerName(name))
    }
    const turnOffFirstTimeHandler = () => {
        dispatch(FirstTimeStateSliceActions.changeToNotFirstTime())
        dispatch(backdropSliceActions.turnOnBackdrop())
        
    }



    return (
        <div className={classes.ModalBody}>
            <div className={classes.WelcomeDiv}>
                <p className={classes.WelcomeP}>Welcome</p>
                <div className={classes.WelcomeImage} ></div>
            </div>
            <div className={classes.Form}>
                <p className={classes.EnterP}>Enter your name below.</p>
                <input onChange={(event) => {changePlayerNameHandler(event.target.value)}} className={classes.InputName} type='text' value={playerName} minLength='3' maxLength='16' />
                <button onClick={turnOffFirstTimeHandler} className={classes.EnterButton}>Enter</button>
            </div>
        </div>
    )
}
export default WelcomeModal;