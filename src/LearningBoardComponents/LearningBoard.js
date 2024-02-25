import { useState } from 'react';
import './LearningBoard.css'
import LearningBoardMessage from './LearningBoardMessage';
import msgs from './Messages';


function LearningBoard(){
    let [counter, setCounter] = useState(0);

    if(counter>=msgs.length || counter<0){
        setCounter(0);
    }

    return(
        <div className="learningBoard">
            <LearningBoardMessage index={counter}/>
            <button  className='showMsgButon btLeft' onClick={
                ()=>setCounter(counter-1)
            }>
                 I forgot
             </button>
            <button  className='showMsgButon btRight' onClick={
                ()=>setCounter(counter+1)
            }>
                 Tell me
             </button>
        </div>
    )
}

export default LearningBoard;