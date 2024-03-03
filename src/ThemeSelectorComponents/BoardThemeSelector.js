import { useContext } from "react";
import {LanguageContext, englishText, spanishText } from "../Contexts/LanguageContext";

function BoardThemeSelector(props){
    let langState = useContext(LanguageContext);

    let langText = useContext(langState[0] == 'en' ? englishText : spanishText);

    let selectionLbl = langText.selectBoradLbl;

    return(
        <div>
            <label className='selectionLabel'> {selectionLbl} </label>
            <select className="selector" onChange={(event) => props.dispatch(event.target.value)}>
                <option value="black">BLACK</option>
                <option value="white">WHITE</option>
            </select>
        </div>
    )
}

export default BoardThemeSelector