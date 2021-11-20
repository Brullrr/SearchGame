import classes from './DifficultyButton.module.css';
import easy from '../../../Images/Easy.jpg';
import normal from '../../../Images/Normal.jpg';
import hard from '../../../Images/Hard.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { levelSelectSliceActions } from '../../../../store/levelSelectSlice';
import { gameOngoingSliceActions } from '../../../../store/gameOngoingSlice';
import { backdropSliceActions } from '../../../../store/backdropSlice';
import { addUserTime } from '../../../Utility/ServerRequests/addUserTime';
import { startTimeSliceActions } from '../../../../store/startTimeSlice';


const DifficultyButton = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.playerNameSlice.playerName);

    
    const sendRequest = (level) => {
        let timeNow = Date.now();
        dispatch(startTimeSliceActions.addStartTime(timeNow)) 
        addUserTime({
            user: userName,
            timeStart: timeNow,
            level: level
        });
    }

    const levelSelectedHandler = () => {
        switch (props.difficulty) {
            case 'Easy':
                dispatch(levelSelectSliceActions.selectLevelEasy());
                dispatch(backdropSliceActions.turnOffBackdrop());
                sendRequest('easy');

                break;
            case 'Normal':
                dispatch(levelSelectSliceActions.selectLevelNormal())
                dispatch(backdropSliceActions.turnOffBackdrop())
                sendRequest('normal');

                break;
            case 'Hard':
                dispatch(levelSelectSliceActions.selectLevelHard())
                dispatch(backdropSliceActions.turnOffBackdrop())
                sendRequest('hard');
                break;
            default:
                break;
        }

        dispatch(gameOngoingSliceActions.turnOnGameOngoing())
    }



    return (
        <div className={classes.DifficultyButton} style={{
            backgroundImage: props.difficulty === 'Easy' ? 'url(' + easy + ')' : props.difficulty === 'Normal' ? 'url(' + normal + ')' : 'url(' + hard + ')',
            justifySelf: props.difficulty === 'Easy' ? 'left' : props.difficulty === 'Normal' ? 'center' : 'end'
        }}
            onClick={
                levelSelectedHandler
            }
        >
            <p>{props.difficulty}</p>

        </div>
    )
}

export default DifficultyButton;