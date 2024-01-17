import { useTranslation } from 'react-i18next';

export const Main = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <div>{t('page')}</div>
    </div>
  );
};
