//import favicon from '../extensions/logo.png'
 import logo from './extensions/favicon.ico'


const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  theme: {
    colors: {
      primary100: '#ccc',
      primary200: '#c9c9c9',
      primary500: '#999',
      primary600: '#000',
      primary700: '#000',
      buttonPrimary600: '#000',
      buttonPrimary200: '#000',
      buttonPrimary500: '#000',
    },
   
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Gorilla Logic",
      "app.components.LeftMenu.navbrand.workplace": "Dashboard",
      "app.components.Homepage.welcome": "GL",
      "Auth.form.welcome.title": "Welcome to Gorilla Logic",
        "Auth.form.welcome.subtitle": "Log in to your App",
    },
  },
  // menu: {
  //   logo
  // },
  head: {
    logo
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
