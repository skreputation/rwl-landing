import React, { createContext } from 'react';
import { EnFlagIcon, ItFlagIcon } from '../assets';
import useLocalStorage from '../hooks/useLocalStorage';

export const languageConfig = {
  IT: {
    languageKey: 'IT',
    flag: <ItFlagIcon style={{ width: 20 }} />,
    label: 'italian'
  },

  EN: {
    languageKey: 'EN',
    flag: <EnFlagIcon style={{ width: 20 }} />,
    label: 'english'
  }
};

export const LanguageContext = createContext();

const DEFAULT_LANGUAGE = languageConfig.IT.languageKey;

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', DEFAULT_LANGUAGE);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageConsumer = LanguageContext.Consumer;
