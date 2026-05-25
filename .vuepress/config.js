import { defineUserConfig } from "./config/index";

export const themeConfig = defineUserConfig({
  logo: '/img/logo.png',
  locales: {
    '/zh/': {
      selectLanguageName: '简体中文',
      selectLanguageText: '选择语言',
    },
  },
  navbar: [],
  sidebar: {},
  socialLinks: [
    { icon: 'GitHub', link: 'https://github.com/HiyorinI' }
  ],
  footer: {
    start: 2024,
    author: 'HiyorinI',
    copyright: 'MIT License'
  }
});
