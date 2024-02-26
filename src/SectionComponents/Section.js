import './Section.css'
import LearningBoardContainer from '../LearningBoardComponents/LearningBoardContainer'
import { useContext } from 'react';
import { LanguageContext } from '../Contexts/LanguageContext';

function Section(props){

    let lang = useContext(LanguageContext)[0];
    let txt;

    if(lang == 'en'){
        txt = "You just saw it when you changed language.";
    } else {
        txt = "Lo acabas de ver cuando cambiaste de idioma.";
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