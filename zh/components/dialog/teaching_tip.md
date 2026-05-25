---
title: 气泡弹窗
date: 2024-01-01 00:00:00
permalink: /zh/components/dialog/teaching_tip/
---

# 气泡弹窗

## 气泡弹窗 (TeachingTip)

<div align="center">
  <img src="/img/teaching_tip.png"  style="border-radius:12px;">
</div>

```xml
 <ui:TeachingTip
    Name="TeachingTip"
    Title="我是气泡弹窗标题"
    ActionButtonContent="Action"
    IsLightDismissEnabled="True"
    IsVisible="False"
    PreferredPlacement="Top"
    Subtitle="我是气泡弹窗的子标题"
    Target="{Binding ElementName=TeachingTipButton}"/>
<Button
    Name="TeachingTipButton"
    Click="ShoTeachingTip"
    Content="显示气泡弹窗"/>
```
```csharp
private void ShoTeachingTip(object? sender, RoutedEventArgs e)
{
    TeachingTip.IsOpen = true;
}
```

## 自定义内容的气泡弹窗

<div align="center">
  <img src="/img/custom_content_teaching_tip.png"  style="border-radius:12px;">
</div>

```xml
<ui:TeachingTip
    Name="TeachingTip"
    Title="我是气泡弹窗标题"
    ActionButtonContent="Action"
    IsLightDismissEnabled="True"
    IsVisible="False"
    PreferredPlacement="Right"
    Subtitle="我是气泡弹窗的子标题"
    Target="{Binding ElementName=TeachingTipButton}">
    <Border ClipToBounds="True" CornerRadius="8">
        <Image
        HorizontalAlignment="Stretch"
        VerticalAlignment="Stretch"
        Source="avares://Test/Assets/mc.jpg"/>
    </Border>
    </ui:TeachingTip>
    <Button
    Name="TeachingTipButton"
    Click="ShoTeachingTip"
    Content="显示气泡弹窗"/>
```