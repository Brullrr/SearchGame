import classes from './GamePage.module.css';
import easy from '../../Images/Easy.jpg';
import normal from '../../Images/Normal.jpg';
import hard from '../../Images/Hard.jpg';
import EasyCharacterOne from '../../Images/EasyCharacterOne.PNG';
import EasyCharacterTwo from '../../Images/EasyCharacterTwo.PNG';
import EasyCharacterThree from '../../Images/EasyCharacterThree.PNG';
import NormalCharacterOne from '../../Images/NormalCharacterOne.PNG';
import NormalCharacterTwo from '../../Images/NormalCharacterTwo.PNG';
import NormalCharacterThree from '../../Images/NormalCharacterThree.PNG';
import HardCharacterOne from '../../Images/HardCharacterOne.PNG';
import HardCharacterTwo from '../../Images/HardCharacterTwo.PNG';
import HardCharacterThree from '../../Images/HardCharacterThree.PNG';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wellDoneSliceActions } from '../../../store/wellDoneSlice';
import { backdropSliceActions } from '../../../store/backdropSlice';

const GamePage = (props) => {

    const disptach = useDispatch();

    const characterOne = props.level === 'Easy' ? EasyCharacterOne :  props.level === 'Hard' ? HardCharacterOne : NormalCharacterOne
    const characterTwo =  props.level === 'Easy' ? EasyCharacterTwo :  props.level === 'Hard' ? HardCharacterTwo : NormalCharacterTwo
    const characterThree =  props.level === 'Easy' ? EasyCharacterThree :  props.level === 'Hard' ? HardCharacterThree : NormalCharacterThree
    

    const [beginningClass, setbeginningClass ] = useState(classes.GamePageHeadingBegin)

    if(beginningClass === classes.GamePageHeadingBegin) {
        setTimeout(() => {
            setbeginningClass(classes.GamePageHeading)
        }, 3000);
    }

    const [beginningTextClass, setBeginningTextClass ] = useState(classes.GamePageTextBegin)

    if(beginningTextClass === classes.GamePageTextBegin) {
        setTimeout(() => {
            setBeginningTextClass(classes.GamePageText)
        }, 3000);
    }
    const [beginningImageClass, setBeginningImageClass ] = useState(classes.GameImageBegin)

    if(beginningImageClass === classes.GameImageBegin) {
        setTimeout(() => {
            setBeginningImageClass(classes.GameImage)
        }, 3000);
    }
    const [clickedX, setClickedX] = useState('')
    const changeClickedX = (event) => {setClickedX( ((((event.clientX + window.scrollX)) -  (window.innerWidth/6.6)) ) )}
    
    const [clickedY, setClickedY] = useState('')
    const changeClickedY = (event) => {setClickedY((80 - (window.innerHeight/10)) + event.clientY + window.scrollY)}
    

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }
    const [charactersToFind, setCharactersToFind] = useState([{num: 1, sourceImage: characterOne},{num: 2, sourceImage: characterTwo},{num: 3, sourceImage: characterThree}])

    let imageOneFound = true;
    let imageTwoFound = true;
    let imageThreeFound = true;

    charactersToFind.forEach(e => {
        if(e.num === 1) {imageOneFound = false}
        if(e.num === 2) {imageTwoFound = false}
        if(e.num === 3) {imageThreeFound = false}
        
    })

    const searchingFor = (e, element) => {
        checkIfFound(e.num, element.clientX)
    }

    
    //Move to Data Base: 

    const checkIfFound = (imageNumber, imageWidth) => {
        
        if(props.level === 'Easy') {
            let characterOneAlive = false;
            charactersToFind.forEach(e => e.num === 1 ? characterOneAlive = true : null)
            if(imageNumber === 1 && characterOneAlive) {
                if(clickedX > 345 && clickedX < 428 && clickedY > 245 && clickedY < 330) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 1) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
            let characterTwoAlive = false;
            charactersToFind.forEach(e => e.num === 2 ? characterTwoAlive = true : null)
            if(imageNumber === 2 && characterTwoAlive) {
                
                if(clickedX > 173 && clickedX < 219 && clickedY > 550 && clickedY < 630) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 2) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
            let characterThreeAlive = false;
            charactersToFind.forEach(e => e.num === 3 ? characterThreeAlive = true : null)
            if(imageNumber === 3 && characterThreeAlive) {
                
                if(clickedX > 725 && clickedX < 825 && clickedY > 820 && clickedY < 855) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 3) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
        }

        if(props.level === 'Normal') {
            let characterOneAlive = false;
            charactersToFind.forEach(e => e.num === 1 ? characterOneAlive = true : null)
            if(imageNumber === 1 && characterOneAlive) {
                
                if(clickedX > 642 && clickedX < 892 && clickedY > 910 && clickedY < 940) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 1) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
            let characterTwoAlive = false;
            charactersToFind.forEach(e => e.num === 2 ? characterTwoAlive = true : null)
            if(imageNumber === 2 && characterTwoAlive) {
                
                if(clickedX > 836 && clickedX < 906 && clickedY > 132 && clickedY < 185) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 2) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
            let characterThreeAlive = false;
            charactersToFind.forEach(e => e.num === 3 ? characterThreeAlive = true : null)
            if(imageNumber === 3 && characterThreeAlive) {
                
                if(clickedX > 166 && clickedX < 199 && clickedY > 182 && clickedY < 204) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 3) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
        }
        
        if(props.level === 'Hard') {
            let characterOneAlive = false;
            charactersToFind.forEach(e => e.num === 1 ? characterOneAlive = true : null)
            if(imageNumber === 1 && characterOneAlive) {

                alert('X is:   '  + ((imageWidth/window.innerWidth) +  clickedX) + 
                '    Y is:   '  + ((imageWidth/window.innerWidth) + clickedY) + 
                '   client / windows inner width:  ' + (imageWidth/window.innerWidth))
                
                if(clickedX > 716 && clickedX < 739 && clickedY > 805 && clickedY < 836) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 1) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
            let characterTwoAlive = false;
            charactersToFind.forEach(e => e.num === 2 ? characterTwoAlive = true : null)
            if(imageNumber === 2 && characterTwoAlive) {
                
                if(clickedX > 927 && clickedX < 944 && clickedY > 900 && clickedY < 922) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 2) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
            let characterThreeAlive = false;
            charactersToFind.forEach(e => e.num === 3 ? characterThreeAlive = true : null)
            if(imageNumber === 3 && characterThreeAlive) {
                
                if(clickedX > 983 && clickedX < 995 && clickedY > 370 && clickedY < 390) {
                    
                charactersToFind.forEach((e, index) => {
                    if(e.num === 3) {
                        let charactersToFindCopy = [...charactersToFind];
                        charactersToFindCopy.splice(index, 1);
                        setCharactersToFind(charactersToFindCopy)
                    }
                })
    
                } 
            }
        }
        
    }

    let isWellDoneOpen = useSelector(state => state.wellDoneSlice.wellDone);
    if (!isWellDoneOpen){
        if(charactersToFind.length === 0) {
            disptach(backdropSliceActions.turnOnBackdrop());
            disptach(wellDoneSliceActions.turnOnWellDone());
        };
    };
    

    //Code above is to be moved to DataBase



     return (
        <div className={classes.GamePageBody} >
            <div className={beginningClass} onClick={() => isDropDownOpen && toggleDropDown()}>
                <p className={beginningTextClass}>
                    Please find: 
                </p>
                <img style={{
                    border: !imageOneFound ? 'none' : '4px solid green'
                }} src={characterOne} className={classes.CharacterImageOne} alt='FindOne'/>
                <img style={{
                    border: !imageTwoFound ? 'none' : '4px solid green'
                }} src={characterTwo} className={classes.CharacterImageTwo} alt='FindTwo'/>
                <img style={{
                    border:  !imageThreeFound ? 'none' : '4px solid green'
                }} src={characterThree} className={classes.CharacterImageThree} alt='FindThree'/>
            </div>
            <div  className={classes.GameImageHolder}>
            <img onClick={(event) => {
                changeClickedX(event);
                changeClickedY(event);
                !isDropDownOpen && toggleDropDown();
            }} 
                     alt='GameImage'
                     className={beginningImageClass} 
                     src={props.level === 'Easy' ? easy : props.level === 'Normal' ? normal : hard} ></img>

            </div>
            {isDropDownOpen ? <div style={{
                position: 'absolute',
                display: 'grid',
                gridTemplateColumns: 'auto',
                width: 'calc(10vh + 10vw)',
                backgroundColor: 'transparent',
                left: 'calc(' + (clickedX  + (window.innerWidth/6.6)) + 'px - 5vh - 5vw)',
                top: clickedY
            }}>
                {charactersToFind.map((e) => <img src={e.sourceImage} 
                                                  key={e.num}
                                                  className={classes.DropDownCharacter} 
                                                  onClick={(element) => {searchingFor(e, element)}} 
                                                  alt='Character'/>)}

            </div> : null}
        </div>
    )
}

export default GamePage;