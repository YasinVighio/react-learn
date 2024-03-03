import './Section.css'
import LearningBoardContainer from '../LearningBoardComponents/LearningBoardContainer'
import { useContext } from 'react';
import { LanguageContext } from '../Contexts/LanguageContext';

function Section(props){

    let lang = useContext(LanguageContext)[0];
    let txt;

    if(lang == 'en'){
        txt = "You just saw it when you changed language and board theme.";
    } else {
        txt = "Lo acabas de ver cuando cambiaste el idioma y el tema del tablero.";
    }
    if(props.sectionName == 'showLearningBoard'){
        return(
            <LearningBoardContainer/>
        )
    }
    else{
        return(
            <div className='exampleSection'>
                <p>{txt}</p>
            </div>
        )
    }
}

export default Section