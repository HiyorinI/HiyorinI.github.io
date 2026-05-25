---
title: 滚动区域
date: 2024-01-01 00:00:00
permalink: /zh/components/scroll/smooth_scroll/
---

# 滚动区域


## 平滑滚动区域 (SmoothScrollViewer)

* 支持双向滚动, 水平滚动需按住`Alt`滚动

```xml
<ui:SmoothScrollViewer HorizontalScrollBarVisibility="Visible" VerticalScrollBarVisibility="Visible"/>
```

## 单向平滑滚动区域 (SingleDirectionSmoothScrollViewer)

* 单方向的滚动区域, 通过设置`Orientation`属性来指定滚动方向

```xml
<ui:SingleDirectionScrollViewer Orientation="Horizontal" VerticalScrollBarVisibility="Disabled"/>
```
