import { useContext } from 'react';
import '../Commons/Common.css';
import { LanguageContext, englishText, spanishText } from '../Contexts/LanguageContext';

function LanguageSelector(){
    let langState = useContext(LanguageContext);

    let langText = useContext(langState[0] == 'en' ? englishText : spanishText);

    let selectionLbl = langText.selectLangLbl;

    return (
        <div>
            <label className='selectionLabel'> {selectionLbl} </label>
            <select className="selector" onChange={(event) => langState[1](event.target.value)}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
            </select>
        </div>
    )
}

export default LanguageSelector