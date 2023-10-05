import { useTranslation } from '@i18n/.';

const MainPage = () => {
  const { t, lang, changeLang } = useTranslation('translate');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>{t('greet')}</h2>
      <button
        onClick={() => changeLang(lang === 'ko' ? 'en' : 'ko')}
        type='button'
      >
        Change Language
      </button>
    </div>
  );
};

export default MainPage;
