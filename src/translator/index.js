import EN from './translations/en.json';
import IT from './translations/it.json';

export const capitalizeFirstLetter = (string) => {
  return typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : null;
};

export const translate = (key, language = 'EN') => {
  const languages = {
    EN,
    IT
  };
  const selectedLanguageKeys = languages[language] || languages.EN;

  return selectedLanguageKeys[key] || key;
};
