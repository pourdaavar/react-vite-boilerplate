import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import main from './fa/main.json';

void i18next.use(initReactI18next).init({
  lng: 'fa',
  debug: import.meta.env.DEV,

  resources: {
    fa: {
      main,
    },
  },
});
