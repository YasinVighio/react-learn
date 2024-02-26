import { useContext, useState } from 'react';
import './LearningBoard.css'
import LearningBoardMessage from './LearningBoardMessage';
import msgs from './Messages';
import { LanguageContext, englishText, spanishText } from '../Contexts/LanguageContext';


function LearningBoard(){

    let lang = useContext(LanguageContext)[0];

    let buttonTxt = useContext(lang == 'en' ? englishText : spanishText);

    let [counter, setCounter] = useState(0);

    let color;

    if(counter>=msgs.length || counter<0){
        setCounter(0);
    }

    if(counter%2 == 0){
        color='blackBoard';
    } else {
        color='otherColor';
    }

    return(
        <div className={`learningBoard ${color}`}>
            <LearningBoardMessage index={counter}/>
            <button  className='showMsgButon btLeft' onClick={
                ()=>setCounter(counter-1)
            }>
                 {buttonTxt.backButton}
             </button>
            <button  className='showMsgButon btRight' onClick={
                ()=>setCounter(counter+1)
            }>
                {buttonTxt.nextButton}
             </button>
        </div>
    )
}

export default LearningBoard;