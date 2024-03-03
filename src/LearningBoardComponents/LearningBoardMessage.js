import './LearningBoardMessage.css'
import msgs from './Messages';

function LearningBoardMessage(props){
    return(
        <h3 className='learningBoardMsg'>{props.index+1}. {msgs[props.index]}</h3>
    )
}

export default LearningBoardMessage;