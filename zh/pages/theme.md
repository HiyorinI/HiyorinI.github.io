---
title: 主题
date: 2024-01-01 00:00:00
permalink: /zh/pages/theme/
---

# 主题设置

Avalonia Fluent UI 支持亮色和暗色两种主题模式。

## 主题模式

### 跟随系统

默认情况下，应用会跟随操作系统的主题设置：

```xml
<Application xmlns="https://github.com/avaloniaui"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:fluent="using:AvaloniaFluentUI.Styling"
             x:Class="YourApp.App"
             RequestedThemeVariant="Default" // 设置默认主题
              >
    <Application.Styles>
        <fluent:FluentAvaloniaTheme 
        CustomAccentColor="DeepPink" // 自定义主题色
        >
    </Application.Styles>
</Application>
```

## 运行时切换主题

可以通过代码在运行时动态切换主题：

```csharp
using Avalonia;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Styling;

public void SetTheme(ThemeVariant theme)
{
    if (Application.Current is { ApplicationLifetime: IClassicDesktopStyleApplicationLifetime desktop })
    {
        Application.Current.RequestedThemeVariant = theme;
    }
}

// 使用示例
SetTheme(ThemeVariant.Dark);  // 切换到暗色主题
SetTheme(ThemeVariant.Light); // 切换到亮色主题
```