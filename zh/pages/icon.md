---
title: 图标
date: 2024-01-01 00:00:00
permalink: /zh/pages/icon/
---

# 图标使用

Avalonia Fluent UI 提供了丰富的图标支持。

## 图标类型

### 1. Fluent 图标

使用内置的 Fluent 图标系统：

```xml
<fluent:PushButton Content="保存">
    <fluent:PushButton.Icon>
        <fluent:PathIcon Data="{StaticResource SaveIcon}"/>
    </fluent:PushButton.Icon>
</fluent:PushButton>
```

### 2. Segoe Fluent Icons

使用 Windows 的 Segoe Fluent Icons 字体：

```xml
<TextBlock Text="&#xE74E;" FontFamily="Segoe Fluent Icons"/>
```

### 3. 自定义图标

可以使用任意 PathGeometry 作为图标：

```xml
<fluent:PathIcon Data="M 10,10 L 20,20 L 30,10 Z"/>
```

## 图标资源

常用的图标资源：

```xml
<Application.Resources>
    <!-- 保存图标 -->
    <StreamGeometry x:Key="SaveIcon">M17,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3M19,19H5V5H16.17L19,7.83V19M12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12M7,15H17V17H7V15Z</StreamGeometry>
    
    <!-- 删除图标 -->
    <StreamGeometry x:Key="DeleteIcon">M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z</StreamGeometry>
    
    <!-- 设置图标 -->
    <StreamGeometry x:Key="SettingsIcon">M19.14,12.94C19.16,12.78 19.16,12.61 19.16,12.45C19.16,12.29 19.16,12.12 19.14,11.96L21.41,10.18C21.6,10.03 21.66,9.76 21.52,9.55L19.38,5.85C19.25,5.64 18.98,5.56 18.76,5.65L16.1,6.72C15.53,6.28 14.9,5.92 14.23,5.65L13.83,2.83C13.79,2.59 13.59,2.42 13.35,2.42H9.05C8.81,2.42 8.61,2.59 8.57,2.83L8.17,5.65C7.5,5.92 6.87,6.28 6.3,6.72L3.64,5.65C3.42,5.56 3.15,5.64 3.02,5.85L0.88,9.55C0.74,9.76 0.8,10.03 0.99,10.18L3.26,11.96C3.24,12.12 3.24,12.29 3.24,12.45C3.24,12.61 3.24,12.78 3.26,12.94L0.99,14.72C0.8,14.87 0.74,15.14 0.88,15.35L3.02,19.05C3.15,19.26 3.42,19.34 3.64,19.25L6.3,18.18C6.87,18.62 7.5,18.98 8.17,19.25L8.57,22.07C8.61,22.31 8.81,22.48 9.05,22.48H13.35C13.59,22.48 13.79,22.31 13.83,22.07L14.23,19.25C14.9,18.98 15.53,18.62 16.1,18.18L18.76,19.25C18.98,19.34 19.25,19.26 19.38,19.05L21.52,15.35C21.66,15.14 21.6,14.87 21.41,14.72L19.14,12.94M11.2,15.55A3.1,3.1 0 0,1 8.1,12.45A3.1,3.1 0 0,1 11.2,9.35A3.1,3.1 0 0,1 14.3,12.45A3.1,3.1 0 0,1 11.2,15.55Z</StreamGeometry>
</Application.Resources>
```

## 使用图标按钮

```xml
<fluent:ToolButton Icon="{StaticResource SaveIcon}" ToolTip="保存"/>
```

## 图标大小

可以通过 Width 和 Height 属性控制图标大小：

```xml
<fluent:PathIcon Data="{StaticResource SaveIcon}" 
                 Width="16" Height="16"/>
```

## 图标颜色

图标颜色会跟随文本颜色自动变化：

```xml
<fluent:PathIcon Data="{StaticResource SaveIcon}" 
                 Foreground="Red"/>
```

## 图标库

推荐使用 [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) 获取完整的图标集合。
