import classes from './LevelSelect.module.css';
import DifficultyButton from './Buttons/DifficultyButton';
import {highScoresSliceActions} from '../../../store/highScoresSlice';
import { useDispatch } from 'react-redux';


const LevelSelect = () => {
    const dispatch = useDispatch();
    const highScoresClicked = () => {
        dispatch(highScoresSliceActions.turnOnhighScores());
    } ;

    return (
        <div className={classes.ModalBody}>
            <DifficultyButton difficulty='Easy' />
            <DifficultyButton difficulty='Normal' />
            <DifficultyButton difficulty='Hard' />
            <button className={classes.ViewHS} onClick={highScoresClicked}>View Hard High Scores</button>
        </div>
    )
};

export default LevelSelect;