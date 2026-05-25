import { navbar } from './zh/navbar.js';
import { series } from './zh/series.js';

export const themeConfig = {
  logo: '/img/logo.png',
  locales: {
    '/zh/': {
      selectLanguageName: '简体中文',
      selectLanguageText: '选择语言',
    },
  },
  navbar: navbar,
  sidebar: series,
  socialLinks: [
    { icon: 'GitHub', link: 'https://github.com/HiyorinI' }
  ],
  footer: {
    start: 2024,
    author: 'HiyorinI',
    copyright: 'MIT License'
  }
};
