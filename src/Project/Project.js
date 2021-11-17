import WelcomeModal from "./Components/WelcomeModal/WelcomeModal";
import Backdrop from './Utility/Backdrop/Backdrop';
import LevelSelect from './Components/LevelSelect/LevelSelect';
import GamePage from './Components/GamePage/GamePage';
import { useDispatch, useSelector } from 'react-redux';
import WellDone from "./Components/WellDone/WellDone";
import HighScores from "./Components/HighScores/HighScores";








const Project = () => {
    let isWelcomeModalOpen = useSelector(state => state.FirstTimeSlice.firstTime);
    let isWellDoneModalOpen = useSelector(state => state.wellDoneSlice.wellDone)
    let isGameOngoing = useSelector(state => state.gameOngoingSlice.gameOngoing);
    let isBackdropOpen = useSelector(state => state.backdropSlice.backdrop);
    let levelSelected = useSelector(state => state.levelSelectSlice.currentLevel);
    let isHighScoresOpen = useSelector(state => state.highScoresSlice.isHighScoresOpen)

    return (
        <div className='Project'>
            {isBackdropOpen ? <Backdrop /> : null}
            {isWelcomeModalOpen ? <WelcomeModal /> : null}  
            {!isWelcomeModalOpen && !isGameOngoing && !isHighScoresOpen ? <LevelSelect /> : null} 
            {isGameOngoing ? <GamePage level={levelSelected} /> : null} 
            {isWellDoneModalOpen ? <WellDone />: null}
            {isHighScoresOpen ? <HighScores />: null }
        </div>
    )
}

export default Project;