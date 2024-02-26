import './LearningBoardContainer.css'
import LearningBoard from './LearningBoard';


function LearningBoardContainer()
{
    return (
        <div className='learningBoardContainer'>
        <h1 className='heading'>What we have learnt today?</h1>
        <LearningBoard/>
        </div>
    )
}

export default LearningBoardContainer;
