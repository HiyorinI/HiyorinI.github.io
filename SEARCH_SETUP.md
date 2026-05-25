# 搜索功能使用说明

## ✅ 已启用本地搜索

搜索功能已经配置完成！VitePress 内置了本地搜索功能，无需额外配置 Algolia。

## 使用方法

### 快捷键

- **Ctrl + K** 或 **Cmd + K** - 打开搜索框
- **Esc** - 关闭搜索框

### 鼠标操作

- 点击导航栏中的搜索图标或"搜索"按钮
- 在搜索框中输入关键词

### 搜索技巧

1. **全文搜索**：搜索所有文档内容
2. **标题搜索**：优先匹配文档标题
3. **模糊匹配**：支持一定程度的拼写错误
4. **高亮显示**：搜索结果会高亮关键词

### 导航

- **↑↓ 方向键** - 选择搜索结果
- **Enter** - 打开选中的结果
- **Ctrl + N / Ctrl + P** - 切换搜索结果

## 搜索配置

搜索功能已配置以下优化：

```javascript
search: {
  provider: 'local',
  options: {
    locales: {
      root: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    miniSearch: {
      highlight: true,  // 高亮搜索结果
      fuzzy: 0.2        // 模糊匹配程度 (0-1)
    }
  }
}
```

## 搜索范围

搜索功能会索引以下内容：

- ✅ 所有文档页面的标题
- ✅ 文档内容
- ✅ 代码块之外的文本
- ✅ 中文和英文内容

## 优化搜索效果

### 在文档中添加自定义搜索权重

在 Markdown 文件 frontmatter 中添加：

```yaml
---
title: 按钮
search:
  weight: 10  # 更高的权重（默认是 1）
---
```

### 排除特定页面

```yaml
---
title: 私有页面
search:
  exclude: true
---
```

## 高级配置

如果需要更强大的搜索功能，可以考虑使用 Algolia DocSearch：

### Algolia DocSearch 配置

```javascript
search: {
  provider: 'algolia',
  options: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
    placeholder: '搜索文档...',
    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询',
          cancelButtonText: '取消'
        }
      }
    }
  }
}
```

申请 Algolia DocSearch：https://docsearch.algolia.com/

## 故障排除

### 搜索不到内容

1. 确保文档已正确构建
2. 清除浏览器缓存
3. 检查文档路径是否正确

### 搜索性能慢

1. 减少单个页面的内容长度
2. 使用 `search.exclude` 排除不重要的页面
3. 考虑使用 Algolia DocSearch

### 中文搜索不准确

VitePress 的本地搜索已经优化了中文分词，如果仍有问题：

1. 尝试使用更精确的关键词
2. 使用标题搜索而非全文搜索

## 参考链接

- [VitePress 搜索文档](https://vitepress.dev/reference/default-theme-search)
- [MiniSearch 配置](https://lucaong.github.io/minisearch/classes/_src_minisearch_.minisearch.html)
