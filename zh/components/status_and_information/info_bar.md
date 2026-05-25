---
title: 消息条
date: 2024-01-01 00:00:00
permalink: /zh/components/status_and_information/info_bar/
---

# 消息条


## 消息条 (InfoBar)

<div align="center">
  <img src="/img/info_bar.png" style="border-radius:12px;">
</div>

```xml
<StackPanel
    Width="648"
    Orientation="Vertical"
    Spacing="10">
    <ui:InfoBar
    Title="提示"
    Margin="0,10,10,0"
    IsClosable="False"
    IsOpen="True"
    Message="Information Info Bar"
    Severity="Informational"/>
    <ui:InfoBar
    Title="成功"
    Margin="0,10,10,0"
    IsClosable="False"
    IsOpen="True"
    Message="Success Info Bar"
    Severity="Success"/>
    <ui:InfoBar
    Title="警告"
    Margin="0,10,10,0"
    IsClosable="False"
    IsOpen="True"
    Message="Warning Info Bar"
    Severity="Warning"/>
    <ui:InfoBar
    Title="失败"
    Margin="0,10,10,0"
    IsClosable="True"
    IsOpen="True"
    Message="Error Info Bar"
    Severity="Error"/>
</StackPanel>
```
