import { useDispatch } from 'react-redux';
import { highScoresSliceActions } from '../../../store/highScoresSlice';
import classes from './HighScores.module.css';


const dummyData = [
    {
        name: 'Richard',
        rank: 1,
        time: '2:00'
    },
    {
        name: 'Oscar',
        rank: 2,
        time: '3:00'
    },
    {
        name: 'Cuong',
        rank: 3,
        time: '4:00'
    },
    {
        name: 'Anthony',
        rank: 4,
        time: '5:00'
    },
    {
        name: 'Richard',
        rank: 5,
        time: '2:00'
    },
    {
        name: 'Oscar',
        rank: 6,
        time: '3:00'
    },
    {
        name: 'Cuong',
        rank: 7,
        time: '4:00'
    },
    {
        name: 'Anthony',
        rank: 8,
        time: '5:00'
    },
    {
        name: 'Richard',
        rank: 9,
        time: '2:00'
    },
    {
        name: 'Oscar',
        rank: 10,
        time: '3:00'
    },
    {
        name: 'Cuong',
        rank: 11,
        time: '4:00'
    },
    {
        name: 'Anthony',
        rank: 12,
        time: '5:00'
    },
    {
        name: 'Richard',
        rank: 13,
        time: '2:00'
    },
    {
        name: 'Oscar',
        rank: 14,
        time: '3:00'
    },
    {
        name: 'Cuong',
        rank: 15,
        time: '4:00'
    },
    {
        name: 'Anthony',
        rank: 16,
        time: '5:00'
    },
    {
        name: 'Richard',
        rank: 17,
        time: '2:00'
    },
    {
        name: 'Oscar',
        rank: 18,
        time: '3:00'
    },
    {
        name: 'Cuong',
        rank: 19,
        time: '4:00'
    },
    {
        name: 'Anthony',
        rank: 20,
        time: '5:00'
    },
]

const HighScores = () => {

    const dispatch = useDispatch();

    const turnOffHighScores = () => {
        dispatch(highScoresSliceActions.turnOffhighScores())
    }

    return (
        <div className={classes.ModalBody}>
            <div className={classes.TitleCard}>
                <p>Rank</p> <p>Name</p> <p>Time</p>
            </div>
            <div className={classes.ScoreHolder} >
                {
                    dummyData.map((e) => {
                        return (
                            <div className={classes.ScoreList}>
                                <p>{e.rank}</p>
                                <p>{e.name}</p>    
                                <p>{e.time}</p>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={turnOffHighScores} >Back</button>

        </div>
    )
}

export default HighScores;