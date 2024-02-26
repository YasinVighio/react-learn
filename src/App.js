import { useState } from 'react';
import './App.css';
import './Commons/Common.css';
import SectionSelector from './SectionComponents/SectionSelector';
import LanguageSelector from './LanguageSelectorComponents/LanguageSelector';
import {LanguageContext} from './Contexts/LanguageContext';

function App() {

  //the language state will be changed using language selector child component

  let langState = useState('en');

  return (
    <LanguageContext.Provider value={langState}>
    <div className="mainDiv">
      <LanguageSelector/> 
      <SectionSelector/>
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
