import './LearningBoardContainer.css'
import LearningBoard from './LearningBoard';
import { useReducer } from 'react';
import BoardThemeSelector from '../ThemeSelectorComponents/BoardThemeSelector';
import { BoardThemeReducer } from '../Reducers/BoardThemeReducer';


function LearningBoardContainer()
{
    let boardTheme = useReducer(BoardThemeReducer, "blackBoard");

    return (
        <div className='learningBoardContainer'>
        <BoardThemeSelector dispatch={boardTheme[1]}/>
        <h1 className='heading'>What we have learnt today?</h1>
        <LearningBoard theme={boardTheme[0]}/>
        </div>
    )
}

export default LearningBoardContainer;
