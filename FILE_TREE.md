# 项目文件树

```
HiyorinI.github.io/
│
├── 📁 .vuepress/                        # VuePress 配置目录
│   ├── 📁 components/                   # 自定义 Vue 组件
│   │   ├── AuthorCommentCard.vue       # 作者评论卡片
│   │   ├── Banner.vue                  # 首页横幅
│   │   ├── CodeCard.vue                # 代码示例卡片
│   │   ├── ComponentsFeatureCard.vue   # 特性卡片 - 组件
│   │   ├── FluentFeatureCard.vue       # 特性卡片 - Fluent
│   │   ├── Footer.vue                  # 页脚
│   │   ├── Home.vue                    # 主页主组件
│   │   ├── ThemeFeatureCard.vue        # 特性卡片 - 主题
│   │   ├── UserCommentCard.vue         # 用户评论卡片
│   │   └── UserCommentCardContainer.vue # 用户评论容器
│   │
│   ├── 📁 config/                       # 配置文件
│   │   ├── 📁 zh/                       # 中文配置
│   │   │   ├── comments.js             # 评论配置
│   │   │   ├── faqs.js                 # FAQ 配置
│   │   │   ├── home.js                 # 首页配置
│   │   │   ├── index.js                # 配置导出
│   │   │   ├── navbar.js               # 导航栏配置
│   │   │   ├── series.js               # 侧边栏配置
│   │   │   └── showcases.js            # 案例配置
│   │   │
│   │   └── index.js                    # 主题配置入口
│   │
│   ├── 📁 styles/                       # 样式文件
│   │   ├── code.css                    # 代码块样式
│   │   ├── container.css               # 容器样式
│   │   └── index.css                   # 主样式文件
│   │
│   ├── 📁 utils/                        # 工具函数
│   │   ├── locale.js                   # 本地化工具
│   │   └── useCustomPage.js            # 页面工具
│   │
│   ├── config.js                       # JavaScript 配置
│   └── config.ts                       # TypeScript 配置
│
├── 📁 public/                           # 静态资源
│   ├── 📁 code/                         # 示例代码
│   │   ├── example.cs                  # C# 示例
│   │   └── teaching_tip.cs             # 提示示例
│   │
│   ├── 📁 img/                          # 图片资源
│   │   └── README.md                   # 图片说明
│   │
│   ├── 📁 js/                           # JavaScript 文件
│   │   ├── badge.js                    # 徽章脚本
│   │   └── page-banner.js              # 横幅脚本
│   │
│   └── robots.txt                      # 搜索引擎配置
│
├── 📁 zh/                               # 中文文档
│   ├── 📁 components/                   # 组件文档
│   │   ├── 📁 basic_input/             # 基础输入控件
│   │   │   ├── button.md               # 按钮
│   │   │   ├── check_box.md            # 复选框
│   │   │   └── slider.md               # 滑块
│   │   │
│   │   ├── 📁 dialog/                  # 对话框
│   │   │   └── content_dialog.md       # 内容对话框
│   │   │
│   │   ├── 📁 navigation/              # 导航控件
│   │   │   └── navigation_view.md      # 导航视图
│   │   │
│   │   ├── 📁 selection/               # 选择控件
│   │   │   └── combo_box.md            # 组合框
│   │   │
│   │   ├── 📁 status/                  # 状态控件
│   │   │   └── info_bar.md             # 信息栏
│   │   │
│   │   ├── 📁 view/                    # 视图控件
│   │   │   └── list_view.md            # 列表视图
│   │   │
│   │   └── 📁 window/                  # 窗口
│   │       └── fluent_window.md        # Fluent 窗口
│   │
│   └── 📁 pages/                        # 指南页面
│       ├── about.md                    # 简介
│       ├── changelog.md                # 更新日志
│       ├── components.md               # 组件总览
│       ├── icon.md                     # 图标使用
│       ├── install.md                  # 安装指南
│       ├── quickstart.md               # 快速开始
│       └── theme.md                    # 主题设置
│   │
│   └── README.md                        # 中文首页
│
├── .gitignore                          # Git 忽略文件
├── DEPLOY.md                           # 部署指南
├── FILE_TREE.md                        # 本文件
├── package.json                        # NPM 配置
├── PROJECT_SUMMARY.md                  # 项目总结
├── QUICKSTART.md                       # 快速启动
└── README.md                           # 项目说明
```

## 文件统计

### 配置文件：12 个
- VuePress 配置：2 个
- 导航配置：2 个
- 首页配置：6 个

### Vue 组件：10 个
- 主页相关：8 个
- 卡片组件：2 个

### 样式文件：3 个
- 主样式：1 个
- 代码样式：1 个
- 容器样式：1 个

### 文档页面：17 个
- 指南页面：7 个
- 组件文档：10 个

### 工具文件：4 个
- JavaScript 工具：2 个
- JavaScript 脚本：2 个

### 示例代码：2 个
- C# 示例：2 个

### 说明文档：6 个
- README: 1 个
- 部署指南：1 个
- 快速启动：1 个
- 项目总结：1 个
- 文件树：1 个
- 图片说明：1 个

**总计：54 个文件**

## 关键文件说明

### 核心配置
1. **`.vuepress/config.ts`** - VuePress 主配置文件
2. **`.vuepress/config/index.js`** - 主题配置导出
3. **`package.json`** - NPM 依赖和脚本

### 首页相关
1. **`.vuepress/components/Home.vue`** - 首页主组件
2. **`.vuepress/components/Banner.vue`** - 首页横幅
3. **`.vuepress/config/zh/home.js`** - 首页文本配置

### 导航系统
1. **`.vuepress/config/zh/navbar.js`** - 顶部导航栏
2. **`.vuepress/config/zh/series.js`** - 侧边栏导航

### 样式
1. **`.vuepress/styles/index.css`** - 全局样式
2. **`.vuepress/styles/code.css`** - 代码高亮
3. **`.vuepress/styles/container.css`** - 容器样式

### 文档
1. **`zh/README.md`** - 中文首页入口
2. **`zh/pages/*.md`** - 指南页面
3. **`zh/components/**/*.md`** - 组件文档

## 扩展建议

### 需要添加的文件
- [ ] 更多组件文档
- [ ] 实际图片资源
- [ ] 完整的示例代码
- [ ] API 参考文档
- [ ] 常见问题文档
- [ ] 贡献指南

### 可选功能
- [ ] 搜索配置
- [ ] 多语言支持
- [ ] 自定义主题色
- [ ] 暗色模式优化
- [ ] 移动端优化
