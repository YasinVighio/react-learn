import { createContext } from "react";

export const LanguageContext = createContext('en');

export const spanishText = createContext(
    {
    'nextButton': 'Dime',
    'backButton': 'Regresa', 
    'selectLangLbl': 'Seleccione el Idioma',
    'selectSectionLbl': 'Seleccionar Sección'
    }
    );

export const englishText = createContext(
    {
    'nextButton': 'Next', 
    'backButton': 'Back',
    'selectLangLbl': 'Select Language', 
    'selectSectionLbl': 'Select Section'
    }
    );
