# 部署指南

## 本地开发

### 1. 安装 Node.js

确保已安装 Node.js 16 或更高版本。

### 2. 安装依赖

```bash
cd HiyorinI.github.io
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

## 部署到 GitHub Pages

### 1. 安装 gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. 添加部署脚本

在 `package.json` 中添加：

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d .vitepress/dist"
  }
}
```

### 3. 部署

```bash
npm run deploy
```

## 部署到其他平台

### Vercel

1. 在 Vercel 导入 GitHub 仓库
2. 设置构建命令：`npm run build`
3. 设置输出目录：`.vitepress/dist`
4. 点击部署

### Netlify

1. 在 Netlify 导入 GitHub 仓库
2. 设置构建命令：`npm run build`
3. 发布目录：`.vitepress/dist`
4. 点击部署

### 静态服务器

将 `.vitepress/dist` 目录的内容复制到任何 Web 服务器的根目录即可。

## 注意事项

1. **图片资源**：确保 `public/img` 目录下有所需的图片文件
2. **基础路径**：如果部署到子目录，需要修改 `.vitepress/config.mjs` 中的 `base` 配置
3. **自定义域名**：在 GitHub 仓库设置中配置自定义域名，或创建 `CNAME` 文件

## 故障排除

### 构建失败

- 检查 Node.js 版本是否 >= 16
- 删除 `node_modules` 和 `package-lock.json`，重新运行 `npm install`

### 样式不生效

- 清除浏览器缓存
- 按 Ctrl+Shift+R 强制刷新

### 路由 404

- 检查 `.vitepress/config.mjs` 中的 `base` 配置
- 确保服务器配置了正确的重写规则
