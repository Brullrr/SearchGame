import classes from './DifficultyButton.module.css';
import easy from '../../../Images/Easy.jpg';
import normal from '../../../Images/Normal.jpg';
import hard from '../../../Images/Hard.jpg';
import { useDispatch } from 'react-redux';
import { levelSelectSliceActions } from '../../../../store/levelSelectSlice';
import { gameOngoingSliceActions } from '../../../../store/gameOngoingSlice';
import { backdropSliceActions } from '../../../../store/backdropSlice';
import { highScoresSliceActions } from '../../../../store/highScoresSlice';



const DifficultyButton = (props) => {

    const dispatch = useDispatch();

    const levelSelectedHandler = () => {
        switch (props.difficulty) {
            case 'Easy':
                dispatch(levelSelectSliceActions.selectLevelEasy());
                dispatch(backdropSliceActions.turnOffBackdrop())
                break;
            case 'Normal':
                dispatch(levelSelectSliceActions.selectLevelNormal())
                dispatch(backdropSliceActions.turnOffBackdrop())

                break;
            case 'Hard':
                dispatch(levelSelectSliceActions.selectLevelHard())
                dispatch(backdropSliceActions.turnOffBackdrop())
                

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