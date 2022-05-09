import i18n from 'i18n';
import path from 'path';

i18n.configure({
  locales: ['fr'],
  directory: `${path.resolve()}/dist/locales/`,
  defaultLocale: 'fr',
  cookie: 'lang',
  objectNotation: true,
});

export default i18n;
