import i18n from "i18n";

i18n.configure({
    locales:['fr'],
    directory: `${process.cwd()}/src/locales/`,
    defaultLocale: 'fr',
    cookie: 'lang',
    objectNotation: true
});

export default i18n;