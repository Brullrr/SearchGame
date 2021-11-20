import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { highScoresSliceActions } from '../../../store/highScoresSlice';
import classes from './HighScores.module.css';



const HighScores = () => {


    function compare( a, b ) {
        if ( a.time < b.time ){
          return -1;
        }
        if ( a.time > b.time ){
          return 1;
        }
        return 0;
      }

    const [highScoresArray, setHighScoresArray] = useState([]);

   
    const getHighScores = useCallback( async () => {
        const response = await fetch('https://searchgame-6b980-default-rtdb.firebaseio.com/highscores.json')
        const data = await response.json();
        const loadedScores = []
        for (const key in data) {
            loadedScores.push({
                id: key,
                time: data[key].userTime,
                name: data[key].userName,
                level: data[key].userLevel

            })
        }
        const sortedHighScores = loadedScores.sort(compare)
        const hardHighScores = []
        sortedHighScores.map((e) => {
            if(e.level === 'hard') {
                hardHighScores.push(e)
            }
        })

        const finishedLoadedScores = hardHighScores.map((e, index) => {
            
            return {
                rank: index+1,
                name: e.name,
                time: e.time,
                level: e.level,
                key: e.key
            }
        })
        setHighScoresArray( finishedLoadedScores )
    }, []);

    useEffect(() => {
        getHighScores();
    }, [getHighScores])

    

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
                    highScoresArray.map((e) => {
                        if(e.rank <= 20) {
                            return (
                                <div key={e.rank} className={classes.ScoreList}>
                                    <p>{e.rank}</p>
                                    <p>{e.name}</p>    
                                    <p>{e.time}</p>
                                </div>
                            )
                        }
                        
                    })
                }
            </div>
            <button onClick={turnOffHighScores} >Back</button>

        </div>
    )
}

export default HighScores;