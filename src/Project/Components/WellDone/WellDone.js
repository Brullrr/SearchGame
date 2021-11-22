import { useDispatch, useSelector } from 'react-redux';
import { wellDoneSliceActions } from '../../../store/wellDoneSlice';
import { gameOngoingSliceActions } from '../../../store/gameOngoingSlice';
import classes from './WellDone.module.css';
import { useCallback, useEffect, useState } from 'react';
import { addHighScore } from '../../Utility/ServerRequests/addHighScore';

const WellDone = () => {
    
    const [timesSaved, setTimesSaved] = useState([]);
    const [userTime, setUserTime] = useState(0)

    let correctTime = ''
    let level = 'unknown'
    const timeStoredFromState = useSelector(state => state.startTimeSlice.startTime)
    

    timesSaved.forEach(e=> {
        console.log('User Time:   ' + userTime)
        if(e.time === timeStoredFromState) {
            correctTime = e.time
            level = e.level
        }
    })
    let timeToReduce = timesSaved.length > 0 ? correctTime : 0;

    
    const getStartTime = useCallback( async () => {
    const response = await fetch('https://searchgame-6b980-default-rtdb.firebaseio.com/userTime.json')
    const data = await response.json();
    const loadedTimes = []
    for (const key in data) {
        loadedTimes.push({
            id: key,
            time: data[key].timeStart,
            name: data[key].user,
            level: data[key].level
        })
    }
    setTimesSaved(loadedTimes)
    }, []);
    if(timesSaved.length === 0) {
        getStartTime();
    }


    const dispatch = useDispatch();

    const userName = useSelector(state => state.playerNameSlice.playerName) 

    
    

    useEffect(() => {
         setUserTime((Date.now() - timeToReduce)/1000 )
        if((Date.now() - timeStoredFromState)/1000 > 0 && level != 'unknown'){
            addHighScore({
                userName:  userName,
                userTime: (Date.now() - timeStoredFromState)/1000,
                userLevel: level
            });
        }
        
    }, [timeToReduce, userName, level, timeStoredFromState]);


    const goToLevelSelect = () => {
        dispatch(wellDoneSliceActions.turnOffWellDone());
        dispatch(gameOngoingSliceActions.turnOffGameOngoing());
        
    }
    return (
        <div className={classes.ModalBody}>
            <p>Well Done!</p>
            <p>{userName} completed the game with a time of </p>
            <p>{userTime}</p>
            <button onClick={goToLevelSelect}>Continue?</button>
        </div>
    )
}

export default WellDone;