//import favicon from '../extensions/logo.png'
// import logo from './extensions/logo.png'


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
    },
   
  },
  // menu: {
  //   logo
  // },
  // head: {
  //   favicon
  // },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
