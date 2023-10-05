import i18n from 'i18next';
import { initReactI18next, useTranslation as useTranslationHook } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import en from './locales/en';
import ko from './locales/ko';

const defaultLanguage = window.location.pathname.split('/')[1] || 'ko';

i18n.use(initReactI18next).init({
  resources: {
    en,
    ko,
  },
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

type LanguageType = 'ko' | 'en';

export const useTranslation = (domain: string) => {
  const {
    t: translate,
    i18n: { language },
  } = useTranslationHook([domain]);

  const navigate = useNavigate();

  const changeLang = (lang: LanguageType) => {
    const [_, __, ...restPathname] = window.location.href
      .split(window.location.origin)[1]
      .split('/');
    navigate(`/${lang}/${restPathname.join('/')}`);
    i18n.changeLanguage(lang);
  };

  return {
    t: (key: string) => {
      return translate(`${domain}:${key}`);
    },
    lang: language as LanguageType,
    changeLang,
  };
};
