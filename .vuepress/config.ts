import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { navbar } from "./config/zh/navbar.js";
import { series } from "./config/zh/series.js";

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Avalonia Fluent UI",
  description: "基于 Avalonia 的 Fluent Design 风格组件库",

  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['script', { src: '/js/badge.js' }],
    ['script', { src: '/js/page-banner.js' }],
  ],

  theme: defaultTheme({
    logo: '/img/logo.png',
    navbar: navbar,
    sidebar: series,
    editLink: false,
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  }),

  base: '/',
});
