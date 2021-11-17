import classes from './WelcomeModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FirstTimeStateSliceActions } from "../../../store/FirstTimeSlice";
import { backdropSliceActions } from "../../../store/backdropSlice";
import { playerNameSliceActions } from '../../../store/playerNameSlice';


const WelcomeModal = () => {


    const dispatch = useDispatch();
    const turnOffFirstTimeHandler = () => {
        dispatch(FirstTimeStateSliceActions.changeToNotFirstTime())
        dispatch(backdropSliceActions.turnOnBackdrop())
    }

    const playerName = useSelector(state => state.playerNameSlice.playerName)
    console.log('WelcomeModal playerNAme is   :   ' + playerName)
    const changePlayerNameHandler = (name) => {
        dispatch(playerNameSliceActions.changePlayerName(name))
    }


    return (
        <div className={classes.ModalBody}>
            <div className={classes.WelcomeDiv}>
                <p className={classes.WelcomeP}>Welcome</p>
                <div className={classes.WelcomeImage} ></div>
            </div>
            <div className={classes.Form}>
                <p className={classes.EnterP}>Enter your name below.</p>
                <input onChange={(event) => {changePlayerNameHandler(event.target.value)}} className={classes.InputName} type='text' value={playerName} />
                <button onClick={turnOffFirstTimeHandler} className={classes.EnterButton}>Enter</button>
            </div>
        </div>
    )
}
export default WelcomeModal;