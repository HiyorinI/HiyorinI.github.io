# Avalonia Fluent UI 文档

这是 Avalonia Fluent UI 组件库的官方中文文档网站。

## 技术栈

- **VitePress** - 静态网站生成器
- **Vue 3** - 前端框架
- **Vite** - 构建工具

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问本地服务器查看文档网站（运行命令后会显示具体端口）。

### 构建生产版本

```bash
npm run build
```

构建输出将在 `.vitepress/dist` 目录中。

## 目录结构

```
HiyorinI.github.io/
├── .vitepress/              # VitePress 配置
│   └── config.mjs          # 配置文件
├── public/                  # 静态资源
│   ├── img/                # 图片
│   └── js/                 # JavaScript
├── zh/                      # 中文文档
│   ├── components/         # 组件文档
│   └── pages/              # 指南页面
├── index.md                 # 首页
└── package.json             # 项目配置
```

## 文档内容

### 指南页面

- 简介
- 安装
- 快速开始
- 主题
- 图标
- 组件总览
- 更新日志

### 组件文档

- 按钮、滑块、复选框
- 组合框
- 导航视图
- 内容对话框
- 信息栏
- 列表视图
- Fluent 窗口

## 自定义配置

### 修改导航

编辑 `.vitepress/config.mjs` 中的 `themeConfig.nav`。

### 修改侧边栏

编辑 `.vitepress/config.mjs` 中的 `themeConfig.sidebar`。

### 修改首页

编辑 `index.md` 文件。

## 部署

### GitHub Pages

```bash
npm run build
# 将 .vitepress/dist 目录部署到 gh-pages 分支
```

### Vercel/Netlify

1. 导入 GitHub 仓库
2. 设置构建命令：`npm run build`
3. 设置输出目录：`.vitepress/dist`
4. 点击部署

## 注意事项

1. **图片资源**：确保 `public/img/` 目录下有 `logo.png`
2. **自定义域名**：在仓库设置中配置或使用 `CNAME` 文件
3. **基础路径**：如果部署到子目录，修改 `config.mjs` 中的 `base` 配置

## 参考

- [VitePress 文档](https://vitepress.dev/)
- [Avalonia Fluent UI GitHub](https://github.com/HiyorinI/AvaloniaFluentUi)

## 许可证

MIT License
