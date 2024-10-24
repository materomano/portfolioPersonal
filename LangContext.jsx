// LangContext.jsx
import React, { createContext, useState, useContext } from 'react';

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('es'); // Por defecto, español

  const switchLang = (language) => {
    setLang(language);
  };

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
};

