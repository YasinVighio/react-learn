import { useContext, useState } from 'react'
import '../Commons/Common.css';
import Section from './Section';
import { LanguageContext, englishText, spanishText } from '../Contexts/LanguageContext';

function SectionSelector(){

    let [sectionName, setSectionName] = useState('showLearningBoard');

    let langState = useContext(LanguageContext);

    let langText = useContext(langState[0] == 'en' ? englishText : spanishText);

    let selectionLbl = langText.selectSectionLbl;

    return(
        <div>
            <div>
                <label className='selectionLabel'>{selectionLbl}</label>
                <select className="selector" onChange={(event) => setSectionName(event.target.value)}>
                    <option value="showLearningBoard">Show Learning Board</option>
                    <option value="showExample">Show Example</option>
                </select>
            </div>
            <Section sectionName = {sectionName}/>
        </div>
    )
}

export default SectionSelector