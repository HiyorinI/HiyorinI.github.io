---
title: 内容对话框
date: 2024-01-01 00:00:00
permalink: /zh/components/dialog/dialog/
---

# 对话框

## 内容对话框 (ContentDialog)

<div align="center">
  <img src="/img/content_dialog.png"  style="border-radius:12px;">
</div>

```xml
<ui:ContentDialog
    Name="Dialog"
    Title="我是标题"
    CloseButtonText="关闭"
    Content="我是对话框的内容......"
    DefaultButton="Primary"
    IsPrimaryButtonEnabled="True"
    IsVisible="False"
    PrimaryButtonText="确定"/>
<Button
    Name="RR"
    Click="OnShowCustomDialog"
    Content="显示对话框"/>
```
```csharp
private async void OnShowCustomDialog(object? sender, RoutedEventArgs e)
{
    var result = await Dialog.ShowAsync();
    if (result == ContentDialogResult.Primary)
    {
        Console.WriteLine("OK");
    }
    else
    {
        Console.WriteLine("No");
    }
}
```


## 自定义内容对话框

<div align="center">
  <img src="/img/custom_content_dialog.png"  style="border-radius:12px;">
</div>

```xml
<ui:ContentDialog
    Name="Dialog"
    Title="自定义内容对话框"
    CloseButtonText="关闭"
    DefaultButton="Primary"
    IsPrimaryButtonEnabled="True"
    IsVisible="False"
    PrimaryButtonText="确定">
    <TextBox Watermark="请输入地址"/>
</ui:ContentDialog>
<Button
    Click="OnShowCustomDialog"
    Content="显示对话框"/>
```