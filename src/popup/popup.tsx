import React, { useEffect } from 'react';
import './popup.css';

import { useTranslation } from 'react-i18next';
import '../common/i18n';

const Popup = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const setLanguage = () => {
      const browserLang = navigator.language.slice(0, 2)?.toUpperCase();
      if (browserLang && ['EN', 'TR'].includes(browserLang)) {
        i18n.changeLanguage(browserLang);
        return;
      }

      i18n.changeLanguage('EN');
    };

    setLanguage();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1>Hello World</h1>
    </div>
  );
};

export default Popup;

