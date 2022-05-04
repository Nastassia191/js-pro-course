import React from 'react';

type ContextType = {
  lang: string
  setLang: (lang: string) => void
}


const LanguageContext = React.createContext<ContextType>({
  lang: "en",
  setLang: () => { },
});

export default LanguageContext;