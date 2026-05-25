# 安装和设置指南

## 问题说明

由于 VuePress 2 和 vuepress-theme-reco 之间存在依赖冲突，我已将项目迁移到 **VitePress**，这是一个更现代、更稳定的静态网站生成器。

## 快速开始

### 1. 清理旧依赖

在项目目录中打开 PowerShell 或 CMD，运行：

```powershell
# 删除旧的 node_modules 和 package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
```

### 2. 安装 VitePress

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问本地服务器查看网站（运行命令后会显示具体端口）。

### 4. 构建生产版本

```bash
npm run build
```

构建后的文件在 `.vitepress/dist` 目录中。

## 项目结构（VitePress）

```
HiyorinI.github.io/
├── .vitepress/
│   └── config.mjs          # VitePress 配置文件
├── zh/                      # 中文文档
│   ├── components/          # 组件文档
│   └── pages/               # 指南页面
├── public/                  # 静态资源
│   ├── img/                 # 图片
│   └── js/                  # JavaScript
├── index.md                 # 首页
└── package.json             # 项目配置
```

## 配置说明

### 导航栏

编辑 `.vitepress/config.mjs` 中的 `themeConfig.nav`：

```javascript
nav: [
  { text: '指南', link: '/zh/pages/about' },
  { text: '组件', link: '/zh/pages/components' },
]
```

### 侧边栏

编辑 `.vitepress/config.mjs` 中的 `themeConfig.sidebar`：

```javascript
sidebar: {
  '/zh/': [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/zh/pages/about' },
        // ...
      ]
    }
  ]
}
```

### 首页

编辑 `index.md`：

```yaml
---
layout: home

hero:
  name: "标题"
  text: "副标题"
  tagline: "描述"
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/pages/quickstart
---
```

## 添加新页面

1. 在 `zh/pages/` 或 `zh/components/` 创建 `.md` 文件
2. 在 `.vitepress/config.mjs` 的 sidebar 中添加链接
3. 重启开发服务器

## 部署

### GitHub Pages

1. 安装 gh-pages：
```bash
npm install --save-dev gh-pages
```

2. 添加部署脚本到 `package.json`：
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d .vitepress/dist"
}
```

3. 部署：
```bash
npm run deploy
```

### Vercel/Netlify

1. 构建命令：`npm run build`
2. 输出目录：`.vitepress/dist`

## 故障排除

### 端口被占用

VitePress 会自动使用下一个可用端口。

### 样式不生效

清除浏览器缓存或强制刷新（Ctrl+F5）。

### 页面 404

检查 `config.mjs` 中的路径配置是否正确。

## 参考文档

- [VitePress 文档](https://vitepress.dev/)
- [Markdown 扩展](https://vitepress.dev/guide/markdown)
- [主题配置](https://vitepress.dev/reference/default-theme-config)

## 已完成的内容

✅ 17 个文档页面（指南 + 组件）
✅ 完整的导航配置
✅ 响应式布局
✅ 亮色/暗色主题
✅ 代码高亮
✅ 中文本地化

祝你使用愉快！🎉
